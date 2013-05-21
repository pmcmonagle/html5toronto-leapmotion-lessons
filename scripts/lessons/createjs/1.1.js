/**
 * @namespace  lessons.createjs
 * @class      1.1
 * Lesson 1.1 - Adding static display objects to the stage.
 */
define(
	['create'],
	function () {
		"use strict";
		
		var canvas,
			stage,
			background;
			
		/**
		 * @constructor
		 */
		function Lesson() {
			initStage();       // Lesson 1.0
		
			// Now you can start appending Display
			// Objects as children of the stage.
			// createjs.Text, createjs.Bitmap, and
			// and createjs.BitmapAnimation are all
			// examples of Display Objects.
			background = new createjs.Bitmap("images/background.png");
			stage.addChild(background);
			
			// The canvas will only be redrawn when you
			// call stage.update(). If you don't call this
			// method, you won't see any display objects.
			// However, calling it here will actually do
			// nothing since the method is run before our
			// image is fully loaded.
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