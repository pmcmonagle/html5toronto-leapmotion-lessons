/**
 * @namespace  lessons.leapjs
 * @class      2.3
 * Lesson 2.3 - Detecting gestures
 */
define(
	[],
	function () {
		"use strict";
			
		/**
		 * @constructor
		 */
		function Lesson() {
			// Finally, gestures must be explictely
			// declared as something we want to look
			// for in Leap.loop().
			Leap.loop({enableGestures: true}, function (frame) {
				// With "enableGestures: true" passed
				// into Leap.loop, we can now pull
				// gesture data of an array the same
				// way we did with hands and pointables.
				if(frame.gestures.length > 0) console.log(frame.gestures[0]);
			});
		}
		
		return Lesson;
	}
);