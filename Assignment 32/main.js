"use strict";
// creating a array of numbers
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// printing these numbers in ordinal form by using for loop and if statement
for (let ordinalno of numbers) {
    // creating a variable which store last words 
    let ordinal;
    // now printing the result by if and else if statement 
    if (ordinalno === 1) {
        ordinal = "st";
    }
    else if (ordinalno === 2) {
        ordinal = "nd";
    }
    else if (ordinalno === 3) {
        ordinal = "rd";
    }
    else {
        ordinal = "th";
    }
    // printing the final result
    console.log(`${ordinalno}${ordinal}.`);
}
