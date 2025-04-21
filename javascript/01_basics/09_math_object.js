//***************** "JavaScript Math Object and Its Methods" *****************

//Print this in console to check all the methods of Math Object
console.log(Math);

console.log(Math.abs(-5)); //Absolute Value

console.log(Math.round(14.56)); //Rounds off to nearest integer
console.log(Math.ceil(4.2)); //Round off to next integer
console.log(Math.floor(4.9)); //Rounds off to previous integer

console.log(Math.PI); //Value of PI
console.log(Math.E); //Value of E

//Min and Max
console.log(Math.min(99, 2, 3, 4, 5, 6, 7, 8, 9, 10)); //Minimum value from given numbers which are passed as arguments
console.log(Math.max(1, 2, 3, 4, 5, 6, 7, 300, 9, 10)); //Maximum value

//Random Number
console.log(Math.random()); //Random number between 0 and 1
console.log(Math.random() * 10 + 1); //Random number between 1 and 10
console.log(Math.random() * 100); //Random number between 0 and 100 , the value is with decimal.
console.log(Math.floor(Math.random() * 100)); //Random number between 0 and 100

// If you want to generate a random number between two numbers, you can use the following formula:
const min = 30;
const max = 200;
console.log(Math.floor(Math.random() * (200 - 30 + 1)) + 30); //Random number between 10 and 20

