//Truthy values
//Truthy values me koi bhi value ho toh true hota hai.

const useremail = "meghraj@gmail.com";

if (useremail) {
  console.log("User Email Present");
} else {
  console.log("No Email Present");
}

//Truthy values
// 1. true
// 2. 1
// 3. -1
// 4. "0"
// 5. " "
// 6. "false"
// 7. []
// 8. {}
// 9. function() {}
// 10. new Date()
// 11. Infinity
// 12. -Infinity

//----------------------------------------------------------------------//

//FALSY VALUES
const useremail2 = "";
if (useremail2) {
  console.log("User Email Present");
} else {
  console.log("No Email Present");
}

//Falsy Values:
// 1. false
// 2. 0 / -0
// 3. "", '', ``
// 4. null
// 5. undefined
// 6. NaN
// 7. document.all
// 8. 0n / -0n
// 9. BigInt(0) / BigInt(-0)
// 10. BigInt(0n) / BigInt(-0n)

//Except these all values are truthy values.

//Check empty array
const emptyArray = [];
if (emptyArray.length === 0) {
  console.log("Array is empty");
}

//Check empty object
const emptyObject = {};
if (Object.keys(emptyObject).length === 0) {
  console.log("Object is empty");
}

//-------------------------------------------------------------//

//Nullish Coalescing Operator (??):
//Nullish Coalescing Operator (??) Ek logical operator hai jo undefined aur null values ko handle karta hai.
// Is operator se hum pehle value ko check karte hai agar value undefined ya null hoti hai toh is operator ke right side wala value return karta hai warna left side wala value return karta hai.

let value1;
value1 = 5 ?? 10;
console.log(value1); //Output: 5

let value2;
value2 = null ?? 10;
console.log(value2); //Output: 10

let value3;
value3 = undefined ?? 15;
console.log(value3); //Output: 15

let value4;
value4 = null ?? 20 ?? 30;
console.log(value4); //Output: 20

//----------------------------------------------------------------------//
