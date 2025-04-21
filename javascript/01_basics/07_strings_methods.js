// String Writing has two ways:

const Fname = "Meghraj";
const repoCount = 100;
console.log(Fname.charAt(3));

// Concatenation old way
console.log(Fname + " has " + repoCount + " repositories on GitHub.");

// Template Literals Modern way
console.log(`hello my name is ${Fname} and my repo count is ${repoCount} `);

const gameName = new String("Meghraj-game-dot-com"); //string is object




//These are the methods of string object
console.log(gameName);
console.log(gameName[0]); //Character at 0th Index
console.log(gameName.charAt(4)); //Character at 4th Index
console.log(gameName.__proto__); //String Object
console.log(gameName.length); //Length of the string
console.log(gameName.toUpperCase()); //Convert to UpperCase
console.log(gameName.indexOf("j")); //Index of j

//Substring method
const subString = gameName.substring(0, 7); //No Negative values allowed and last value is not included

//Slice method
const newString = gameName.slice(0, 7); //last value is not included
console.log(newString);

const anotherString = gameName.slice(-10); //Negative values are allowed
console.log(anotherString);

//Trim method
const newStringTwo = "    Meghraj "; //Remove Extra Spaces

console.log(newStringTwo);
console.log(newStringTwo.trim());

//Replace method
const url = "https://www.google.com/search?q=javascript%20string%20methods";
const newUrl = url.replaceAll("%20", "-"); //2 parameter are required first is old value and second is new value.
console.log(newUrl);

//There are replace and replaceAll methods in strings. Replace method replaces only the first occurrence of the string. ReplaceAll method replaces all the occurrences of the string.

//Includes Method
console.log(gameName.includes("Meghraj")); //true

//Split Method
console.log(gameName.split("-")); //Takes a separator and splits the string into an array.

console.table([
  gameName,
  gameName[0],
  gameName.__proto__,
  gameName.length,
  gameName.toUpperCase(),
  gameName.charAt(4),
  gameName.indexOf("j"),
  subString,
  newString,
  anotherString,
  newStringTwo,
  newStringTwo.trim(),
  newUrl,
  gameName.includes("Meghraj"),
  gameName.split("-"),
]);

//What is a Object and What are The Object Properties and  Methods in Javascript

// ********************** JavaScript Object ********************** //
// JavaScript mein object ek aisa data structure hai jo key-value pairs store karta hai.
// Object ke andar properties aur methods hote hain.

// 🔹 Object Create karna
let person = {
  name: "Meghraj", // Property (Value store kar rahi hai)
  age: 25, // Property
  city: "Pune", // Property
  greet: function () {
    // Method (Action perform kar raha hai)
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
  },
};



// 🔹 Object Properties Access karna
console.log(person.name); // Output: Meghraj
console.log(person.age); // Output: 25
console.log(person.city); // Output: Pune

// 🔹 Object Method Call karna
console.log(person.greet());
// Output: Hello, my name is Meghraj and I am 25 years old.

// ********************** Object Properties ********************** //
/*
============================================================================================================================
| Feature    | Properties                     | Methods                                
|------------|--------------------------------|--------------------------------------------------|
| Definition | Values are stored in Object    | Object ke andar functions hote hain jo actions perform karte hain |
| Type       | Variables jaisi hoti hain      | Functions hote hain          
| Example    | person.name, person.age        | person.greet()                      
| Usage      | object.property                | object.method()     
============================================================================================================================
*/

