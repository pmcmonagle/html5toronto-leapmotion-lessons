/**
 * @namespace  game
 * @class      CJSMouseAdapter
 * @extends    createjs.Text
 * A completely redundant adapter for drawing mouse x,y to the canvas.
 */
define(
	['create'],
	function () {
		"use strict";
		
		/**
		 * @constructor
		 */
		function CJSMouseAdapter(stage) {
			var self   = this,
				cursor = new createjs.Bitmap("images/cursor.png");
				
			this.loop = setInterval(loop, 10);
			stage.addChild(this.cursor);
			
			/**
			 * @priveleged
			 * This class, and this method are
			 * both 100% redundant for the mouse.
			 * I'm only doing it so we can draw
			 * parallels to Leap.loop() later on.
			 */
			function loop() {
				self.x = cursor.x = stage.mouseX;
				self.y = cursor.y = stage.mouseY;
				
				stage.removeChild(cursor);
				stage.addChild(cursor);
			};
		}
		
		return CJSMouseAdapter;
	}
);