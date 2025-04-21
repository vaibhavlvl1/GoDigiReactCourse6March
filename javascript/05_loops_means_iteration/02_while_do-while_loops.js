//While Loop
//While loop me condition true hoti hai tab tak loop chalta hai

//Steps:
//Pehle variable/array/object define karna hota.
//Condition check karna hota hai
//Condition true hoti hai toh loop chalta hai
// Loop ke andar block of code hota hai "{ }".
//Kuch print karna hota hai.
//Variable ko increment/decrement karna hota hai.




//Example:
let index = 0;
while (index <= 10) {
  console.log(`value of index is: ${index}`);
  index = index + 2;
}

//Example 2 with array:

let myArray = ["Meghraj", "Raj", "Rahul", "Rohit", "Rajesh"];
let indexNum = 0;
while (indexNum < myArray.length) {
  console.log(
    `Value of Array index is ${indexNum} and Person Name is: ${myArray[indexNum]}`
  );
  indexNum++;
}

//do_while loop:
//do_while loop me pehle code execute hota hai phir condition check hoti hai.

//Steps:
//Pehle variable/array/object define karna hota.
//Loop ke andar block of code hota hai "{ }".
//Kuch print karna hota hai.
//Variable ko increment/decrement karna hota hai.
//Condition check karna hota hai
//Condition true hoti hai toh loop chalta hai firse... nhito sirf ek baar chalta hai.

//Example:

let score = 10;
do {
  console.log(`Score is: ${score}`);
  score++;
} while (score <= 20);
