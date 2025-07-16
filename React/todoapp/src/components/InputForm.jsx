import { useState } from "react";
import styles from "./InputForm.module.css";

export default function InputForm({ addNote }) {
  const [singleNote, setSingleNote] = useState("");
  return (
    <form
      className={styles.form}
      onSubmit={(e) => {
        addNote(e, singleNote);
        setSingleNote("");
      }}
    >
      <input
        value={singleNote}
        onChange={(e) => setSingleNote(e.target.value)}
        type="text"
      />
      <button>Add Note</button>
    </form>
  );
}
