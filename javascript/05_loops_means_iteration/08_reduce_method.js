//Array.reduce() method
//Notes:
// 1. The reduce() method is used to iterate over an array.
// 2. It takes a callback function as an argument.
// 3. It returns a single value after processing all elements of the array.
// 4. It does not modify the original array.
// 5. It is a higher-order function since it takes a callback as an argument.
// 6. It is a method of the Array object.
// 7. It primarily reduces the array to a single value, like a sum, a product, or an object.
// 8. It always returns a single value after reduction.
// 9. It uses an accumulator to gather the result as it processes the elements.
// 10. It can accept an optional initial value for the accumulator.

/*Syntax:
Array.reduce(() => {}, 0);
//Yahape accumulator ka initial value 0 hai jo hume dena padega koi bhi value de sakte hai.*/

//Example:
//Array.reduce() with normal function with return statement
let numbers = [1, 2, 3, 4, 5];
let total = numbers.reduce(function (accumulator, currentVal) {
  console.log(`Accumulator: ${accumulator}, Current Value: ${currentVal}`);
  return accumulator + currentVal;
}, 0);

//"Accumulator" can be initialized with any value like 0, 1, 10, etc.
//"currentVal" is derived from the array elements.

//Array.reduce() with arrow function without return statement
let myNumbers = [4, 5, 6, 7, 8, 9, 10, 11];
let myTotal = myNumbers.reduce((accumulator, currentVal) => {
  console.log(
    `Accumulator: ${accumulator}, Current Value: ${currentVal} taken from array`
  );
  return accumulator + currentVal;
}, 0);
console.log(myTotal);

//Another example with objects in an array of Array.reduce():
const shoppingCart = [
  {
    item: "Shirt",
    price: 1000,
  },
  {
    item: "Pant",
    price: 1400,
  },
  {
    item: "Shoe",
    price: 3000,
  },
  {
    item: "Belt",
    price: 50,
  },
];

totalShoppingBill = shoppingCart.reduce((acc, item) => {
  return acc + item.price;
}, 0);
console.log(totalShoppingBill);
