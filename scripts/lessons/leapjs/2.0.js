/**
 * @namespace  lessons.leapjs
 * @class      2.0
 * Lesson 2.0 - Using Leap.loop() to capture Leap Motion data.
 */
define(
	['leap'],
	function () {
		"use strict";
			
		/**
		 * @constructor
		 */
		function Lesson() {
			// The easiest way of getting
			// Leap Motion data is to use
			// Leap.loop()
			Leap.loop(function (frame, done) {
				// The frame passed in by Leap.loop
				// contains all the data you need.
				// Leap.loop runs with great frequency
				// so limit its output with done()
				// or use a break point!
				console.log(frame);
				setTimeout(done, 500);
			});
		}
		
		return Lesson;
	}
);