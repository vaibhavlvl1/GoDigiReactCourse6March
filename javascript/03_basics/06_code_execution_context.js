// JavaScript Execution Context // Code kaise run hota hai

// 1. GLOBAL EXECUTION CONTEXT
// - Global Execution Context sabse pehle create hota hai jab JavaScript code run hota hai.
// - Ye global object, `this` keyword, aur global scope ko handle karta hai.
// - Do phases me execute hota hai:

// 1.1 Creation Phase (Memory Phase)
// - Memory allocate hoti hai `global object`, `this`, aur variables ke liye.
// - Browser me `global object` ka matlab hota hai `window`, aur Node.js me `global` hota hai.

// 1.2 Execution Phase
// - Code line by line execute hota hai (top to bottom).

// 2. CALL STACK
// - Call Stack ka kaam hai functions ko track karna aur manage karna jab unhe call kiya jata hai.
// - Function ko call karne par `push` kiya jata hai, aur execution complete hone par `pop` kiya jata hai.
// - Execution ka order hamesha top to bottom hota hai.

// Example:
let val1 = 10;
let val2 = 20;

function addNum(val1, val2) {
  let total = val1 + val2;
  return total;
}

let result1 = addNum(val1, val2); // Pehla function call
let result2 = addNum(30, 40); // Dusra function call

console.log(result1); // Output: 30
console.log(result2); // Output: 70

// 3. FUNCTION EXECUTION CONTEXT
// - Jab function call hota hai, tab ek naya Function Execution Context create hota hai.
// - Iska structure bhi do phases me hota hai (Creation and Execution):

// 3.1 Creation Phase (Memory Phase)
// - Function ke variables aur arguments ke liye memory allocate hoti hai.

// 3.2 Execution Phase
// - Function ka code line by line execute hota hai (top to bottom).
