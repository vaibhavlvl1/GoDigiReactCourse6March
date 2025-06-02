import React from "react";
import { useContext } from "react";
import { AnimeContext } from "../context/AnimeProvider";
import { useState } from "react";
import { useEffect } from "react";

import styles from "./SearchInput.module.css";

export default function SearchInput() {
  const { search, setSearch, setOpenSearch, inputValue, setInputValue } =
    useContext(AnimeContext);

  useEffect(() => {
    const x = setTimeout(() => {
      setSearch(inputValue);
    }, 2000);

    return () => {
      clearTimeout(x);
    };
  }, [inputValue]);

  return (
    <input
      placeholder="Search For Animes"
      className={styles.searchInput}
      onChange={(e) => {
        setInputValue(e.target.value);
        setOpenSearch(true);
      }}
      type="text"
      value={inputValue}
    />
  );
}
