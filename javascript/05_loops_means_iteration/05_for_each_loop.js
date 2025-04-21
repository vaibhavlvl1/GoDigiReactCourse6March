//for each loop

//It is a high order function.
//For each loop is used to iterate over the values of an array, object, or string.
//It takes a callback (function) as an argument.  function without name is called as callback function.
//It is a method of an array, object, or string.

const coding = ["Javascript", "Python", "Ruby", "C#", "Golang", "Swift"];

//forEach method with array.
//Array ka method hai forEach.
//Array.forEach(function=> (Parameter) => {code} );
//forEach method uses callback function matlab aisa function jo ek function ko argument () ke roop mein pass karta hai.
//forEach method array ke har element par ek function ko execute karta hai.

//*************
//forEach method koi value return nahi karta matlab "undefined" return karta hai lekin har element par operation perform karta hai.

//Traditional method
coding.forEach(function (item) {
  console.log(`Programming Languages are ${item}`); //Here item is a parameter we can perform any operation on it.
});

//for each Arrow function method
coding.forEach((item) => {
  console.log(`Programming Languages are ${item}`);
});

//for each function Name method
function printme(item) {
  //Maine pehle function ko banaya hai phir usko forEach method ke andar pass kiya hai.
  console.log(`Programming Languages are ${item}`);
}
coding.forEach(printme); //Yaha pe sirf [ function ka name ] hai jisko humne forEach method ke andar pass kiya hai.

//forEach method with index
coding.forEach((item, index, arr) => {
  console.log(`Index is: ${index} and value is: ${item}`);
  console.log(arr);
});

//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//

//forEach method with Array object means object in a Array.
const mycoding = [
  { languageName: "Javascript", type: "Frontend" }, // Here {} is an object which is defined as item.
  { languageName: "Python", type: "Backend" },
  { languageName: "Ruby", type: "Backend" },
  { languageName: "C#", type: "Backend" },
  { languageName: "Golang", type: "Backend" },
  { languageName: "Swift", type: "Backend" },
];
mycoding.forEach((item) => {
  console.log(item.languageName);
  console.log(item.type);
});

// `forEach()` ek built-in JavaScript method hai jo array ke har element par ek function ko execute karta hai.
// Isme, `coding` ek array hai jisme programming languages store hain.
// `coding.forEach(function(item) {...})` mein forEach method array ke har element ko `item` ke roop mein pass karta hai,
// aur function ko har element ke liye execute karta hai.
// Har iteration ke baad, `console.log(item)` current element ko print karta hai.
// `forEach()` method koi value return nahi karta, bas har item par operation perform karta hai.
