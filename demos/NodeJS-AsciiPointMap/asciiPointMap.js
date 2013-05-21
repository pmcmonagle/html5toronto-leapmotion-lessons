/**
 * Includes
 */
var Leap   = require("leapjs").Leap,
    NC     = require("ncurses"),
    Window = new NC.Window();

/**
 * NOTES
 * frames.pointables[i].tipPosition : x(-260 to 260), y(0 to 600), z(-260 to 260)
 */

/**
 * Do some important cleanup on close
 * so that ncurses doesn't mess our window
 */
process.on("SIGINT", function () {
    Window.close();
    process.exit();
});

Leap.loop(function(frame) {
    var output;
    Window.refresh();
    Window.clear();
    switch(process.argv[2]) {
        case "--asciiPointMapString":
        case "-s":
            /**
             * Shows each fingertip as a character or String!
             * Usage:
             *  node gesturetest.js -s "Some String"
             */
            output = process.argv[3] || "*";
            APM.render(frame, output);
            break;
        default:
            // Default to framedump.
            Window.insstr(frame.dump().replace(/<br\/>/g, "\n"));
    }
});

/**
 * Static Class APM
 */
var APM = {
    render: function (frame, output) {
        var widthTranslator  = Window.width / 520,
            heightTranslator = Window.height / 600;
        
        for(var i=0; i<frame.pointables.length; i++) {
            var tipx = Math.round((frame.pointables[i].tipPosition[0] + 260) * widthTranslator),
                tipy = Math.round(Math.abs(frame.pointables[i].tipPosition[1] - 600) * heightTranslator);
            for(var j=0; j<output.length; j++) {
                Window.addstr(tipy, tipx + j, output[j]);
            }
        }
        Window.cursor(0,0);
    }
};