//Comparison Operators in JavaScript

//Simple Situations
// console.log(2 > 1 )
// console.log(2 >= 1 )
// console.log(2 <= 1 )
// console.log(2 == 1 )
// console.log(2 != 1 )

//Complex Situations
// console.log("2" > 1)
// console.log("02" > 1)

// **Important -- Typescript only allows comparison between same types



//More Complex Situations
// console.log(null > 0);   //false
// console.log(null < 0);   //false
// console.log(null == 0);  //false
// console.log(null >= 0);  //true because null is converted to 0

// console.log(undefined == 0) //false because undefined is not converted to 0
// console.log(undefined > 0 )  //false because undefined is not converted to 0
// console.log(undefined < 0 )  //false because undefined is not converted to 0

//  === Strict Equality Operator
// console.log("2" == 2) //true
// console.log("2" === 2) //false because it checks the data type as well.

//Mostly avoid complex situations in code. It is better to use simple situations.

console.log(
  2 > 1,
  2 >= 1,
  2 <= 1,
  2 == 1,
  2 != 1,
  "2" > 1,
  "02" > 1,
  null > 0,
  null < 0,
  null == 0,
  null >= 0,
  undefined == 0,
  undefined > 0,
  undefined < 0,
  "2" == 2,
  "2" === 2
);
