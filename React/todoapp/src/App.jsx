import Header from "./components/Header";
import "./app.css";
import { useState } from "react";
import InputForm from "./components/InputForm";
import Display from "./components/Display";

export default function App() {
  const [notesList, setNotesList] = useState([]);

  function addNote(e, noteText) {
    e.preventDefault();
    if (noteText === "") {
      return;
    }
    setNotesList((prev) => [...prev, { text: noteText, id: Date.now() }]);
  }

  function handleDelete(id) {
    setNotesList(notesList.filter((note) => note.id !== id));
  }

  function handleConfirm(text, id) {
    // setNotesList(notesList.filter((note) => note.id !== id));
    // setNotesList((prev) => [...prev, { text: text, id: Date.now() }]);

    setNotesList((prev) =>
      prev.map((item) => (item.id == id ? { ...item, text: text } : item))
    );
  }

  return (
    <>
      <Header />
      <InputForm addNote={addNote} />
      {notesList.length > 0 ? (
        <Display
          notesList={notesList}
          handleConfirm={handleConfirm}
          handleDelete={handleDelete}
        />
      ) : (
        <div style={{ width: "100%", paddingTop: "20px", paddingLeft: "20px" }}>
          <h1 style={{ textAlign: "center" }}>No New Notes</h1>
        </div>
      )}
    </>
  );
}
