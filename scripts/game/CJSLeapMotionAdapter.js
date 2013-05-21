/**
 * @namespace  game
 * @class      CJSLeapMotionAdapter
 * An adapter meant to translate Leap Motion data into
 * x, y coordinates on the canvas. Includes a cursor!
 */
define(
	['create', 'leap'],
	function () {
		"use strict";
		
		var boundaryLeft   = -150, // -260,
			boundaryRight  =  150, //  260,
			boundaryTop    =  400, //  600,
			boundaryBottom =  200; //  0;
		
		/**
		 * @constructor
		 */
		function CJSLeapMotionAdapter(stage) {
			var self   = this,
				cursor = new createjs.Bitmap("images/cursor.png"),
				inactivityTimer = {timeout: undefined, callback: inactivityHandler, duration: 15000},
				disconnectTimer = {timeout: undefined, callback: disconnectHandler, duration: 5000},
				translationX,
				translationY;
				
			this.x = 0;
			this.y = 0;
			this.isEventDispatcher = true;
			this._listeners        = [];
			
			resetTimer(inactivityTimer);
			resetTimer(disconnectTimer);
				
			stage.addChild(this.cursor);
			
			/** 
			 * @privileged
			 * Leap.loop first this anonymous function
			 * every time we receive frame data.
			 */
			Leap.loop({enableGestures: true}, function (frame) {
				// Reset our disconnect and inactivity timers if appropriate.
				// Leap.loop will never run if the device is disconnected, so it
				// should be reset every time this function runs.
				resetTimer(disconnectTimer);
				if(frame.hands.length > 0 || frame.pointables.length > 0) {
					resetTimer(inactivityTimer);
				}
				
				// If we have pointables, map the tip of the first
				// pointable to the appropriate canvas coordinates.
				// Note that in some cases, frame.hands[0].palmPosition
				// may work better than frame.pointables[0].tipPosition.
				if (frame.pointables.length > 0) {
					// Create a translation by dividing the usable area into the canvas.
					translationX = stage.canvas.width  / (Math.abs(boundaryLeft)   + Math.abs(boundaryRight));
					translationY = stage.canvas.height / (Math.abs(boundaryBottom) - Math.abs(boundaryTop));
					
					// Map x,y to the translation tip position.
					self.x = cursor.x = Math.round(
						(frame.pointables[0].tipPosition.x + Math.abs(boundaryLeft)) * translationX
					);
					self.y = cursor.y = Math.round(
						frame.pointables[0].tipPosition.y * translationY
					) + stage.canvas.height + boundaryTop;
					
					// Force the cursor to the top of the stage.
					stage.removeChild(cursor);
                    stage.addChild(cursor);
				}
				
				// Dispatch an event when we see one. The event
				// type will be one of GESTURE_START, GESTURE_UPDATE,
				// or GESTURE_STOP.
				if (frame.gestures.length > 0) {
					self.dispatchEvent({
						type: "LeapEvent.GESTURE_" + frame.gestures[0].state.toUpperCase(), 
						data: {type: frame.gestures[0].type, x: self.x, y: self.y}, 
						target: self
					});
				}
			});
			
			/**
			 * @privileged
			 * Handler for the Inactivity Timer
			 */
			function inactivityHandler() {
				self.dispatchEvent({type: "LeapEvent.INACTIVITY_WARNING", data: {}, target: self});
			}
			
			/**
			 * @privileged
			 * Handler for the Disconnect Timer
			 */
			function disconnectHandler() {
				self.dispatchEvent({type: "LeapEvent.DISCONNECT_ERROR", data: {}, target: self});
			}
		}
		
		/**
		 * @private
		 * @param {Object} timer - Any object with timeout, duration and callback as a properties.
		 * Reset an internal timer.
		 */
		function resetTimer(timer) {
			clearTimeout(timer.timeout);
			timer.timeout = setTimeout(timer.callback, timer.duration);
		}
		
		/**
		 * @public
		 * @param {Object} eventObject
		 *	Pass in an object describing the event.
		 * 	Example: {type: "ProgressEvent.FINISHED", data: {}, target: this}
		 * This method loops through all event listeners attached to this
		 * object. If a listener's "type" matches the "type" of the 
		 * dispatched event, the listener's callback is fired.
		 */
		CJSLeapMotionAdapter.prototype.dispatchEvent = function (eventObject) {
			var i, test;
			for (i = 0; i < this._listeners.length; i++) {
				test = this._listeners[i];
				if (test.type === eventObject.type) {
					test.callback(eventObject);
					break;
				}
			}
		};
		
		/**
		 * @public
		 * @param {String}   type     - Describe the type of event as a string.
		 * @param {Function} callback - A function to call when the event is dispatched.
		 * @param {Boolean}  capture  - This is currently unused.
		 * This method allows us to attach multiple event listeners to our object.
		 * Existing listeners are looped through and entries with duplicate type and
		 * callback are ignored.
		 */
		CJSLeapMotionAdapter.prototype.addEventListener = function (type, callback, capture) {
			var i, test, declared = false;
			for (i = 0; i < this._listeners.length; i += 1) {
				test = this._listeners[i];
				if (test.type === type && test.callback === callback) {
					declared = true;
					break;
				}
			}
			if (!declared) {
				this._listeners.push({'type': type, 'callback': callback, 'capture': capture});
			}
		};
		
		return CJSLeapMotionAdapter;
	}
);