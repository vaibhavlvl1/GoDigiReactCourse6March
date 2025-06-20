import React, { useContext, useState } from "react";
import styles from "./WatchList.module.css";
import { AnimeContext } from "../context/AnimeProvider";
import WatchListItem from "./WatchListItem";

export default function WatchList({ watchListRef, handleHide }) {
  const { watchList } = useContext(AnimeContext);
  return (
    <div ref={watchListRef} className={styles.watchListContainer}>
      <button onClick={handleHide} className={styles.closeBtn}>
        Close
      </button>
      <ul>
        {watchList.length == 0 ? (
          <p>No Animes In WatchList</p>
        ) : (
          watchList.map((anime) => (
            <WatchListItem key={anime.mal_id} anime={anime} />
          ))
        )}
      </ul>
    </div>
  );
}
