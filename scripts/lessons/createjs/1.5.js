/**
 * @namespace  lessons.createjs
 * @class      1.5
 * Lesson 1.5 - Growing the caterpillar!
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
			addCaterpillar();  // Lesson 1.4
			
			// All we're doing here is telling
			// our Caterpillar to add more instances
			// of the Body class. There's not really
			// much of a lesson here, so I'll take this
			// time to point out that our lesson has no
			// concept of Head, Body, or their
			// corresponding .js files. RequireJS is able
			// to gather all dependencies recursively, and
			// ensure that the JavaScript files we need are
			// loaded and available.
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