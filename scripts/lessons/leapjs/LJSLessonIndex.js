/**
 * @namespace  lessons.leapjs
 * @class      LJSLessonIndex
 * An index of all lesson files as 2.0 through 2.3
 */
define(
	[
		"lessons/leapjs/FinishedLesson",
		"lessons/leapjs/2.0",
		"lessons/leapjs/2.1",
		"lessons/leapjs/2.2",
		"lessons/leapjs/2.3"
	],
	function (FinishedLesson, L20, L21, L22, L23) {
		return {
			"FINISHED": FinishedLesson,
			"2.0": L20,
			"2.1": L21,
			"2.2": L22,
			"2.3": L23
		}
	}
);