//Control Flow // Logic COntrol // Condition FLow
//Control flow matlab program ka flow kaise control hota hai. Jaise ki agar koi condition true hoti hai to kuch code execute hota hai warna nahi hota hai. Isme hume if-else, switch-case, loops ka use hota hai.

// 1. if statement
// if statement ek conditional statement hai jo ki code ko execute karne se pehle condition ko check karta hai. Agar condition true hoti hai to code execute hota hai warna nahi hota hai.

//Syntax:
// if (condition) {
 //code to be executed
// }
// Agar condition true hoti hai to code execute hota hai warna nahi hota hai.

//Example:
let num1 = 10;
let num2 = 20;
if (num1 < num2) {
  console.log(`${num1} is less than ${num2}`);
} //Output: Num1 is less than Num2

//Example2:
const isUserLoggedIn = true;
if (isUserLoggedIn) {
  console.log("User is logged in");
}

//------------------------------------------------------------------------------------//

//COMPARISON OPERATORS

// 1. == (Equality Operator)
// == operator value ko compare karta hai. Agar value same hoti hai to true return karta hai warna false return karta hai.
//Example:
let a = 10;
let b = "10";
if (a == b) {
  console.log(`${a} is equal to ${b}`);
}


//2. === (Strict Equality Operator)
// === operator value aur data type dono ko compare karta hai. Agar value aur data type same hoti hai to true return karta hai warna false return karta hai.
//Example:
let c = 10;
let d = 12;
if (c === d) {
  console.log("c is equal to d");
}

//3. != (Not Equal Operator)
// != operator value ko compare karta hai. Agar value same nahi hoti hai to true return karta hai warna false return karta hai.
//Example:
let e = 10;
let f = 20;
if (e != f) {
  console.log("e is not equal to f");
}

//4. !== (Strict Not Equal Operator)
// !== operator value aur data type dono ko compare karta hai. Agar value aur data type same nahi hoti hai to true return karta hai warna false return karta hai.
//Example:
let g = 10;
let h = 20;
if (g !== h) {
  console.log("g is not equal to h");
}

//5. > (Greater than Operator)
// > operator left side value ko right side value se compare karta hai. Agar left side value bada hota hai to true return karta hai warna false return karta hai.
//Example:
let i = 30;
let j = 20;
if (i > j) {
  console.log("i is greater than j");
}

//6. < (Less than Operator)
// < operator left side value ko right side value se compare karta hai. Agar left side value chota hota hai to true return karta hai warna false return karta hai.
//Example:
let k = 10;
let l = 20;
if (k < l) {
  console.log("k is less than l");
}

//7. >= (Greater than or Equal Operator)
// >= operator left side value ko right side value se compare karta hai. Agar left side value bada ya equal hota hai to true return karta hai warna false return karta hai.
//Example:
let m = 25;
let n = 20;
if (m >= n || 5>3) {
  console.log("m is greater than or equal to n");
}

//8. <= (Less than or Equal Operator)
// <= operator left side value ko right side value se compare karta hai. Agar left side value chota ya equal hota hai to true return karta hai warna false return karta hai.
//Example:
let o = 10;
let p = 20;
if (o <= p) {
  console.log(`o is less than or equal to p`);
}

//Example:
const temperature = 41;
if (temperature < 50) {
  console.log("Temperature is less than 50");
} else {
  console.log(`Temperature is greater than 50`);
}
console.log(`Code Executed`); //It doesn't matter if the condition is true or false, the code will be executed.

//Example:m
const score = 200;

if (score >= 200) {
  const power = "fly";
  var power1 = "swim";
  console.log(`User power: ${power}`);
}
// console.log(`User power: ${power}`); //NOT WORK
console.log(`User power: ${power1}`); //Output: User power: swim because var is function scoped.
// So only use var when you want to use the variable outside the block.

//----------------------------------------------------------------//

//SHORTHAND NOTATION
//Example:
const balance = 3200;
if (balance > 1000) console.log(`User has balance greater than 1000`);

//----------------------------------------------------------------//

//if else-if Statement Example:
const bankBalance = 2000;
if (bankBalance < 500 ) {
  console.log(`Bank balance is less than 500`);
} else if (bankBalance < 1000) {
  console.log(`Bank balance is less than 1000`);
} else if (bankBalance < 1500) {
  console.log(`Bank balance is less than 1500`);
} else {
  console.log(`Bank balance is greater than 1500`);
}

//----------------------------------------------------------------//

//Example Multiple Conditions:
const UserLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;

if (UserLoggedIn && debitCard) {
  // && AND operator
  console.log(`Allowed to buy Course`);
}
if (loggedInFromGoogle || loggedInFromEmail) {
  // || OR operator
  console.log(`User Logged in from Google or Email`);
}

//--------------------------------------------------------------------------------------------------------//
