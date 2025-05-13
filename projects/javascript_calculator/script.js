function evaluate() {
  let query = document.getElementById("queryBox").value;
  console.log("THis is the entered question ", query);
  document.getElementById("queryBox").value = "";

  try {
    let results = eval(query);
    document.getElementById("queryBox").value = results;
  } catch (error) {
    document.getElementById("queryBox").value = "Invalid Input";
  }
}

document.getElementById("calculate").onclick = evaluate;
