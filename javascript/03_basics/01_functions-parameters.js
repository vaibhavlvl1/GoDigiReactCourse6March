//Javascript me function ek block of code hota hai jo ek specific task ko perform karta hai.

//Isme hume 4 cheezein yaad rakhni hoti hai:
//1. Function Declaration / Function Definition
//2. Function scope and block
//3. Function Return Statement
//4. Function Call ()

//Isse hum code ko re-useable banate hai / code ko modular banate hai aur code ko chota banate hai.

// function structure:
function functionName() {
  //Code to be executed
}

//Example1:
function sayMyName() {
  console.log("M");
  console.log("E");
  console.log("G");
  console.log("H");
  console.log("R");
  console.log("A");
  console.log("J");
}
sayMyName; //Isko hum reference ke liye use kar rahe hain, matlab hum ye batarahe hai ki function vaha rehta hai lekin isko call nahi kiya hai matlab iska output nahi aayega.
sayMyName(); //This will call the function and will return the value of the function.

//---------------------------------------------------------------------------------------------------------------------------//

//Add two numbers  with parameters.
//Here "number1 and number2" are the "PARAMETERS" jo hum function define karte waqt pass karte hain.

function addTwoNumbers(number1, number2) {
  console.log(number1 + number2);
}
addTwoNumbers(3, 4); //"3 & 4" are"ARGUMENTS" jo function call karte waqt pass karte hain.
addTwoNumbers(3, "4"); //"3 & "4"" are"ARGUMENTS" jo function call karte waqt pass karte hain.
addTwoNumbers(3, "a"); //"3 & "a"" are"ARGUMENTS" jo function call karte waqt pass karte hain.
//---------------------------------------------------------------------------------------------------------------------------//

// **Return kyun zaroori hai?
// `RETURN` ka matlab hai ki function kisi value ko wapas karega, taki usse function call karne wali jagah par use kiya ja sake.**
// Jab hum kisi function ke andar calculation ya operation karte hain, to wo calculation sirf function ke andar hoti hai. Agar hum us calculation ka result function ke bahar use karna chahte hain, to hume `return` statement ka use karna padta hai. Yeh function ko ek value wapas karne ki permission deta hai, jo kisi variable me store ho sakti hai ya directly use ki ja sakti hai.
// **Return ke baad koi bhi code execute nahi hoga.**

//Function with return statement:
function subTwoNumbers(number1, number2) {
  let result = number1 - number2;
  return result;
  console.log("This will not be printed"); //Return ke baad koi bhi code execute nahi hoga.
}
subTwoNumbers(50, 30); //Arguments Passed but not printed.

const result = subTwoNumbers(50, 30); //Store value of the function in variable
console.log(`Subtraction of two Numbers is: ${result}`);

//-------------------------------------------------------------------------------------------------------------------------//

// ----------------------EASY WAY----------------------//
//Function with return Alternate way:
function multTwoNumbers(number1, number2) {
  return number1 * number2;
}
const answer = multTwoNumbers(7, 12); //Store value of the function in variable
console.log(`Multiplication of two Numbers is:${answer}`);

//-------------------------------------------------------------------------------------------------//

//Function with multiple return statements:
function loginUserMessage(username) {
  if (username === undefined) {
    return "Please provide a username";
  } else {
    return `${username} Just logged in`;
  }
}
loginUserMessage("Ramesh"); //Argument pass kiya lekin print nahi kiya.
console.log(loginUserMessage()); //No Argument is Passed so it will return "Please provide a username".
console.log(loginUserMessage("Rajesh")); //Argument is Passed and printed

//-------------------------------------------------------------------------------------------------//

//Function with default parameters:
function logoutUserMessage(username = "Anonymous") {
  //Default value is set to "Anonymous" if no value is passed.
  if (username === undefined) {
    return "Please enter a username";
  } else {
    return `${username} Just Logged Out`; //If username is passed then it will return the username.
  }
}
console.log(logoutUserMessage()); //No Argument is Passed so it will return "Please provide a username".
console.log(logoutUserMessage("Rajesh")); //Argument is Passed and printed

//-------------------------------------------------------------------------------------------------//


