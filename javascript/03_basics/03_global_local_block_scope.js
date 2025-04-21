// Scope kya hota hai?
// Scope ka matlab hai ki program ke kis area mein ek variable accessible hai.
// JavaScript mein do main scopes hote hain:
// 1. Global Scope
// 2. Local Scope / Block Scope
 
// Global Scope:
// Agar ek variable function ke bahar declare kiya gaya hai, to wo global variable hota hai.
// Yeh variable program ke kisi bhi part mein access kiya ja sakta hai.

let globalVar = "I am a global variable"; // Example of Global Scope
function showGlobalVar() {
  console.log(globalVar); // Accessing globalVar inside the function
}
showGlobalVar(); // Output: I am a global variable

// Local Scope:
// Agar ek variable function ke andar declare kiya gaya hai, to wo local variable hota hai.
// Yeh variable sirf us function ke andar hi accessible hota hai.

function localScopeExample() {
  let localVar = "I am a local variable"; // Example of Local Scope
  console.log(localVar); // Output: I am a local variable
}
// console.log(localVar); // Error: localVar is not defined, kyunki yeh function ke bahar accessible nahi hai

// Variable Declaration in JavaScript:
// JavaScript mein variables teen keywords ke saath declare kiye ja sakte hain:
// 1. var
// 2. let
// 3. const
var a = 20;
function name(params) {}
// var:
// - Yeh function-scoped hota hai.
// - Agar kisi function ke bahar `var` se declare kiya gaya ho, to wo global variable ban jata hai.
// - `var` ka scope block ke bahar tak fail sakta hai, jo bugs cause kar sakta hai.

if (true) {
  var varScoped = "I am function scoped";
}
console.log(varScoped); // Output: I am function scoped (block {} ke bahar accessible hai)

// let and const:
// - Yeh block-scoped hote hain.
// - Block ka matlab hai `{}` ke andar ka code (e.g., if condition, loops).
// - `let` aur `const` ka scope sirf block ke andar hi hota hai.

if (true) {
  let letScoped = "I am block scoped";
  const constScoped = "I am also block scoped";
  console.log(letScoped); // Output: I am block scoped
  console.log(constScoped); // Output: I am also block scoped
}
// console.log(letScoped); // Error: letScoped is not defined
// console.log(constScoped); // Error: constScoped is not defined

// Important Difference Between var, let, and const:
// 1. `var` function scoped hai, jabki `let` aur `const` block scoped hain.
// 2. `const` ke saath declare kiya variable immutable hota hai (iski value change nahi hoti).

const PI = 3.14159;
// PI = 3.14; // Error: Assignment to constant variable

// Block Scope ka Example:
// Block ek group of statements hota hai jo `{}` ke andar likha hota hai.
// Yeh if, switch, for, ya while loop ke andar ho sakta hai.

for (let i = 0; i < 3; i++) {
  console.log(i); // Output: 0, 1, 2
}
// console.log(i); // Error: i is not defined, kyunki `i` ka scope sirf loop ke andar tha

// Conclusion:
// - Scope define karta hai ki ek variable kis area mein accessible hai.
// - Block scope (`let` aur `const`) zyada safe hai, kyunki variables block ke bahar access nahi kiye ja sakte.
// - Function scope (`var`) purane JavaScript code mein common tha, lekin modern JavaScript mein `let` aur `const` ka use zyada hota hai.

//-------------------------------------------------------------------------------------------------------------------------//

//Normal declaration
let a = 10;
const b = 20;
var c = 30;
console.table([a, b, c]);

//-------------------------------------------------------------------------------------------------------------------------//

//SCOPE
let x = 10; //Global Scope

if (true) {
  let x = 40; //Block scoped.
  const y = 50; //Block scoped.
  console.log(`Inner value of x is: ${x}`); //Block Scope
  var z = 60; //"var" is function scoped.
}

console.log(`Outer Value of x is: ${x}`); //Will print value of x because "let" is block scoped.
console.log(`Outer Value of z is: ${z}`); //Will print value of z because "var" is function scoped means can be accessed throughout the function.

//------------------------------------------------------------------------------------//

// Note:
// Always use ----("let" and "const")---- instead of "var" because "var" is function scoped and "let" and "const" are block scoped.
// "let" and "const" are block scoped means they are only accessible within the block where they are defined.
// "var" is function scoped means it is accessible throughout the function where it is defined.
