import React from "react";
import NoteItem from "./NoteItem";

export default function Display({ notesList, handleConfirm, handleDelete }) {
  return (
    <div style={{ paddingLeft: "30px" }}>
      <ul style={{ listStyle: "none" }}>
        {notesList.map((note, index) => (
          <NoteItem
            key={note.id}
            note={note}
            index={index + 1}
            handleConfirm={handleConfirm}
            handleDelete={handleDelete}
          />
        ))}
      </ul>
    </div>
  );
}
