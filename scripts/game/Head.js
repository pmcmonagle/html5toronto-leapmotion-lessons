/**
 * @namespace  game
 * @class      Head
 * @extends    createjs.Bitmap
 * The head of a caterpillar. Draws a line as it
 * moves toward a point at a constant rate.
 */
define(
	['create'],
	function () {
		"use strict";
			
		/**
		 * @constructor
		 */
		function Head() {
			createjs.Bitmap.call(this, "images/caterpillarHead.png");
			
			// Set the registration point.
			this.regX = 25; 
			this.regY = 27;
		}
		Head.prototype = new createjs.Bitmap();
		Head.prototype.constructor = Head;
		
		/**
		 * @public
		 * Follow a set of x/y coordinates, and rotate to face
		 * towards them.
		 */
		Head.prototype.follow = function (x, y) {
			var differenceX = x - this.x,
				differenceY = y - this.y,
				targetX     = x,
				targetY     = y,
				movement    = 0,
				targetR     = 0,
				speed       = 1;

			// Move the Head at a constant rate toward the target.
			while(movement < Math.sqrt((differenceY * differenceY) + (differenceX * differenceX)) - 5) {
				movement++;
				targetR  = Math.atan2(differenceY, differenceX) * 180 / Math.PI;
				targetX -= Math.cos((targetR * Math.PI) / 180) * speed;
				targetY -= Math.sin((targetR * Math.PI) / 180) * speed;
			}

			this.x = targetX;
			this.y = targetY;
			this.rotation = targetR !== 0 ? targetR : this.rotation;
		};
		
		return Head;
	}
);