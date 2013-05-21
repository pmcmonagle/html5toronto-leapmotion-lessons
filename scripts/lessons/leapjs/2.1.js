/**
 * @namespace  lessons.leapjs
 * @class      2.1
 * Lesson 2.1 - Creating a Leap Contoller manually.
 */
define(
	['leap'],
	function () {
		"use strict";
			
		/**
		 * @constructor
		 */
		function Lesson() {
			// Leap.loop() simply creates a new
			// instance of Leap.Controller for you.
			// The Controller, in turn, creates an
			// instance of Leap.Connection when its
			// connect method is called. All of this
			// can be done manually as well.
			var controller = new Leap.Controller();
			
			// Leap.loop will choose "frame" or
			// "animationFrame" automatically.
			// Using animationFrame may be more
			// performant, but also gets ignored
			// by some environments. It's recommended
			// to just use Leap.loop(). I have yet to
			// find a good reason not to.
			controller.on("frame", leapHandler);
			//controller.on("animationFrame", leapHandler);
			
			controller.connect();
		}
		
		/**
		 * @private
		 * Handler for Leap Motion frame events.
		 */
		function leapHandler(frame, done) {
			console.log(frame);
			
			// Done apparently does nothing here.
			// my guess is that it's only supported
			// by Leap.loop()
			setTimeout(done, 2000);
		}
		
		return Lesson;
	}
);