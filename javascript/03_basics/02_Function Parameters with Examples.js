//Topic: Function Parameters with Examples

// Example 1: Rest Parameters in Functions
// Jab humein ek function me ek se zyada arguments pass karne ho, lekin hum unka count nahi jaante, tab hum rest parameters ka use karte hain.

function calculateSubjectmarks(maths, physics, ...num1) {
  // maths and physics are normal parameters
  // ...num1 is a rest parameter, which will capture all the extra arguments passed.
  // num1 ek array me store ho jaayega.
  return num1;

}
let result = calculateSubjectmarks(200, 300, 400, 200, 8000, 6000);
console.log(result);

totalMarks = result.reduce((acc, curr) => acc + curr, 0); // Sum of all the marks
console.log(totalMarks);
// Output: [400, 200, 8000, 6000]
// num1 array ke form me return hota hai, jo ki rest parameters hain.
// **Rest parameters humare function ke baad wale sare extra arguments ko collect karte hain, aur unhe ek array me store karte hain.

//-------------------------------------------------------------------------------------------------//

// Example 2: Passing Objects as Function Parameters
// Jab hum function me object ko parameter ke roop me pass karte hain.

// Ye object hum function ke parameter me pass kar rahe hain
const user = {
  username: "Rajesh",
  price: 200,
};

function handleObject(anyObject) {
  // function ke andar object ke values ko access kar rahe hain
  console.log(
    `Username is ${anyObject.username} and price is ${anyObject.price}`
  );
}
handleObject(user); // Object ko function me pass kiya
// **Object ko ek variable me store karke function me pass kiya.
// Output: Username is Rajesh and price is 200

handleObject({ username: "Meghraj", price: 300 });
// Output: Username is Meghraj and price is 300
// **Object ko directly function me pass kiya gaya.

//-------------------------------------------------------------------------------------------------//

// Example 3: Passing Arrays as Function Parameters
// Jab hum function me array ko parameter ke roop me pass karte hain.

// Ye array hum function me pass kar rahe hain
const myNewArr = [200, 300, 400, 500, 600];

function returnSecondValue(getArray) {
  // function me array ko pass kar rahe hain aur usme se 2nd value return kar rahe hain.
  return getArray[1];
}

console.log(returnSecondValue(myNewArr));
// Output: 300
// **Array ko ek variable me store karke function me pass kiya.

console.log(returnSecondValue(["Raj", "Ramesh", "Sushma", "Payal", "Vinayak"]));
// Output: Ramesh
// **Array ko directly function me pass kiya gaya.

// Notes:
// - Jab hum function me parameters pass karte hain, hum normal parameters, rest parameters, object ya array pass kar sakte hain.
// - Rest parameters ek array me values ko store karte hain, jab humein unknown number of arguments ko function me pass karna hota hai.
// - Object aur array ko bhi function me pass kiya ja sakta hai, jo ki apne values ko function ke andar access karne ka tareeka hai.

// Rest Parameters, Object aur Array ke use cases sab important hain JavaScript me, aur yeh humein flexibility dete hain function calls me.

