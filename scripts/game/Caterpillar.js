/**
 * @namespace  game
 * @class      Caterpillar
 * @extends    createjs.Container
 * Contains a head and many body parts.
 */
define(
	['game/Head', 'game/Body', 'create'],
	function (Head, Body) {
		"use strict";
		
		var line = [{x: 0, y: 0, rotation: 0}];
			
		/**
		 * @constructor
		 * @param {Object} target
		 * 	- Any object with x,y properties to follow.
		 */
		function Caterpillar(target) {
			var self = this;
			
			this.target = target;
			this.head   = new Head();
			
			this.addEventListener("tick", function () {
				self.follow();
			});
			this.addChild(this.head);
		}
		Caterpillar.prototype = new createjs.Container();
		Caterpillar.prototype.constructor = Caterpillar;
		
		/**
		 * @public
		 * Extend the caterpillar by one section.
		 */
		Caterpillar.prototype.grow = function (n) {
			this.addChild(new Body(n - 1));
		}
		
		/**
		 * @public
		 * Move the caterpillar by having each item follow points in an array
		 * drawn by the head. The head follows a target defined by
		 * the constructor.
		 */
		Caterpillar.prototype.follow = function () {
			var maxLineLength  = 1000,
				lineResolution = 2,
				buffer         = 20,
				i, clip, clipPosition;
			
			// Return so that very minute target
			// movements are ignored.
			if( Math.abs(this.target.x - this.head.x) < buffer &&
				Math.abs(this.target.y - this.head.y) < buffer
			) return;
			
			// Move the head toward the target.
			this.head.follow(this.target.x, this.target.y);
			
			// Add a point to the line if movement of the
			// head exceeds a certain number of pixels.
			if( Math.abs(line[0].x - this.head.x) > lineResolution ||
				Math.abs(line[0].y - this.head.y) > lineResolution
			){
				line.unshift({
					x: this.head.x, 
					y: this.head.y, 
					rotation: this.head.rotation
				});
			}
			
			// Remove the oldest point in the line to
			// keep the array length under a certain
			// length.
			if( line.length > maxLineLength ) {
				line.pop();
			}
			
			// Loop through each body part, and have
			// it follow the closest point in the line
			// to its sibling.
			for( i=1; i<this.getNumChildren(); i++ ) {
				clip = this.getChildAt(i);
				clipPosition = (lineResolution * 6) * i - (lineResolution * 4 - 1); 
				clipPosition = clipPosition >= line.length ? line.length - 1 : clipPosition;
				clip.follow(line[clipPosition]);
			}
		}
		
		return Caterpillar;
	}
);