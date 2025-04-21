// Description: Conversion operation of datatypes in JavaScript

let score = "33"; 
let score1 = null;
let score2 = undefined;
let isLoggedIn = 1;
let booleanIsLoggedIn = Boolean(isLoggedIn);
let valueInNumber = Number(score); //NaN because it is not a number
let string = "Meghraj";
string = Number(string);

let someNumber = 33;
let stringNumber = String(someNumber); // "33"



//Older way of writing code
console.log(typeof score);
console.log(valueInNumber);
console.log(typeof valueInNumber);
console.log(score1);
console.log(score2);
console.log(isLoggedIn);
console.log(string);

//Newer way of writing code
console.table([
  typeof score,
  valueInNumber,
  typeof valueInNumber,
  score1,
  score2,
  isLoggedIn,
  string,
  booleanIsLoggedIn,
  typeof stringNumber,
  stringNumber,
]);

/*
"" ==> 0 means false
"anything" ==> 1 means true
"33" ==> 33
"33abc" ==> NaN (Not a Number)
"abc33" ==> NaN
true ==> 1
false ==> 0
*/
