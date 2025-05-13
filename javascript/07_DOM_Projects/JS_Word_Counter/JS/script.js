let textbox = document.getElementById("textbox");

textbox.addEventListener("input", function () {
  var text = textbox.value;
  let char = text.length;
  document.getElementById("char").innerHTML = char;

  text = text.trim();
  let words = text.split(" ");
  let cleanList = words.filter(function (word) {
    return word != "";
  });
  document.getElementById("word").innerHTML = words.length;
});
