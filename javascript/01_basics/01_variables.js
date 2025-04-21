//Variable Declaration
//Everything is depend on the memory. Store karna , access karna, change karna, delete karna, sab kuch memory me hota hai.


//Variable ek container hota hai jisme hum kisi bhi data ko store kar sakte hain.
// const , let, var are Keywords to declare a variable, keyword is a reserved word in programming that has a special meaning.
const accountId = 144553;
let accountEmail = "meghrajhamade@gmail.com";
var accountPassword = 12345678;
accountCity = "jaipur";
let accountState; //undefined



//Agar sirf variable declare karke usme koi value assign nahi karte toh uska value undefined hota hai.

//Changing the value of variable:
accoundId  = 2 //Not Allowed because it is a constant variable
accountEmail = "email@email.com";
accountPassword = "87654321";
accountCity = "delhi";

/*
Don't use 'Var' Keyword because issue in Block scope and functional Scope.
*/
document.table([
  accountId,
  accountEmail,
  accountPassword,
  accountCity,
  accountState,
]);



// Function Scope: When a variable is declared inside a function, it is only accessible within that function and cannot be used outside that function. Example: function myFunction() { let x = 10; }

// Block Scope: A variable when declared inside the if or switch conditions or inside for or while loops, are accessible within that particular condition or loop. Example: if (true) { let x = 10; }

// Global Scope: A variable declared outside a function or block is accessible throughout the program. Example: let x = 10;


