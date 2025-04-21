//Continue from last file.

const coding = ["Javascript", "Python", "Ruby", "C#", "Golang", "Swift"];

const values = coding.forEach((item) => {
  console.log(`Values are ${item}`);
  return item;
});
console.log(values); //returns undefined because forEach method does not return anything.
//refer last file for more details.

//----------------------------------------------------------------------//

//-------------------------------Array.filter() Method -------------------------------//
//Jaise "Array.forEach()" hota hai vaisa hi "Array.filter()" bhi hota hai.
//"FOR EACH" ME VALUES RETURN NAHI HOTA HAI LEKIN "FILTER" ME VALUES RETURN HOTA HAI AUR USKO STORE KAR SAKTE HAI KISI VARIABLE ME.
//Filter method ek array ke har element par ek function ko execute karta hai.
//Isme, ek naya array return hota hai jo condition ke according filter hota hai
// Isme hume condition pass karni hoti hai.
//Filter method original array ko change nahi karta hai.
//Filter method ek new array return karta hai.
//Filter method ek high order function hai.
//Filter method ek callback function leta hai.

//JavaScript Array filter() Method

//type 1 error example
const myNums2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const newNums3 = myNums2.filter((num) => {
  num > 5;
});
//Agar {} use karte ho to return statement use karna hi padega.
console.log(newNums2); //returns [] because filter method does not return anything.

//type1 with return statement.
const oldNumArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const newNumArray = oldNumArray.filter((num) => {
  //Curly {} use pe return statement use karna padega.
  return num > 5;
}); //returns [ 6, 7, 8, 9, 10 ]
console.log(newNumArray); //returns [ 6, 7, 8, 9, 10 ]

//type2 without return statement and curly braces. / Implicit function
const oldNumberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const newNumberArray = oldNumArray.filter((num) => num > 5); //returns [ 6, 7, 8, 9, 10 ]
console.log(newNumArray); //returns [ 6, 7, 8, 9, 10 ]

//------------------------------------------------------------------------------------//

//JavaScript Array forEach() Method (with manual array modification).
const emptyNumArray = [];
oldNumArray.forEach((num) => {
  if (num > 5) {
    emptyNumArray.push(num);
  }
});
console.log(emptyNumArray); //returns [ 6, 7, 8, 9, 10 ]

//-----------------------------------------------------------------------------------------------//

//JavaScript Array filter() Method with Objects in Array
const books = [
  {
    title: "Javascript",
    genre: "Programming",
    publishYear: 2021,
  },
  { title: "Python", genre: "Programming", publishYear: 2020 },
  { title: "Ruby", genre: "Science", publishYear: 2019 },
  { title: "C#", genre: "Programming", publishYear: 2018 },
  { title: "Golang", genre: "Photography", publishYear: 2017 },
  { title: "Swift", genre: "Mechanics", publishYear: 2016 },
];

//Filter books by genre
let userbooks = books.filter((book) => book.genre === "Programming");
console.log(userbooks);

//Filter books by publish year
let userbooks2 = books.filter((book) => book.publishYear >= 2018);
console.log(userbooks2);

//Filter books by genre and publish year
let userbooks3 = books.filter(
  (book) => book.genre === "Programming" && book.publishYear >= 2018
);
console.log(userbooks3);
