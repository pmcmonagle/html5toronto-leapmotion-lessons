/**
 * @namespace  lessons.leapjs
 * @class      2.2
 * Lesson 2.2 - Detecting hands, pointables, fingers and tools
 */
define(
	['leap'],
	function () {
		"use strict";
			
		/**
		 * @constructor
		 */
		function Lesson() {
			// Back to Leap.loop
			Leap.loop(function (frame) {
				// As we already saw, frame
				// contains arrays of hands,
				// pointables, fingers and tools.
				if(frame.hands.length > 0)      console.log(frame.hands[0]);
				if(frame.pointables.length > 0) console.log(frame.pointables[0]);
				if(frame.fingers.length > 0)    console.log(frame.fingers[0]);
				if(frame.tools.length > 0)      console.log(frame.tools[0]);
				
				// Just for fun...
				var i;
				if(frame.hands.length > 0) {
					for(i in frame.hands) {
						// Log if we see a fast-moving palm!
						if(frame.hands[i].palmVelocity.z > 3000) {
							console.log("FALCON PUNCH!");
						}
					}
					
				}
				if(frame.pointables.length > 0) {
					for(i in frame.pointables) {
						// Log if we see a fast-moving pointable!
						if(frame.pointables[i].tipVelocity.z > 3000) {
							console.log("FALCON POKE!");
						}
					}
				}
			});
		}
		
		return Lesson;
	}
);