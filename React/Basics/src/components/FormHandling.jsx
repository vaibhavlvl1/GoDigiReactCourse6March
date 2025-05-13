import styles from "./FormHandling.module.css";

import { useState } from "react";
export default function FormHandling() {
  const [color, setColor] = useState("");
  const [passType, setPassType] = useState("password");
  return (
    <>
      <form
        style={{
          backgroundColor: color,
          height: "300px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <input
          className={styles.inputs}
          type="text"
          name="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
        <input className={styles.inputs} type={passType} />
        <span
          style={{ fontSize: "20px" }}
          onClick={(e) => {
            if (passType == "password") {
              setPassType("text");
            } else {
              setPassType("password");
            }
          }}
        >
          {passType == "text" ? (
            <i class="fa-solid fa-eye"></i>
          ) : (
            <i class="fa-solid fa-eye-slash"></i>
          )}
        </span>
      </form>
    </>
  );
}
