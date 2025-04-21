// Nested Scope / Closures / Block Scope

//Syntax:
// function one() {
//   function two() {}
// }

function parentFunction() {
  const username = "Rajesh";

  function childFunction() {
    const website = "www.google.com";
    console.log(`Username is: ${username}`); //WORK because "username" in outer scope.
  }
  console.log(`The website is: ${website}`);
  // NOT WORK because "website" is in inner scope.
  childFunction();
}
parentFunction();

// childFunction() can access the variables of parentFunction() but parentFunction() cannot access the variables of childFunction().

/* --------------------------------------------BLOCK SCOPE Using "if Statements"-------------------------------------------- */

if (true) {
  const username = "Vijay";
  if (username === "Vijay") {
    const website = "www.google.com";
    console.log(`The USERNAME is: ${username} and WEBSITE is ${website}`); //WORK
  }
  // console.log(website); //NOT WORK
}
// console.log(username); //NOT WORK

//---------------------------------------------Interesting Topic HOISTING---------------------------------------------//

// **Hoisting** JavaScript ka ek behavior hai jisme variables, function declarations, ya classes ko unke scope ke top par le jaata hai execution ke pehle, yani compilation ke time par. Iska matlab hai ki aap kisi variable ya function ko declare karne se pehle bhi use kar sakte ho, bina runtime error ke.

// ### **Hoisting ke Key Points:**

// 1. **Variable Hoisting:**
//    Agar aap `var` se variable declare karte ho, to woh top par hoist ho jata hai, lekin uska value `undefined` hota hai jab tak aap usse assign nahi karte.
//    `let` aur `const` se declare kiye gaye variables bhi hoist hote hain, lekin unhe **initialize** nahi kiya jata jab tak declaration nahi milta. Agar aap unhe declare hone se pehle access karte ho, to **ReferenceError** aata hai, jo ki **Temporal Dead Zone (TDZ)** ke wajah se hota hai.

//    ```javascript
console.log(a); // undefined
var a = 5;
//    ```

//    ```javascript
console.log(b); // ReferenceError: Cannot access 'b' before initialization
let b = 10;
//    ```

// 2. **Function Hoisting:**
// Function Hoisting: Function declarations (regular functions) hoisted hote hain. Iska matlab hai ki aap function ko use kar sakte ho uske define hone se pehle. Aap directly function ko call kar sakte ho, bina usse kisi variable mein store kiye.

// Lekin agar aap function expressions ya arrow functions ko define kar rahe ho, toh unko use karne se pehle define karna zaroori hota hai. Agar aap unhe pehle use karoge, toh error aayega, kyunki wo hoisted nahi hote.

// Summary:
// Function Declarations: Hoisted, aap function ko define hone se pehle bhi call kar sakte ho.
// Function Expressions / Arrow Functions: Hoisted nahi hote, inhe pehle define karna zaroori hai.

//    ```javascript
hoistedFunction(); // Output: "Hoisted!"
function hoistedFunction() {
  console.log("Hoisted!");
}
//    ```

//    ```javascript
hoistedExpression(); // Error: Cannot access 'hoistedExpression' before initialization
const hoistedExpression = function () {
  console.log("This won't hoist.");
};
//    ```

// **Summary:** Hoisting ka matlab hai ki variables aur functions ko code execution se pehle scope ke top par le jata hai, lekin variables ka value assign nahi hota jab tak declaration line nahi execute hoti. Hoisting se aap variables aur functions ko declare karne se pehle bhi use kar sakte ho, lekin best practice yeh hai ki aap declare karne se pehle use na kare.

//Function Declaration (Hoisting)

addone(5); //This will work because of hoisting.
console.log(addone(5));
function addone(num) {
  return num + 1;
}

//Function Expression
console.log(addtwo(5)); //Not working because it is a function expression means it is stored in a variable.
const addtwo = function (num) {
  return num + 2;
};

// Agar function ko variable me store kiya gaya ho (function expression ya arrow function), aur usse define karne se pehle call() karein, to hoisting kaam nahi karta aur error aata hai.
