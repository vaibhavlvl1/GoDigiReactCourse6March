const notes = [{}];

function display_notes() {
  document.getElementById("notes-list").innerHTML = "";

  if (notes.length > 0) {
    notes.forEach((note, index) => {
      console.log(note);
      console.log(index);
      let list_item = document.createElement("li");
      list_item.classList.add("notes-item");
      list_item.innerHTML = `${index + 1} : ${note.text} <button id= ${
        note.id
      } onclick="remove_note(${note.id})"> X </button`;

      document.getElementById("notes-list").appendChild(list_item);
    });
  } else {
    document.getElementsByTagName("main")[0].innerHTML =
      "<h1>Add a Note to display here</h1>";
  }
}

function add_note(e) {
  e.preventDefault();
  let note = document.getElementById("note-input").value;
  notes.push({ text: note, id: Date.now() });
  display_notes();
  document.getElementById("note-input").value = "";
}

function remove_note(note_id) {
  notes.forEach((note, index) => {
    if (note.id == note_id) {
      notes.splice(index, 1);
    }
  });
  display_notes();
}
