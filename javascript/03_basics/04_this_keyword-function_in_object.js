//"this" keyword in the object method context refers to the object itself. It is used to refer the object in which it is called. "Matlab current object/parent object/Context of values in that object" ko refer karta hai.

//This keyword is used to refer the object in which it is called.
//This is used to refer the object in which it is called. "//Matlab current object/parent object/Context of values in that object" ko refer karta hai.

const user = {
  username: "Rajesh",
  price: 999,

  welcomeMessage: function () {
    console.log(`Welcome ${this.username} Your price is ${this.price}`);
    console.log(this);
  },
};


user.welcomeMessage(); //Calling the function with object.

//Changing the username
user.username = "Sam"; //Changing the username
user.welcomeMessage(); //AgaIN Calling the function with object.

console.log(this); //Output: {} //This is used to refer the global object.

//-------------------------------------------------------------------------------------------------------------------//

