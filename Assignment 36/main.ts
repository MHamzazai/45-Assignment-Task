// making a function

function make_shirt(size : string = "Large", printMessage : string = "I Love Typescript"){
    console.log(`Creating A "${size}" Size Shirt With "${printMessage}" Print On It !.`);
}

// calling a function with by-default values
console.log("Default Message !.");

make_shirt();

// calling the same function with medium size
console.log("\nSize Changed !.");

make_shirt("Medium")

// calling the same function with size and print changed

console.log("\nSize And Print Changed !.");

make_shirt("XL", "Don't Waste Your Time")
