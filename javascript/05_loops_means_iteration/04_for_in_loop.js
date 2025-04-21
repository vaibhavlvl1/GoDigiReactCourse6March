//For in loop with object:

//Step 1: Write object
//Step 2: Write for_in loop
//Step 3: Delete if statement from for_in loop
//Step 4: Write console.log statement with [key] and [object[key]].
const myObject = {
  js: "Javascript",
  py: "Python",
  rb: "Ruby",
  cs: "C#",
  go: "Golang",
  sw: "Swift",
};

for (const key in myObject) {
  console.log(`${key} is shortform of for: ${myObject[key]}`);
}

//----------------------------------------------------------------------//

//for_in method for array

const programmingLanguages = [
  "Javascript",
  "Python",
  "Ruby",
  "C#",
  "Golang",
  "Swift",
  "Java",
  "C++",
  "PHP",
  "Rust",
  "Kotlin",
  "Dart",
  "Scala",
  "Perl",
];

for (const key in programmingLanguages) {
  console.log(`Index is: ${key} and value is: ${programmingLanguages[key]}`);
}

//for_in loops on map
const map = new Map();
map.set("name", "Meghraj");
map.set("age", 25);
map.set("city", "Pune");

for (const key in map) {
  console.log(key); //It will not work because map is not iterable object.
}

//Notes:
//1. for_of loop is used to iterate over "map object".
//1. for_in loop is used to iterate over the "normal object".
