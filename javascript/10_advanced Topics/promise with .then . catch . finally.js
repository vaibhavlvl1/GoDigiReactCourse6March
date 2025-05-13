// ******************** Example 1: Basic Promise Creation ******************** //
// Ek naya promise create kiya jo ek asynchronous operation perform karega
const promiseOne = new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Promise is resolved"); // 3 second ke baad yeh statement execute hoga
  }, 3000);
});

console.log(promiseOne);
// Output: Promise { <pending> }
// Pehle pending dikhega, fir 3 sec ke baad "Promise is resolved" print hoga

// ******************** Steps to create a Promise ******************** //
// Step 1: Ek naya Promise object banao -> new Promise() {}
// Step 2: Ek function pass karo jisme resolve & reject parameters ho
// Step 3: Function ke andar asynchronous code likho -> setTimeout()
// Step 4: resolve() ya reject() call karo
// Step 5: Promise object ko call karo -> console.log(promiseOne);

// ******************** Example 2: Resolve aur Reject ke saath ******************** //
const promiseTwo = new Promise(function (resolve, reject) {
  setTimeout(function () {
    const error = true; // Agar error true hai to reject hoga, warna resolve
    if (!error) {
      console.log("Promise is resolved");
      resolve(); // Ye .then() method ko trigger karega
    } else {
      console.log("Promise is rejected");
      reject(); // Ye .catch() method ko trigger karega agar hota
    }
  }, 3000);
});

console.log(promiseTwo);
// Output: Promise { <pending> } -> 3 sec baad "Promise is rejected" print hoga

// ******************** .then() ka use ******************** //
// Jab promise resolve hoga, tab ye callback chalega
promiseTwo
  .then(function () {
    console.log("Thanks for resolving the promise");
  })
  .catch(function () {
    console.log("Something went wrong");
  });

// ******************** Example 3: Promise without variable ******************** //
new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Async Task 2"); // 2 sec baad print hoga
    resolve(); // .then() method trigger karega
  }, 2000);
}).then(function () {
  console.log("Thanks for resolving the Async Task 2");
});

// ******************** Example 4: Resolve Method me Data Pass karna ******************** //
const promiseFour = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve({ name: "Meghraj", age: 25 }); // Resolve me ek object pass kar rahe hain
  }, 1000);
});

// .then() method se resolve data ko access karna
promiseFour.then(function (objFromResolve) {
  console.log(objFromResolve); // Output: { name: "Meghraj", age: 25 }
  console.log(objFromResolve.name); // Output: Meghraj
});

// ******************** Example 5: Promise Example with Resolve, Reject, and Finally ******************** //
const promiseFive = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = false; // Agar yeh true hota to reject hota
    if (!error) {
      resolve({ name: "Meghraj", age: 25 }); // Agar error false hai to ye object return hoga
    } else {
      reject("ERROR: Something went wrong"); // Agar error true hota to yeh run hota
    }
  }, 1000);
});

// .then(), .catch(), and .finally() ka example
promiseFive
  .then((userInfo) => {
    console.log(userInfo); // Output: { name: "Meghraj", age: 25 }
    return userInfo.name; // Next .then() ke liye value return kar raha hai
  })
  .then((name) => {
    console.log(name); // Output: Meghraj
  })
  .catch((error) => {
    console.log(error); // Agar reject hota to ye chalega
  })
  .finally(() => {
    console.log("Finally the Promise is Resolved/Rejected"); // Ye hamesha chalega
  });
