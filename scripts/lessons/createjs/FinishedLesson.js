/**
 * @namespace  lessons.createjs
 * @class      FinishedLesson
 * Finished Lesson - A caterpillar that follows the mouse.
 */
define(
	['game/CJSMouseAdapter', 'game/Caterpillar', 'create'],
	function (CJSMouseAdapter, Caterpillar) {
		"use strict";
		
		var canvas,
			stage,
			background,
			mouse,
			caterpillar;
			
		/**
		 * @constructor
		 */
		function Lesson() {
			initStage();       // Lesson 1.0
			addBackground();   // Lesson 1.1
			initTicker();      // Lesson 1.2
			addAdapter();      // Lesson 1.3
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
			caterpillar = new Caterpillar(mouse);
			stage.addChild(caterpillar);
		}
		
		/**
		 * @private
		 * Lesson 1.3
		 * Add an adapter class for Leap Motion
		 * (or, for now, the Mouse)
		 */
		function addAdapter() {
			mouse = new CJSMouseAdapter(stage);
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