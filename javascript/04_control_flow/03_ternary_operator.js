//Ternary Operator:
//Ternary operator ek conditional operator hai jo 3 operands leta hai.






//Syntax with one condition:

// condition ? expression1 : expression2;
//condition ? true : false;
const iceTeaPrice = 120;
iceTeaPrice > 100
  ? console.log("Price Greater than 100")
  : console.log("Price Less than 100");

//Syntax with more than one condition:
// condition1 ? expression1 : condition2 ? expression2 : expression3;
const iceTeaPrice2 = 120;
iceTeaPrice2 > 100
  ? console.log("Price Greater than 100")
  : iceTeaPrice2 < 100
  ? console.log("Price Less than 100")
  : console.log("Price is 100");

  //Syntax with more than five condition:
// condition1 ? expression1 : condition2 ? expression2 : expression3 : condition4 ? expression4 : condition5 ? expression5 : expression6;
const iceTeaPrice3 = 120;
iceTeaPrice3 > 100
  ? console.log("Price Greater than 100")
  : iceTeaPrice3 < 100
  ? console.log("Price Less than 100")
  : iceTeaPrice3 === 100
  ? console.log("Price is 100")
  : iceTeaPrice3 >= 100
  ? console.log("Price Greater than or equal to 100")
  : iceTeaPrice3 <= 100
  ? console.log("Price Less than or equal to 100")
  : console.log("Price is not a number");