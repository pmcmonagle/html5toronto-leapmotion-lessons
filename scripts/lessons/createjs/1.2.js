/**
 * @namespace  lessons.createjs
 * @class      1.2
 * Lesson 1.2 - Using createjs.Ticker to update the stage.
 */
define(
	['create'],
	function (CJSMouseAdapter) {
		"use strict";
		
		var canvas,
			stage,
			background;
			
		/**
		 * @constructor
		 */
		function Lesson() {
			// createjs.Ticker shouldn't be instantiated.
			// Its methods are static, and should called
			// directly. The method setFPS will determine
			// how often the "tick" event is fired.
			// Common values for FPS are 30, 60 and 120.
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