html5toronto-leapmotion-lessons
===============================

These are lesson / demo files that I'll be using for a presentation for the HTML5 Toronto meetup.

---

Go through the lessons in order by viewing the files at:
  - scripts/lessons/createjs/ 1.0.js through 1.5.js
  - scripts/lessons/leapjs/   2.0.js through 2.3.js
  
Edit the file at scripts/Main.js to select which lesson file to run in index.html.
```javascript
  // This will run scripts/lessons/createjs/1.0.js
  var activeLesson = new CJSLessonIndex["1.0"]();
```
```javascript
  // This will run scripts/lessons/leapjs/2.0.js
  var activeLesson = new LJSLessonIndex["2.0"]();
```

--
  
View the completed lesson (all parts fitting together) at:
  - scripts/lessons/createjs/FinishedLesson.js
  - scripts/lessons/leapjs/FinishedLesson.js
  
Similarly, edit scripts/Main.js to run the completed lesson:
```javascript
  var activeLesson = new CJSLessonIndex["FinishedLesson"]();
  // OR
  var activeLesson = new LJSLessonIndex["FinishedLesson"]();
```
