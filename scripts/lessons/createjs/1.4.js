/**
 * @namespace  lessons.createjs
 * @class      1.4
 * Lesson 1.4 - Extending createjs Displaty Objects to add your own interactivity.
 */
define(
	['game/CJSMouseAdapter', 'game/Caterpillar', 'create'],
	function (CJSMouseAdapter) {
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
			
			// Caterpillar, as seen below, inherits
			// from createjs.Container. This allows
			// us to treat it like any standard
			// Display Object. This includes the use
			// of addChild. Caterpillar contains
			// a Head and several Body parts, all
			// of which inherit from createjs.Bitmap
			// for the same reasons. Feel free to
			// examine these files for more details.
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