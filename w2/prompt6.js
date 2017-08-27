/*
 One common application of "higher order functions" is
 for timers. In javascript we can use a function called
 setTimeout to execute a function after some time has passed.

 https://developer.mozilla.org/en-US/docs/Web/API/WindowTimers/setTimeout
 Read the docs, then consider the following:
*/
"use strict"
function callMeLater(whichTime) {
    console.log("You've been called.");
    console.log("The value of i is: " + i);
    console.log("The value of whichTime is: " + whichTime);
    console.log("================");
}

for(var i = 0; i < 10; i++) {
    setTimeout(callMeLater, i * 1000, i);
}
