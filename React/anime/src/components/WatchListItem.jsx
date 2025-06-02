import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styles from "./WatchListItem.module.css";
import { AnimeContext } from "../context/AnimeProvider";

export default function WatchListItem({ anime }) {
  const { removeFromWatchList } = useContext(AnimeContext);

  return (
    <li className={styles.watchListItem}>
      <div className={styles.imgContainer}>
        <img src={anime.images.webp.image_url} alt="" />
      </div>
      <div className={styles.descriptionContainer}>
        <h3>{anime.title}</h3>
        <Link to={`/search/${anime.mal_id}`}>View Details</Link>
        <button onClick={() => removeFromWatchList(anime.mal_id)}>
          Remove
        </button>
      </div>
    </li>
  );
}
