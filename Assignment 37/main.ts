// making a function of contries name 

function  describe_city(city : string, country : string = "Pakistan"){
    console.log(`The City "${city}", Is In ${country}.`);
}

// calling the function 
console.log("Default Message With City Name !.");

describe_city("Karachi");

// again calling the function with different city name 
console.log("\nChanged The City Name !.");

describe_city("Lahore");

// changing both the city and the country 
console.log("\nChanged City And Default Country Name !.");

describe_city("Riyadh", "SaudiArab")
