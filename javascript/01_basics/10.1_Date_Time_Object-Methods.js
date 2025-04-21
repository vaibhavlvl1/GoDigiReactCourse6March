//"JavaScript Date and Time Manipulation Methods"

//Dates
let myDate = new Date();
console.log(myDate);

//Date methods
console.log(`The date is ${myDate}`);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(myDate.toTimeString());
console.log(myDate.toLocaleTimeString());
console.log(myDate.toISOString());
console.log(myDate.toUTCString());
console.log(typeof myDate); //Object


let myCreatedDate = new Date(2023, 0, 23, 5, 3);
console.log(myCreatedDate.toDateString());
console.log(myCreatedDate);
console.log(myCreatedDate.getTime());
console.log(myCreatedDate.toLocaleDateString());

let anotherDate = new Date("2023-01-14");
console.log(anotherDate.toLocaleDateString());

//Timestamps
let myTimeStamp = Date.now();
console.log(Date.now()); //It Gives value in milliseconds

console.log(Math.floor(Date.now() / 1000)); //To Convert Timestamp milliseconds to Seconds

let newDate = new Date();
// console.log(newDate.getDate());
// console.log(newDate.getDay());
// console.log(newDate.getHours());
// console.log(newDate.getMinutes());
// console.log(newDate.getFullYear());
// console.log(newDate.getMonth());

console.table([
  newDate.getFullYear(),
  newDate.getDay(),
  newDate.getHours(),
  newDate.getMinutes(),
  newDate.getFullYear(),
  newDate.getMonth(),
]);

//Below is the way to get the full date and time using toLocaleString method

console.log(newDate.toLocaleString("default", {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
  hour: "numeric",
  minute: "numeric",
  second: "numeric"
}));


