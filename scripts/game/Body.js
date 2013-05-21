/**
 * @namespace  game
 * @class      Body
 * @extends    createjs.Bitmap
 * Each Body is meant to follow its immediate sibling,
 * and nothing more.
 */
define(
	['create'],
	function () {
		"use strict";
			
		/**
		 * @constructor
		 */
		function Body(n) {
			// In the full game, the image corresponds
			// to the number 'n' that we've passed in.
			createjs.Bitmap.call(this, "images/caterpillarBody.png");
			
			// Set registration point.
			this.regX = 72;
			this.regY = 36;
		}
		Body.prototype = new createjs.Bitmap();
		Body.prototype.constructor = Body;
		
		/**
		 * @public
		 * @param {createjs.DisplayObject} target - Any object with x, y and rotation.
		 * Copy the x, y and rotation of an object passed in.
		 */
		Body.prototype.follow = function (target) {
			this.x = target.x;
			this.y = target.y;
			this.rotation = target.rotation;
		}
		
		return Body;
	}
);