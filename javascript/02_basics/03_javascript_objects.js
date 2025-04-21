// ***************** JavaScript Objects *****************
// Objects ek collection hote hain key-value pairs ka, jisme keys hamesha strings hoti hain aur values kuch bhi ho sakti hain.
// Object ke andar agar function ho to usse "Object Method" kehte hain.

// 1️⃣ **Object Creation Using Object Literals**
const mySym = Symbol("mySym"); // Symbol ek unique key hoti hai

const JsUser = {
  name: "Meghraj",
  fullName: "Meghraj Hamade",
  age: 30,
  city: "New York",
  "area" : "Manhattan",
  isLoggedIn: true,
  email: "meghraj@google.com",
  lastLoginDays: [{Monday:[{pizza:["paneer","cheese","corn",{oregano:'thym'}]}]}, [] ,"Tuesday", "Saturday"],
  [mySym]: "value of mySym", // Symbol ko access karne ke liye [] notation use hota hai
};

// 2️⃣ **Object Properties Access Karna**
console.log(JsUser.email); // Dot notation se access karna
console.log(JsUser["area"]); // Square bracket se access karna
console.log(JsUser["fullName"]); // Bracket notation se access karna use " " always.
console.log(JsUser[mySym]); // Symbol key ko access karna

// 3️⃣ **Object Properties Update Karna**
JsUser.name = "Rajesh";
JsUser.fullName = "Rajesh Pathak";
console.log(JsUser.name, JsUser.fullName);

// 4️⃣ **Object Freeze** (Object ko modify hone se rokna)
Object.freeze(JsUser);
JsUser.name = "Meghraj"; // Change nahi hoga kyunki object freeze ho chuka hai
console.log(JsUser.name); // Output: "Rajesh"

// 5️⃣ **Object Methods (Functions inside Objects)**
JsUser.greeting = function () {
  return "Hello World! How are you?";
};
console.log(JsUser.greeting()); // Function ko call karna

JsUser.greeting2 = function () {
  return `Hello ${this.fullName}, please confirm your email: ${this.email}`;
};
console.log(JsUser.greeting2()); // "this" keyword se object ke andar ki properties access karna
