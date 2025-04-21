// ***************** Array in Array (Multidimensional Array) *****************

const marvelHeroes = ["thor", "ironman", "spiderman", "captain america" ];
const dcHeroes = ["batman", "superman", "flash", "wonderwoman"];

// Pushing dcHeroes as a single element into marvelHeroes
marvelHeroes.push(dcHeroes);
console.log(marvelHeroes);
console.log(marvelHeroes[3]); //Caption America
console.log(marvelHeroes[4][2]); //Flash
console.log(marvelHeroes[4][2][0]); //Should print F of Flash

// ***************** Array Concat Method *****************
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = arr1.concat(arr2);
console.log(arr3);

// ***************** Spread Operator *****************
const all_heroes = [...marvelHeroes, ...dcHeroes];
console.log(all_heroes); //Better way to merge two arrays

// ***************** Array Flat Method *****************
const another_array = [1, 2, 3, [4, 5, 6], 7, [11, 12, ["a", "b"]]];
console.log(another_array.flat(1));
console.log(another_array.flat(2));

// ***************** Array isArray Method *****************
console.log(Array.isArray(another_array)); //Check if it is an array or not

// ***************** Array from Method *****************
let str = "Meghraj_Hamade";
console.log(Array.from(str)); //Convert string to array , each character will be a separate element and i can access them using index

// ***************** Object to Array *****************
let obj = { name: "Meghraj", age: 22, city: "jalna", bloodgroup: "O+" };
let obj_to_array = Object.entries(obj);
console.log(obj_to_array);
// Accessing the fourth character of the first value in the object-to-array conversion
console.log(obj_to_array[0][1][3]); //Output: h

// ***************** Array of Variables *****************
let score1 = 200,
  score2 = 300,
  score3 = 400;
console.log(Array.of(score1, score2, score3));

// ***************** Array Fill Method *****************
let fill_array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
fill_array.fill("Meghraj", 2, 5);
console.log(fill_array);

//Notes:
//array from method is used to convert string to array
//array of method is used to create array of elements.
//Object.entries() method is used to convert object to array
