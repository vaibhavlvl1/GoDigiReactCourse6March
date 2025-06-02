import React from "react";
import FoodSearch from "./FoodSearch";
import styles from "./Header.module.css";

export default function Header({ setSearchItem, handleSubmit }) {
  return (
    <div className={styles.header}>
      <h1 className="logo">The Food App</h1>
      <FoodSearch setSearchItem={setSearchItem} handleSubmit={handleSubmit} />
    </div>
  );
}
