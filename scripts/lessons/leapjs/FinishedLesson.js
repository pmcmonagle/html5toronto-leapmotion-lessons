/**
 * @namespace  lessons.leapjs
 * @class      FinishedLesson
 * Finished Lesson - A caterpillar that follows a finger.
 */
define(
	['game/CJSLeapMotionAdapter', 'game/Caterpillar', 'create'],
	function (CJSLeapMotionAdapter, Caterpillar) {
		"use strict";
		
		var canvas,
			stage,
			background,
			leap,
			caterpillar;
			
		/**
		 * @constructor
		 */
		function Lesson() {
			initStage();       // Lesson 1.0
			addBackground();   // Lesson 1.1
			initTicker();      // Lesson 1.2
			addAdapter();      // Lesson 2.3 !!!
			addCaterpillar();  // Lesson 1.4
			growCaterpillar(); // Lesson 1.5
		}
		
		/**
		 * @private
		 * Lesson 1.5
		 * Call the caterpillar's grow method
		 * until it reaches the desired length.
		 */
		function growCaterpillar() {
			while(caterpillar.getNumChildren() < 6) {
				caterpillar.grow();
			}
		}
		
		/**
		 * @private
		 * Lesson 1.4
		 * Add a caterpillar, and have it follow
		 * the adapter on "tick".
		 */
		function addCaterpillar() {
			caterpillar = new Caterpillar(leap);
			stage.addChild(caterpillar);
		}
		
		/**
		 * @private
		 * Lesson 2.3
		 * Add an adapter class for Leap Motion
		 */
		function addAdapter() {
			leap = new CJSLeapMotionAdapter(stage);
			leap.addEventListener("LeapEvent.GESTURE_STOP", function (e) { 
				console.log("Gesture Stopped : " + e.data.type); 
			});
			leap.addEventListener("LeapEvent.INACTIVITY_WARNING", function (e) { 
				console.log("Where did you go?"); 
			});
			leap.addEventListener("LeapEvent.DISCONNECT_ERROR", function (e) { 
				console.log("Your device appears to have been disconnected."); 
			});
		}
		
		/**
		 * @private
		 * Lesson 1.2
		 * Start a ticker at 30 FPS.
		 */
		function initTicker() {
			createjs.Ticker.setFPS(120);
			createjs.Ticker.addEventListener("tick", function (e) {
				stage.update();
			});
		}
		
		/**
		 * @private
		 * Lesson 1.1
		 * Creating static Display Objects.
		 * Note: does nothing because stage.update()
		 * runs before the image is loaded.
		 */
		function addBackground() {
			background = new createjs.Bitmap("images/background.png");
			stage.addChild(background);
			stage.update();
		}
		
		/**
		 * @private
		 * Lesson 1.0
		 * Set the canvas and stage.
		 */
		function initStage() {
			canvas = document.getElementById("createjs-lesson-area");
			stage  = new createjs.Stage(canvas);
		}
		
		return Lesson;
	}
);