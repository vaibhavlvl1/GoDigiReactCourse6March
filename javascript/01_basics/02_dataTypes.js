"use strict"; // Treat all JS code as per the latest version of JavaScript

// alert(3 + 3); 





console.log(3 + 3); // Avoid writing too much on one line; code readability is important
console.log("Hitesh");

// Variable Declarations:
let name = "Meghraj"; // String data type
let age = 25; // Number data type
let isLoggedIn = true; // Boolean data type
let state; // This is undefined (no value assigned)



// ==========================
// Primitive Data Types in JS
// ==========================

// Number    ==> 2^53 - 1 (Maximum safe integer)
// bigInt    ==> Used for very large integers
// string    ==> Example: "Hello"  
// Boolean   ==> true/false
// null      ==> Special type representing an empty value (typeof null is 'object')
// undefined ==> When a variable is declared but not assigned
// Symbol    ==> Used for creating unique values (mostly used as object keys)

// ============================
// Non-Primitive Data Types in JS /Reference Data Types
// ============================

// Object    ==> Collection of key-value pairs. Example: { key: value }
// Array     ==> List of values. Example: [1, 2, 3, 4]
// Function  ==> Block of reusable code. Example: function() {}


// Type checking using `typeof` operator:
console.log(typeof null);       // Output: object (this is a known bug in JS)
console.log(typeof "");         // Output: string
console.log(typeof "Meghraj");  // Output: string
console.log(typeof undefined);  // Output: undefined

// ================================================
// ECMAScript (ECMA) Standards maintain JS version
// ES6 (ECMAScript 6) is the major update in JS
// ================================================

// Major features introduced in ES6:
// --------------------------------

// 1. let and const keywords  ==> Block scoped variable declarations
// 2. Arrow functions        ==> Short syntax for functions (Example: () => {})
// 3. Template literals      ==> Backtick (`) strings that support interpolation (Example: `${name}`)
// 4. Classes                ==> Blueprint for creating objects (OOP)
// 5. Promises               ==> Handle asynchronous operations in a better way
// 6. async/await            ==> Write asynchronous code in synchronous style
// 7. Modules                ==> Ability to export/import code between files
// 8. Destructuring          ==> Extract values from arrays or objects easily
// 9. Spread operator        ==> Expand arrays or objects into individual elements (Example: [...arr])
// 10. Rest operator         ==> Collect all remaining elements into an array (Example: function(...args))
// 11. Default parameters    ==> Set default values for function parameters (Example: function(a = 10) {})
// 12. Enhanced object literals ==> Shorter syntax for object properties (Example: { name, age } instead of { name: name, age: age })
// 13. Block scope           ==> Variables declared inside a block with `let` or `const` are confined to that block
// 14. Hoisting improvements ==> Helps in understanding how variables are raised to the top in declarations
// 15. Strict mode           ==> Makes JS more secure and throws errors for unsafe actions

// Note: ES6 made JavaScript more structured, cleaner, and better for large-scale application development.
