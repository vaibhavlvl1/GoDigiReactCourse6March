//IMMEDIATELY INVOKED FUNCTION EXPRESSION (IIFE)

// IIFE me hum function ko define karte waqt hi call kar dete hain. IIFE ka use karte waqt hume function ko define karne ke baad uske baad ek extra pair of paranthesis lagana hota hai. IIFE ka use karne se hume function ko alag se call karne ki zarurat nahi hoti hai.
//Global scope ke pollution ko rokne ke liye IIFE ka use hota hai.

//Normal function
(function() {
  console.log("Database Connected");
})();

//IIFE Converted of above example - "()()"
(function () {
  console.log("IIFE Function Called");
})();

//---------------------------------------------------------------------------------------------------------------//

//IIFE
// Isme humne function ko paranthesis () ke andar define kiya hai. Iska matlab ye hai ki ye function define hotey hi call ho jayega.

// Syntax:
// (function)(arguments);

//IFFE with arrow function with function name
//Sum of two numbers
(function addTwoNum(num1, num2) {
  //named IIFE isme function ka name hota hai.
  console.log(num1 + num2);
})(5, 5);

//IFFE with arrow function without function name
(() => {
  //Unnamed IIFE isme function ka name nahi hota hai.
  console.log("Hello World");
})();

//IIFE with arrow function and "one" arguments
((name) => {
  console.log(`Hello ${name}`);
})("Meghraj"); //Here we are passing the arguments.

//IIFE with arrow function and "two" arguments
((num1, num2) => {
  console.log(`Sum of two numbers is ${num1 + num2}`);
})(5, 5); //Here we are passing the arguments.
