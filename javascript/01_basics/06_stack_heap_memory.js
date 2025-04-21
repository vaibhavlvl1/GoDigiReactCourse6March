//*******************Memory Types*******************
// Memory do types ki hoti hai: Stack aur Heap

// 1️⃣ Stack Memory: /
// - Yeh memory ka chhota aur fast part hota hai.
// - Stack memory sirf Primitive Data Types ko store karti hai.
// - Yahan jo bhi variable store hota hai, uski ek copy banti hai, original data change nahi hota.





// 2️⃣ Heap Memory:
// - Yeh memory bada aur dynamic hota hai.
// - Heap memory Non-Primitive (Reference Type) data store karta hai jaise Objects aur Arrays.
// - Yahan jo bhi variable store hota hai, uska reference store hota hai, original value change hoti hai.

//******************* Example *******************//

// Primitive Data Types => Stored in Stack Memory
let myYoutubeName = "MeghrajYT";
let anotherName = myYoutubeName; // Copy bani hai, original nahi change hoga
anotherName = "CodingWithRaj";

console.log(myYoutubeName); // Output: MeghrajYT
console.log(anotherName); // Output: CodingWithRaj

// Yahan anotherName ki alag copy bani hai, is wajah se original variable change nahi hota.

// ---------------------------------------------------------- //

// Reference/Non-Primitive Data Types => Stored in Heap Memory
let userOne = {
  email: "user@google.com",
  upi: "user@ybl",
  password: "123456",
};

let userTwo = userOne; // Reference copy hui hai isme, matlab dono ek hi memory location ko point kar rahe hain

console.log(userTwo);

userTwo.email = "meghraj@hotmail.com"; // Original data bhi change ho jayega

console.log(userOne.email); // Output: meghraj@hotmail.com
console.log(userTwo.email); // Output: meghraj@hotmail.com

// userOne ki email bhi change ho gayi hai kyunki userTwo and userOne dono same memory location ko point kar rahe hain.
// Stack mein sirf copy banti hai, Heap mein reference store hota hai jo same memory ko point karta hai.

console.table([userOne, userTwo, userOne.email, userTwo.email]);


let array1 = [1, 2, 3, 4, 5];
let array2 = array1;


array2[0]= 100;
console.log(array1);

