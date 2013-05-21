requirejs.config({
	baseUrl: "scripts",
	shim: {
		leap:   { exports: 'Leap' },
		create: { exports: 'createjs' }
	},
	paths: {
		leap:    "libraries/leapjs-2013.04.27.min",
		create:  "libraries/createjs-2013.02.12.min"
	}
});

/**
 * Document Class
 */
requirejs(
	[
		"lessons/createjs/CJSLessonIndex", 
		"lessons/leapjs/LJSLessonIndex"
	], 
	function (CJSLessonIndex, LJSLessonIndex) {
		"use strict";
		
		// Run a lesson. 
		var activeLesson = new CJSLessonIndex["1.0"]();
		//var activeLesson = new LJSLessonIndex["FINISHED"]();
	}
);