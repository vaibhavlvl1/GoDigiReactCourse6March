//for_of Loops

// for_of loops hum array ke elements pe iterate karne ke liye use karte hai.

//Iske andar hume 3 cheeze chahiye hoti hai:
//1. Iterable object /Jisme Loops chale matlab jaise ki string, array, object etc.
//2. Variable
//3. Loop body

//["", "", "","","",] // 5 string in array
//[{}, {}, {}, {}, {}] // 5 Object in array

//Example 1 for of loop with array:

const myArray = ["Meghraj", 2, 3, 4, 5, 6, 7, 8, 9, 10]; //10 elements in array
//const "ELEMENTS" of "ARRAY"
for (const contents of myArray) {
  console.log(`The content of array is ${contents}`);
}

//Example 2 for of loop with array:

const indStates = ["Maharashtra", "Karnataka", "Gujarat", "Punjab", "Delhi"]; //5 elements in array
//const "ELEMENTS" of "ARRAY"
for (const states of indStates) {
  console.log(`Indian States are ${states}`);
}
//-------------------------------------------------------------------------------------------------//

//Example 1 for of loop with string:
const greetings = "Hello World"; //11 characters in string
for (const alphabets of greetings) {
  console.log(`Sequence of characters is ${alphabets}`);
}

//Example 2 for of loop with string:
const myName = "Meghraj"; //7 characters in string
for (const characters of myName) {
  console.log(`The Characters of My Name are ${characters}`);
}
//----------------------------------------------------------------------//

//Map Method:
//Map method array ke har element pe iterate karne ke liye use hota hai.
//Isme ek function pass hota hai jo array ke har element pe run hota hai.
//Iska output ek new array hota hai.

//--------------------------------------------------------JAVASCRIPT MAP OBJECT:----------------------------------------------------//

//Example 1:
//"JavaScript Map Object"
const map = new Map();
map.set("name", "Meghraj"); //Here map is an object and set is a method which is used to set the key and value in map.
map.set("age", 25);
map.set("city", "Pune");
map.set("city", "Pune"); //Duplicate value is allowed in map but key should be unique and if key is duplicate then it will override the value.
console.log(map); //Humne set method se key and value set kiya hai map object me.

//Iterating/Using loops over Object map to print only key:
//Agar sirf key ko print karunga toh key print honge lekin value ko access nahi kar sakta.
for (const key of map) {
  console.log(`${key}`);
}

//Iterating/Using loops over Object map to pint key and value:
//Agar mai key aur value ko alag alag print karunga toh key aur value alag alag print honge aur mai key aur value ko alag alag access kar sakta hu.
for (const [key, value] of map) {
  console.log(`${key} :- ${value}`);
}

//for_of loop with normal object:
//Jo humara normal object hai uspe for_of loop nahi chal sakta hai.
// const gameNames = {
//   name: "GTA",
//   type: "Action",
//   rating: 5,
//   year: 2021,
// };
// for (const [key, value] of gameNames) {
//   console.log(`${key} :- ${value}`);
// }

//USE for_in loop for normal object:
// for (const key in gameNames) {
//   console.log(`${key} :- ${gameNames[key]}`);
// }

//--------------------------------------------------------JAVASCRIPT MAP METHOD ON ARRAY:----------------------------------------------------//

//Example1:
//"Array Map Method in JavaScript"
const myArray2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; //10 elements in array
const newArray = myArray2.map((num) => num * 2);
console.log(newArray);

//Notes:
//1. for_of loop is used to iterate over "map object".
//1. for_in loop is used to iterate over the "normal object".
