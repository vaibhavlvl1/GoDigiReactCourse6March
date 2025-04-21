//                                        ***************** JSON API *****************
// JSON API ka matlab hai ki hum data ko server se fetch karte hain aur us data ko apne website me show karte hain.
// JSON (JavaScript Object Notation) ek lightweight data interchange format hai jo human-readable hota hai aur easily change ho jata hai.

// 1️⃣ **JSON Format**
// JSON format {} (object) ya [] (array) me likha ja sakta hai.
// JSON me keys hamesha double quotes me hoti hain, aur values kuch bhi ho sakti hain (string, number, array, object, boolean, null).

// Example 1: JSON Format (Object)
const jsonObjectExample = `
{
  "name": "JavaScript",
  "duration": "6 Months",
  "courseInstructor": "Hitesh",
  "topics": ["Variables", "Operators", "Functions", "Objects"],
  "price": 5000
}
`;

// JSON string ko JavaScript object me convert karne ke liye JSON.parse() ka use karte hain.
const parsedObject = JSON.parse(jsonObjectExample);

console.log(parsedObject.name); // Output: "JavaScript"
console.log(parsedObject.topics); // Output: ["Variables", "Operators", "Functions", "Objects"]

// Example 2: JSON Format (Array of Objects)
const jsonArrayExample = `
[             
  {
    "name": "JavaScript",
    "duration": "6 Months",
    "courseInstructor": "Hitesh",
    "topics": ["Variables", "Operators", "Functions", "Objects"],
    "price": 5000
  },
  {
    "name": "Python",
    "duration": "6 Months",
    "courseInstructor": "Hitesh",
    "topics": ["Variables", "Operators", "Functions", "Objects"],
    "price": 5000
  }
]
`;

// JSON string ko JavaScript array me convert karne ke liye JSON.parse() ka use karte hain.
const parsedArray = JSON.parse(jsonArrayExample);
console.log(parsedArray[0].name); // Output: "JavaScript"
console.log(parsedArray[1].name); // Output: "Python"

// 2️⃣ **JSON.stringify()**
// JavaScript object ya array ko JSON string me convert karne ke liye JSON.stringify() ka use karte hain.
const course = {
  name: "JavaScript",
  duration: "6 Months",
  courseInstructor: "Hitesh",
  topics: ["Variables", "Operators", "Functions", "Objects"],
  price: 5000,
};

const jsonString = JSON.stringify(course);
console.log(jsonString); // Output: {"name":"JavaScript","duration":"6 Months","courseInstructor":"Hitesh","topics":["Variables","Operators","Functions","Objects"],"price":5000}

// 5️⃣ **Key Points**
// - JSON me keys hamesha double quotes me hoti hain.
// - JSON.parse() se JSON string ko JavaScript object ya array me convert karte hain.
// - JSON.stringify() se JavaScript object ya array ko JSON string me convert karte hain.
// - API se data fetch karne ke liye `fetch()` method ka use karte hain.

// ***************** End of JSON API *****************
