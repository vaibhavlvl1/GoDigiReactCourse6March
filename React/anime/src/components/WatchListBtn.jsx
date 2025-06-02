import { useContext } from "react";
import styles from "./WatchListBtn.module.css";
import { AnimeContext } from "../context/AnimeProvider";

export default function WatchListBtn({ handleHide }) {
  const { watchCount } = useContext(AnimeContext);
  return (
    <div className={styles.watchContainer} onClick={handleHide}>
      <button className={styles.watchlistBtn}>WatchList - {watchCount}</button>
    </div>
  );
}
