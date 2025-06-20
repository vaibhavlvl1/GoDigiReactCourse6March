import React, { useContext, useState } from "react";
import styles from "./ResultListItem.module.css";
import { Link } from "react-router-dom";
import { AnimeContext } from "../context/AnimeProvider";

export default function ResultListItem({ anime }) {
  const { addToWatchList, checkInWatchList } = useContext(AnimeContext);

  const [isAdded, setIsAdded] = useState(false);

  return (
    <li className={styles.resultListItem}>
      <div className={styles.listImgContainer}>
        <img src={anime.images.webp.image_url} alt="" />
      </div>
      <div className={styles.listDescContainer}>
        <h1>{anime.title}</h1>
        <div className={styles.stats}>
          <span>Score : {anime.score}</span>
          <span>Episodes : {anime.episodes}</span>
          <span>Rank : {anime.rank}</span>
          <p>Favorited by {anime.favorites} Users</p>
        </div>
        <p>{anime.synopsis.slice(0, 300)}....</p>
        <div className={styles.listItemLinks}>
          <a href={anime.url}>Visit MAL</a>
          <Link to={`/animeDetails/${anime.mal_id}`}>View Details</Link>

          <button
            onClick={() => {
              addToWatchList(anime);
              setIsAdded(true);
            }}
          >
            {isAdded ? "Added" : "Add to WatchList"}
          </button>
        </div>
      </div>
    </li>
  );
}
