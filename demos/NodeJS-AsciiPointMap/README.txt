##########################################
# Ascii Point Map - NodeJS + LeapJS Demo #
##########################################

This tiny script will turn your terminal window
into a geeky Leap Motion visualizer! Each finger
tip will display as a short string. Neat!

Author:
	Paul McMonagle <mcmonagle.paul@gmail.com>

Installation:
	cd NodeJS-AsciiPointMap
	npm install leapjs
	npm install ncurses
	
Note:
	This entire project relies on NodeJS. Please
	be sure to have that installed. Installing 
	Ncurses for terminal output requires GCC. Mac
	users can find GCC as a part of their Xcode
	install, while linux users can install it
	directly from their package manager of choice.
	
Usage:
	node asciiPointMap.js [-s String]