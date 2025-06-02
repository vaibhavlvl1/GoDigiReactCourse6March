import React from "react";
import NoteItem from "./NoteItem";

export default function Display({ notesList, handleConfirm, handleDelete }) {
  return (
    <div>
      <ul>
        {notesList.map((note, index) => (
          <NoteItem
            key={note.id}
            note={note}
            index={index}
            handleConfirm={handleConfirm}
            handleDelete={handleDelete}
          />
        ))}
      </ul>
    </div>
  );
}
