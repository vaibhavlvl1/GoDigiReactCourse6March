// Primitive Data Types
// Primitive data types are the most basic data types available within the JavaScript language. There are 7 primitive data types in JavaScript.

//To access the primitive data types we call by value. It means that when we assign a variable to another variable, the value is copied to the new variable.

// 1. Number
const score = 33;
const score1 = 33.33;

// 2. String
let myName = "Meghraj";

// 3. Boolean
const isLoggedIn = true;

// 4. Null
const outSideTemp = null;

// 5. Undefined
let userEmail;
let userNumber = undefined;



// 6. Symbol
const id = Symbol("123"); //Put any string in Symbol() to give it a unique id.
const id1 = Symbol("123");
console.log(id === id1); //Iske values same hai but iska output false aayega kyunki ye dono alag alag memory location pe hain.

// 7. BigInt
let bigNumber = 1234567890123456789012345678901234567890n;

console.log(score, score1);

console.table([
  score,
  score1,
  myName,
  isLoggedIn,
  outSideTemp,
  userEmail,
  userNumber,
  id,
  id1,
  bigNumber,
]);

let newVar = 25;
let anotherVar = newVar; 
anotherVar = 30;
console.log(newVar, anotherVar);


let array = [1,"Meghraj", true , {name: "Meghraj"}];


// OBjECT
let car= {
model:1988,
engine: "Ferrari",
color: "Red",
}

//Reference Data Types / Non-Primitive Data Types.
//When you deal with reference data types (like objects, arrays, and functions), the assignment does not create a copy of the actual data. Instead, it creates a reference to the original data. This means both variables point to the same object or array in memory, and any changes made through one variable will affect the other.

//There are 3 types of reference data types in JavaScript:

// 1. Array
//Array ek collection hota hai jisme hum multiple values ko store karsakte hain. Isko hum [] square brackets ke andar values ke beech comma se separate karke store karte hain.
const heros = ["shaktiman", "nagraj ", "superman" , 5 , 6];


// 2. Object
//Object ek collection hota hai jisme hum MULTIPLE KEY-VALUE pairs ko store karsakte hain. Isko hum {} curly braces ke andar key-value pairs ke beech comma se separate karke store karte hain.


let personInfo = {
  name: "Meghraj",
  age: 26,
  isEducated: true,
  eyeColor: "black",
};

// 3. Function

//Function ek block of code hota hai jo ek specific task ko perform karta hai. Function ko hum define karke multiple baar call kar sakte hain.

//Function Declaration
let myFunction = function () {
  console.log("Hello World this is me");
};
myFunction();

// console.log(typeof bigNumber);
// console.log(typeof myFunction);
// console.log(personInfo);

console.table([heros, personInfo, myFunction]);
// All non primitive data types are shown as objects datatypes in JavaScript.

