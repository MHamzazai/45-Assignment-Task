// define a function with rest parameter

function makeSandwish(...item : string[]){
    console.log("\nMaking A Sandwish With The Following Items.\n");
    
    item.forEach(mode => console.log(mode));

    console.log("\nNow Enjoy Your Sandwish!.");
}

// now call the function 3 times with different items each time

makeSandwish("Bread", "Chicken", "Cheese", "Mayonese", "Ketchup", "Eggs");

makeSandwish("Bread", "Egg", "mayonese",);

makeSandwish("Bread", "mayonese", "Salad");

