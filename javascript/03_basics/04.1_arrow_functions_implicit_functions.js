//Arrow functions
//Arrow functions vo hotey hain jo ki function expression hote hain matlab ki function ko ek variable me store hotey hain.

function coffee() {
  console.log(this);
}
coffee(); //Output: [object global] in Node.js or [object Window] in browsers in non-strict mode. In strict mode, this will be undefined.
//"this" in a regular function refers to the object that calls the function or the global object in non-strict mode.

//----------------------------------------------------------------------------------------------------------------------------//
//Old way of writing function
function myName() {
  console.log("Meghraj");
}
myName();

//ARROW FUNCTIONS
// To Convert the above function to arrow function follow the below steps:
//1. Hold the function in a variable.
//2. Remove the function keyword
//3. add => after the parameters.

//, just remove the "function" keyword and add "=>".

// Original Syntax
() => {};

//Example for Arrow function Expanded
const addTwo = (num1, num2) => {
  return num1 + num2;
};
addTwo(5, 5);
console.log(addTwo(5, 5));

//Implicit Return
// To Convert arrow function to implicit return arrow function
//1. remove the curly braces
//2. remove return keyword from the function.

//Note:
//Curly braces me code likha hai to return keyword use karna padega.
//Parentheses () me code likha hai to return keyword use nahi karna padega.

//Example for Implicit Arrow function without return statement
const sumNum = (num1, num2) => num1 + num2;
// In above example , num1 + num2 does not require any () because it is a single line of code.
console.log(sumNum(5, 5));

//Example of Implicit Arrow function "with return statement"
const multiply = (num1, num2) => {
  return num1 * num2;
};
console.log(multiply(5, 5));

//----------------------------------------------------------------------------------------------------------------------------//

//Example for Implicit Arrow function with Object

const newObj = (firstName, lastname) => ({ firstName, lastname });
//In the above example, we are returning an OBJECT so we have to wrap the object in ().
console.log(newObj("Meghraj", "Singh")); //This will return an object.
//Example for Implicit Arrow function with Object without wrapping in ().
let x = newObj("Meghraj", "Singh");
console.log(x); //This will return an object.

