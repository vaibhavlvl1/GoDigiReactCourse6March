import React, { useEffect, useState } from "react";
import { debounce } from "throttle-debounce";

import styles from "./FoodSearch.module.css";

export default function FoodSearch({ setSearchItem, handleSubmit }) {
  return (
    <form className={styles}>
      <input
        placeholder="Search For Foods"
        type="text"
        onChange={(e) => setSearchItem(e.target.value)}
      />
    </form>
  );
}
