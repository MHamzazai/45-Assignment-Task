"use strict";
// creating an array of userNames 
let userNames = ["Aliyan", "Saim", "Huzaifa", "Rafay", "Admin"];
// redecleared the userNames variable
userNames = [];
// checking the userNames is empty or not by using if statements
if (userNames.length === 0) {
    console.log("We Need To Find Some Users !.");
}
else {
    // using forEach loop method including if statements
    userNames.forEach(oneuser => {
        if (oneuser === "Admin") {
            console.log(`Hello ${oneuser}, Would You Like To See A Status Report ?.`);
        }
        else {
            console.log(`Hello ${oneuser}, Thank You For Logging In !.`);
        }
    });
}
