// 2. Object constructor
// In this method, we use the new keyword to create an object.
//Singleton Object is created using Object Constructor

//----------------------------------------------------------------------------//

//Example1:
const AppUser2 = new Object(); //Singleton Object ---- Output is {} empty object
const tinderUser = {}; //Non Singleton Object ---- Output is same as above
tinderUser.id = "1122a";
tinderUser.name = "Meghraj";
tinderUser.isLoggedIn = false;
tinderUser.age = 30; //Property
tinderUser.city = "New York";
tinderUser.email = "meghraj@hotmail.com";
console.log(tinderUser); //Prints the object

//**Important Points**

console.log(Object.keys(tinderUser)); //To print the Object keys/properties
console.log(Object.values(tinderUser)); //To print the Object values
console.log(Object.entries(tinderUser)); //To print the Object entries matlab key value pair as array.
console.log(tinderUser.hasOwnProperty("name")); //To Check the object has a key/Property or not. Returns true or false

//----------------------------------------------------------------------------//

//Example2: Object in Object // Nested Object
const happpnUser = {
  id: "123",
  fullName: {
    userFullName: {
      firstName: "Sonia", 
      lastName: "Gupta",
    },
  },
  isLoggedIn: true,
  age: 25,
};

//Accessing the object properties of above object
console.table([
  happpnUser.id,
  happpnUser.fullName,
  happpnUser.fullName.userFullName,
  happpnUser.fullName.userFullName.firstName,
  happpnUser.fullName.userFullName.lastName,
  happpnUser.isLoggedIn,
  happpnUser.age,
]);

//----------------------------------------------------------------------------//

//Merge two objects
const obj1 = { 1: "one", 2: "two", 3: "three" };
const obj2 = { 4: "four", 5: "five", 6: "six" };
const objNew = { 7: "seven", 8: "Eight", 9: "nine" };

const mergedObj1 = Object.assign(obj1, obj2); //Old way of merging the object
const mergedObj = { ...obj1, ...obj2, ...objNew }; //New way of merging the object

console.table([mergedObj1]);
console.table([mergedObj]);

//Jab bhi database se values aayegi mostly be array of objects hongi jaise niche diye gaye hain
const dataUsers = [
  { id: 0, name: "Meghraj", age: 30 },
  { id: 1, name: "Rakesh", age: 22 },
  { id: 2, name: "Vijay", age: 17 },
  { id: 3, name: "Payal", age: 19 },
  { id: 4, name: "Viraj", age: 24 },
  { id: 5, name: "Mahendra", age: 26 },
];
//To access the name of the user with id 2
console.log(dataUsers[2].name); //Output: Vijay
//To access the age of the user with id 5
console.log([dataUsers[5].age]); //Output: 26

//----------------------------------------------------------------------------------------------------------//
