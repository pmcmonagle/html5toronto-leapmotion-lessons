/**
 * @namespace  lessons.createjs
 * @class      1.0
 * Lesson 1.0 - Creating a stage, and adding children.
 */
define(
	['create'],
	function () {
		"use strict";
		
		var canvas,
			stage;
			
		/**
		 * @constructor
		 */
		function Lesson() {
			// CreateJS is really easy!
			// Start by grabbing the canvas tag
			// from the DOM. Then simply pass it
			// to a new instance of createjs.Stage.
			canvas = document.getElementById("createjs-lesson-area");
			stage  = new createjs.Stage(canvas);
		}
		
		return Lesson;
	}
);