// "JS Arrays and Its Methods"
// JavaScript mein Array ek aisa data structure hai jo multiple values ko ek single variable mein store kar sakta hai.
// Array ko square brackets [] se denote kiya jata hai.

// ***************** Normal Array Declaration *****************

const myArr = [99, 1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(myArr[0]); // Pehla element access karna.

// ***************** Array Declaration using new Keyword *****************
const myArr2 = new Array(1, 2, 3, 4, 5);
console.log(myArr2[2]);

//----------------------------------------------------------------//

// ***************** Array Methods *****************

// 1️⃣ **PUSH METHOD** (Array ke end mein element add karta hai)
myArr.push(6);
console.log(myArr);

// 2️⃣ **POP METHOD** (Array ke last element ko remove karta hai)
myArr.pop();
console.log(myArr);

// 3️⃣ **UNSHIFT METHOD** (Array ke start mein element add karta hai, baaki sab right shift hote hain)
myArr.unshift(0);
console.log(myArr);

// 4️⃣ **SHIFT METHOD** (Array ke first element ko remove karta hai)
myArr.shift();
console.log(myArr);

// 5️⃣ **INCLUDES METHOD** (Check karta hai ki koi element array mein hai ya nahi, true/false return karta hai)
console.log(myArr.includes(3));

// 6️⃣ **INDEXOF METHOD** (Element ka index return karta hai, agar nahi mila to -1 return karega)
console.log(myArr.indexOf(3));

// 7️⃣ **JOIN METHOD** (Array ke elements ko string mein convert karta hai aur custom separator use kar sakte hain)
const myString = myArr.join(" - ");
console.log(myString);
console.log(typeof myString); // String bana diya

// 8️⃣ **TOSTRING METHOD** (Array ko string mein convert karta hai, separator hamesha comma hota hai)
console.log(myArr.toString());

// 9️⃣ **LENGTH PROPERTY** (Array ke total elements ki length return karta hai)
console.log(myArr.length);

// 🔟 **CONCAT METHOD** (Do arrays ko merge karta hai, naya array return karta hai)
const newArr = myArr.concat(myArr2);
console.log(newArr);

// 1️⃣1️⃣ **REVERSE METHOD** (Array ke elements ko reverse kar deta hai)
myArr.reverse();
console.log(myArr);

// 1️⃣2️⃣ **SORT METHOD** (Array ko ascending order mein sort karta hai, numerical sorting ke liye compare function dena zaroori hai)
myArr.sort((a, b) => a - b);
console.log(myArr);

//----------------------------------------------------------------//

// 1️⃣3️⃣ **SLICE METHOD** (Array ka ek portion copy karta hai bina original array ko modify kiye)
let fruits = ["Apple", "Banana", "Mango", "Grapes", "Pineapple", "Orange"];
let slicedFruits = fruits.slice(1, 3); // Index 1 se lekar 3 tak (3 included nahi hoga)
console.log("Sliced Fruits (1 se 3 tak):", slicedFruits);
console.log("Original Fruits slice ke baad:", fruits);

// 1️⃣4️⃣ **SPLICE METHOD** (Original array ko modify karta hai, elements remove/add kar sakta hai)

// Splice se 2 elements remove karna (Index 2 se Mango aur Grapes hatenge)
let removedFruits = fruits.splice(2, 2);
console.log("Removed Fruits using splice:", removedFruits);
console.log("Fruits splice ke baad:", fruits);

// Splice se naye elements add karna (Index 2 par Orange aur Kiwi add karna)
fruits.splice(2, 0, "Orange", "Kiwi");
console.log("Fruits ke andar 'Orange' aur 'Kiwi' add karne ke baad:", fruits);

//----------------------------------------------------------------//

// **Additional Points jo zaroori hain:**
// ✅ slice() method original array ko modify nahi karta.
// ✅ splice() method original array ko modify karta hai (elements delete/add karta hai).
// ✅ join() aur toString() dono array ko string mein convert karte hain, but join() separator customize karne deta hai.
// ✅ sort() method default lexicographical (dictionary order) sorting karta hai, numerical sorting ke liye function pass karna zaroori hai.
// ✅ push() aur pop() array ke end se kaam karte hain, jabki shift() aur unshift() array ke start se.
// ✅ includes() method boolean value return karta hai (true/false) jo batata hai ki element present hai ya nahi.
// ✅ concat() method do arrays ko merge karke ek naya array return karta hai.
// ✅ reverse() method array ke elements ko reverse kar deta hai.
// ✅ length property array ke total elements ki length return karta hai.
// ✅ indexOf() method element ka index return karta hai, agar element array mein nahi hai to -1 return karta hai.
// ✅ slice() method original array ko modify nahi karta, slice() copy banata hai.
// ✅ splice() method original array ko modify karta hai, elements remove/add kar sakta hai.
