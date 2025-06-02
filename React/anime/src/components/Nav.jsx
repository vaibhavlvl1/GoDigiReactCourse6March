import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import styles from "./Nav.module.css";

export default function Nav() {
  const [isActive, setIsActive] = useState({
    home: true,
    search: false,
  });

  return (
    <ul className={styles.navList}>
      <li
        className={isActive.home ? styles.active : ""}
        id="home"
        onClick={() => setIsActive({ home: true, search: false })}
      >
        <Link to="/">Home</Link>
      </li>
      <li
        className={isActive.search ? styles.active : ""}
        id="search"
        onClick={(e) => setIsActive({ home: false, search: true })}
      >
        <Link to="/search">Search</Link>
      </li>
    </ul>
  );
}
