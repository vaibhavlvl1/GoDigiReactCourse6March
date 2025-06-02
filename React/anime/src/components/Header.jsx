import React from "react";
import SearchInput from "./SearchInput";
import styles from "./Header.module.css";
import WatchList from "./WatchListBtn";
import Nav from "./Nav";
import WatchListBtn from "./WatchListBtn";

export default function Header({ handleHide }) {
  return (
    <header className={styles.header}>
      <div className="logo">
        <span style={{ color: "#00ffff" }}>The</span>
        <span style={{ color: "red" }}>Anime</span>
        <span style={{ color: "#00ffff" }}>DB</span>
      </div>

      {/* <SearchInput /> */}

      <Nav />

      <WatchListBtn handleHide={handleHide} />
    </header>
  );
}
