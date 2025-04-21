//*********************Arithmetic Operations*********************
let someNumber = 33;
let stringNumber = String(someNumber); // "33" converts to string
// console.table([stringNumber, typeof stringNumber]);


let value = 3;
let negValue = -value;
console.log(value);
console.log(negValue);

// console.log(2+2)   *Addition
// console.log(2-2)   *Subtraction
// console.log(2*2)   *Multiplication
// console.log(2**3)  *Cube of Two
// console.log(10/2)  *Divide
// console.log(50%2)  *Modulus

console.table([
  stringNumber,
  typeof stringNumber,
  value,
  negValue,
  2 + 2,
  2 - 2,
  2 * 2,
  2 ** 3,
  10 / 2,
  50 % 2,
]);

//--------------------------------------------------//

//Add String
let string1 = "hello";
let string2 = " Meghraj";
let stringAdd = string1 + string2;
console.table([stringAdd]);

//Complex Situations
  console.log("1" + 2); //Converts to String
  console.log(1 + "2"); //Converts to String
  console.log("1" + 2 + 2); //Didn't Add last two Numbers
  console.log(1 + 2 + "2"); //Added first two Numbers
  console.log(((3 + 4) * 5) % 3); //Use Parenthesis means brackets
  console.log(true); //Boolean
  console.log(+true); //Converts to Number
  console.log(+""); //Converts to Number and Output is 0

//Prefix and Postfix
let gameCounter = 100;
gameCounter++; //Postfix
console.log(gameCounter);

let gameCounter1 = 100;
++gameCounter1; //Prefix
console.log(gameCounter1);

console.table([
  1 + "2",
  "1" + 2,
  "1" + 2 + 2,
  1 + 2 + "2",
  ((3 + 4) * 5) % 3,
  true,
  +true,
  +"",
  gameCounter,
  gameCounter1,
]);
