// ***************** Object De-structuring *****************
// Object De-structuring ka matlab hai ki hum ek object ke keys (properties) ko alag-alag variables me store kar sakte hain.
// Isse hum directly object ki values ko access kar sakte hain bina object ke naam ko bar-bar use kiye.

// Example 1: Basic Object
const course = {
  name: "JavaScript",
  price: 5000,
  courseInstructor: "Hitesh", // Yahan "Hitesh" value hai
  duration: "6 Months",
  topics: ["Variables", "Operators", "Functions", "Objects"],
};

// 1️⃣ **Object De-structuring Syntax**
// const { keyName : variableName } = ObjectName;
// - keyName: Wo property (key) jo hume extract karni hai.
// - variableName: Wo variable jisme hum us property ki value store karna chahte hain.
// - ObjectName: Wo object jiska data hum extract karna chahte hain.

// Example of Object De-structuring:
const { courseInstructor } = course;
console.log(courseInstructor); // Output: "Hitesh"
//
//
const { courseInstructor: teacherName } = course;
console.log(teacherName); // Output: "Hitesh"

// 2️⃣ **Default Values**
// Agar koi key object me nahi hai, to hum default value bhi set kar sakte hain.
const {
  courseInstructor: instructor = "anyVaLUE",
  nonExistentKey: defaultValue = "Default",
} = course;
console.log(instructor); // Output: "Hitesh" (kyunki ye key object me hai)
console.log(defaultValue); // Output: "Default" (kyunki ye key object me nahi hai)

// 3️⃣ **Multiple Keys Extract Karna**
// Hum ek sath multiple keys ko bhi extract kar sakte hain.
const { name, price, duration } = course;
console.log(name, price, duration); // Output: "JavaScript", 5000, "6 Months"

// 4️⃣ **Nested Object De-structuring**
// Agar object ke andar aur objects hain, to hum unhe bhi de-structure kar sakte hain.
const user = {
  name: "Meghraj",
  address: {
    city: "New York",
    country: "USA",
  },
};

const {
  name: userName,
  address: { city, country },
} = user;
console.log(userName, city, country); // Output: "Meghraj", "New York", "USA"

// 5️⃣ **Rest Operator**
// Agar hum object ki baki keys ko ek variable me store karna chahte hain, to rest operator (`...`) ka use kar sakte hain.
const { name: courseName, ...rest } = course;
console.log(courseName); // Output: "JavaScript"
console.log(rest); // Output: { price: 5000, courseInstructor: "Hitesh", duration: "6 Months", topics: ["Variables", "Operators", "Functions", "Objects"] }

// 6️⃣ **Renaming Variables**
// Hum variables ka naam change kar sakte hain jisse code aur readable ho jata hai.
const { name: courseTitle, price: courseFee } = course;
console.log(courseTitle, courseFee); // Output: "JavaScript", 5000

// 7️⃣ **Practical Use Case**
// Object de-structuring ka use function parameters me bhi kiya ja sakta hai.
function printCourseDetails({ name, price, duration }) {
  //Here keys are directly passed as parameters inside the function in curly braces because "we are destructuring the object".
  console.log(`Course Name: ${name}, Price: ${price}, Duration: ${duration}`);
}

printCourseDetails(course); // Output: Course Name: JavaScript, Price: 5000, Duration: 6 Months

// ***************** End of Object De-structuring *****************
