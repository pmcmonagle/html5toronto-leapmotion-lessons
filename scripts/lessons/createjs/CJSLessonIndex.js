/**
 * @namespace  lessons.createjs
 * @class      CJSLessonIndex
 * An index of all lesson files as 1.0 through 1.3
 */
define(
	[
		"lessons/createjs/FinishedLesson",
		"lessons/createjs/1.0",
		"lessons/createjs/1.1",
		"lessons/createjs/1.2",
		"lessons/createjs/1.3"
	],
	function (FinishedLesson, L10, L11, L12, L13) {
		return {
			"FINISHED": FinishedLesson,
			"1.0": L10,
			"1.1": L11,
			"1.2": L12,
			"1.3": L13
		}
	}
);