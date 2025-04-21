//Loops in JavaScript
//Loops are used to execute the same block of code again and again, as long as a certain condition is met.

//Types of loops in JavaScript:

//----------------------------------------------------------------------------------------------------------------------------------------------------//

for (let index = 0; index < array.length; index++) {
  const element = array[index];
  
}

for(let a = 0; a<5 ; a++){
  
}
  
//1. for loop
//Syntax:
// for (let a = 0; i < array.length; j++) {
//   const element = array[index];

// }

//How to read for loop:
//1. Initialization: It is used to initialize the loop variable.
//2. Condition: It is used to evaluate the loop variable.
//3. Increment/Decrement: It is used to increment or decrement the loop variable.

// Flowchart:
// a ---> b ---> c ---> d ---> c ---> b ---> d ---> c ---> b ---> d ---> exit

//Example:
for (let index = 0; index < 10; index++) {
  const element = index;
  console.log(element); //Output: 0 1 2 3 4 5 6 7 8 9
}

//Example2:

for (let i = 0; i <= 10; i++) {
  const number = i;
  if (number === 5) {
    console.log("Five is best number");
  }
  console.log(number);
}

//Example3:
//Nested for loop:
for (let i = 0; i <= 10; i++) {
  console.log(`Outer Loop cycle no ${i} value: ${i}`);
  for (let j = 0; j <= 10; j++) {
    console.log(`Inner Loop value: ${j} `);
  }
}

//Example4:
//Multiplication Table:
for (let i = 1; i <= 10; i++) {
  for (let j = 1; j <= 10; j++) {
    console.log(`${i} * ${j} = ${i * j}`);
  }
}

//Example5 with Array:
let myArray = ["Meghraj", "Raj", "Rahul", "Rohit", "Rajesh"];
console.log(`The length of array is: ${myArray.length}`); //Length of array

for (let index = 0; index < myArray.length; index++) {
  const element = myArray[index];
  console.log(element);
}

//break and continue statement in "for loop":
for (let index = 1; index < 20; index++) {
  console.log(`Index of a is: ${index}`);
}

//Example with break statement:
//break statement me loop ko break kar deta hai jab condition true hoti hai.

for (let index = 1; index < 20; index++) {
  if (index === 5) {
    console.log(`Detected 5 so breaking the loop`);
    break;
  }
  console.log(`Value of i is: ${index}`);
}

//Example with continue statement:
//continue statement me loop ko skip kar deta hai jab condition true hoti hai lekin ye loop ke bahar nahi jaata hai.

for (let index = 1; index < 20; index++) {
  if (index === 5) {
    console.log(`Detected 5`);
    continue;
  }
  console.log(`Value of i is: ${index}`);
}
