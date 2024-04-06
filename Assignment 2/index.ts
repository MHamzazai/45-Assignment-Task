//storing a person name in a variable

let personName : string = "M.Hamza zai";

//printing the personName in LowerCase

console.log("Lowercase:", personName.toLowerCase());

//printing the personName in Uppercase

console.log("Uppercase:", personName.toUpperCase());

//printing the personName in tittlecase

console.log("Tittlecase:", personName.replace(/\b\w/g, c=> c.toUpperCase()))