import React from "react";
import loader from "../images/loader.gif";
import styles from "./Loader.module.css";

export default function Loader() {
  return (
    <div className={styles.loaderContainer}>
      <img src={loader} alt="" />
    </div>
  );
}
