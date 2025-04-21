//JS Arrays.map() method with arrow function

//Notes:
//1. map() method is used to iterate over an array.
//2. It takes a callback function as an argument.
//3. It returns a new array.
//4. It does not change the original array.
//5. It is a high order function.
//6. It is a method of an array.
//7. It is a pure function.
//8. It is used to modify the array elements.
//9. It returns the value directly.

const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const modifiedNum = myNumbers.map((num) => num + 5);
console.log(modifiedNum);

//Chaining method on array:
//Notes:
//1. We can chain multiple () methods.
//2. We can use multiple methods on the array to get the desired output.

const newNums = myNumbers
  .map((num) => num * 10) //Result directly passed to next method.
  .map((num) => num + 1) //Result directly passed to next method.
  .filter((num) => num >= 40); //Output: [ 41, 51, 61, 71, 81, 91, 101 ]

console.log(newNums);
