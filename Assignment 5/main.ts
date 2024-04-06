//storing the persnName in a variable with white space

let personName : string = "\t \n M.Hamza zai \t \n";

//printing the personName 

console.log(`"personName With WhiteSpace:"${personName}.`);

//now trim the personName and then print it 

let strippedName : string = personName.trim();

// now print the strippedName

console.log(`"strippedName:" ${strippedName}.`);