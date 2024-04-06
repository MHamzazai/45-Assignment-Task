// making tests for equality and inequality with strings

import { log } from "console";

let fruits : string = "apple";

// printing the result in equality

console.log("Test For Equality with Strings!.");
console.log("fruit is equal to apple?");
console.log("Ans =", fruits == "apple");

// printing the result in inequality

console.log("\nTest For Inequality With Strings!.");
console.log("fruit is not equal to apple?");
console.log( "Ans =", fruits != "apple");

// making tests with with lowercase values

// lowercase value
let car1 : string = "Toyota";

// uppercase value
let car2 : string = "Toyota".toLowerCase();


// printing the result in equality

console.log("\nTest For Equality With lowercase!.");
console.log("car1 is equal to Toyota?.");
console.log("Ans =", car1 =="Toyota");

// printing the result in ineuality

console.log("\nTest for Inequality with lowercase!.");
console.log("car2 is also equal to Toyota?.");
console.log("Ans =", car2 == "Toyota");

// making tests with comparison operators 

let num1 : number = 25;
let num2 : number= 10;

// priting the result in equality

console.log("\nTest By Using Comparison Operator (==)!.");
console.log("num1 is equal to 25?.");
console.log("Ans =", num1 == 25);

// printing the result in inequality

console.log("\nTest By Using Comparison Operator (!=)!.");
console.log("num2 is also equal to 25?.");
console.log("Ans = ", num2 != 10);

// now this time using > and < method
// printing the result in greater than

console.log("\nTest By Using Comparison Operator (>)!.");
console.log("num1 is greater than num2?.");
console.log("Ans =", num1 > num2);

// printing the result in less than

console.log("\nTest By Using Comparison Operator (<)!.");
console.log("num1 is less than num2?.");
console.log("Ans =", num1 < num2);

//  now this time using >= and <= method
// printing the result in >= 

console.log("\nTest By Using Comparison Operator (>=).");
console.log("num1 is greater than and equal to num2?.");
console.log("Ans =", num1 >= num2);

// printing the result in <= 

console.log("\nTest By Using Comparison Operator (<=).");
console.log("num1 is less than and equal to num2?.");
console.log("Ans =", num1 <= num2);

// making tests with using logical operators

let number1 : number = 25;
let number2 : number = 30;

// by using &&(And) operator

console.log("\nTest By Using Logical Operator (&&)!.");
console.log("nnumber1 is unequal to number2 and number1 is also less than number2?.");
console.log("Ans =", number1 != number2 && number1 < number2);

// by again using (&&)

console.log("\nTest By Using Logical Operator(&&)!.")
console.log("number1 is equal to number2 and number1 is also greater than than number2?.");
console.log("Ans =", number1 == number2 && number1 > number2);

// now by using ||(or) operator

console.log("\nTest By Using Logical Operator Or(||)!.");
console.log("number1 is less than number2 and number1 is also equal to number2?.");
console.log("Ans =", number1 < number2 || number1 == number2);

// by again using ||(or) operator

console.log("\nTest by Using Logical Operator or(||)!.");
console.log("number1 is equal to number2 and number1 is also greater than number2?.");
console.log("Ans =", number1 == number2 || number1 > number2);

// making test by using values in array

let popularLanguages : string[] = ["typescript", "python", "C", "C++", "javascript"];

// printing the reult in true

console.log("\nTest For Popular Languages!.");
console.log("Is typescript is a popular language?.");
console.log("Ans =", popularLanguages.includes("typescript"));

// printing the answer in false
console.log("\nTest For Popular Languages!.");
console.log("Is php is a popular languages?.");
console.log("Ans =", popularLanguages.includes("php"));













