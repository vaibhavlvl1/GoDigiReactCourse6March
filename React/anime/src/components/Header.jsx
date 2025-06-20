import React, { useRef } from "react";

import styles from "./Header.module.css";
import WatchList from "./WatchList";
import Nav from "./Nav";
import WatchListBtn from "./WatchListBtn";

export default function Header() {
  const watchListRef = useRef();

  function handleHide() {
    watchListRef.current.classList.toggle("hide");
    // watchListRef.current.classList.toggle("unhide");
  }
  return (
    <header className={styles.header}>
      <div className="logo">
        <span style={{ color: "#00ffff" }}>The</span>
        <span style={{ color: "red" }}>Anime</span>
        <span style={{ color: "#00ffff" }}>DB</span>
      </div>

      <Nav />

      <WatchListBtn handleHide={handleHide} />
      <WatchList handleHide={handleHide} watchListRef={watchListRef} />
    </header>
  );
}
