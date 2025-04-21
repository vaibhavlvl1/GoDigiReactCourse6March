//Number in JavaScript

//Mostly use primitive number
// const score = 400;                    GOOD
//const score = new Number(400);         BAD or AVOID Using

const score = 400; //Number
// console.log(score);

const balance = new Number(1000.5005);
// console.log(balance);

let balanceTwo = balance.toString(); //Converts number to sting
console.log(typeof balanceTwo); //String Converted
console.log(balanceTwo.length); //Length of the string
console.log(balance.toFixed(2)); //Rounds off to 2 decimal places

//Precision methods
const balanceThree = 1000.5005;
// console.log(balanceThree.toPrecision(3));

//
const hundreds = 10000000;
// console.log(hundreds.toLocaleString("en-IN"));

console.table([
  score,
  balance,
  balanceTwo,
  balanceTwo.length,
  balance.toFixed(2),
  balanceThree.toPrecision(3),
  hundreds.toLocaleString("en-IN"),
]);
