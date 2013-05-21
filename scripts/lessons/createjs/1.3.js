/**
 * @namespace  lessons.createjs
 * @class      1.3
 * Lesson 1.3 - Adding an adapter class for Leap Motion (or the mouse, for now)
 */
define(
	['game/CJSMouseAdapter', 'create'],
	function (CJSMouseAdapter) {
		"use strict";
		
		var canvas,
			stage,
			background,
			mouse;
			
		/**
		 * @constructor
		 */
		function Lesson() {
			initStage();       // Lesson 1.0
			addBackground();   // Lesson 1.1
			initTicker();      // Lesson 1.2
			
			// If you're using RequireJS, you'll
			// pass the location of the required
			// file into the array on line 7. The
			// order of this array is important;
			// its items are mapped to the arguments
			// passed into anonymous function that
			// wraps this module. Once it's set up
			// as a dependency, it can be instantiated
			// as shown below. Feel free to open up
			// game/CJSMouseAdapter.js to see how'
			// it works!
			mouse = new CJSMouseAdapter(stage);
		}
		
		return Lesson;
	}
);