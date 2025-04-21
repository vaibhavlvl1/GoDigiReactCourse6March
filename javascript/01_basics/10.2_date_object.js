//"JavaScript Date Object and Its Methods".
let x = new Date(); //It is a constructor/Object

x.setFullYear(2023);
x.setMonth(3);
x.setDate(5);
x.setHours(3);
console.log(x); //Output is 2023-04-05T21:30:00.000Z because "month starts from 0 to 11"

//Date Formats
let x1 = new Date(2018, 11, 24, 10, 33, 30, 0);
console.log(x1);
let x2 = new Date("oct 13 2014 11:13:00");
console.log(x2);

// Here Sunday is 0, Monday is 1, and so on.
// Here january is 0, february is 1, and so on.

// Date after 50 days from the given date
let y = new Date("Oct 13 2014 11:13:00");
y.setDate(y.getDate() + 50); //here setDate() and getDate() are methods of Date Object.
console.log(y);

//Compare Dates
let date1 = new Date("2023-01-01");
let date2 = new Date("2023-01-01");
if (date1.getTime() == date2.getTime()) {
  console.log("Dates are equal");
} else {
  console.log("Dates are not equal");
}

//Dhyan me rakho ki new Date() me "new" ek constructor hai. aur "date()" ek object hai aur uske bht saare methods hai.
