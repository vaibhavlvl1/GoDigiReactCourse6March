//Switch Case Statement

//Example:
// Switch case se hum multiple conditions ko check kar sakte hain. Switch case statement ko if else-if statement ke sath compare kar sakte hain.

//Syntax:

// switch (expression) {
//   case value1:
//     //code
//     break;
//   case value2:
//     //code
//     break;
//   case value3:
//     //code
//     break;
//   default:
//   //code
// }

//Example:

//With Number Switch Case
const month = 3; //"Here month is key and 1 is value" /  {"both key and value should match to get the output"}
switch (month) {
  case 1:
    console.log("January");
    break;
  case 2:
    console.log("February");
    break;
  case 3:
    console.log("March");
    break;
  case 4:
    console.log("April");
    break;
  case 5:
    console.log("May");
    break;
  default:
    console.log("Invalid Month / Default Case");
    break;
}


//With String Switch Case
const rainbowColor = "Yellow";
switch (rainbowColor) {
  case "Violet":
    console.log("The color is Violet");
    break;
  case "Indigo":
    console.log("The color is Indigo");
    break;
  case "Blue":
    console.log("The color is Blue");
    break;
  case "Green":
    console.log("The color is Green ");
    break;
  case "Yellow":
    console.log("The color is Yellow ");
    break;
  case "Orange":
    console.log("The color is Orange ");
    break;
  default:
    console.log("Invalid Color / Default Case");
    break;
}
//------------------------------------------------------------------------------------//
