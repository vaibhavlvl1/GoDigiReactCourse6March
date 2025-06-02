import React, { useContext } from "react";
import styles from "./ResultListItem.module.css";
import { Link } from "react-router-dom";
import { AnimeContext } from "../context/AnimeProvider";

export default function ResultListItem({ anime }) {
  const { addToWatchList } = useContext(AnimeContext);

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
          <Link to={`/search/${anime.mal_id}`}>View Details</Link>

          <button
            onClick={() => {
              addToWatchList(anime);
            }}
          ></button>
        </div>
      </div>
    </li>
  );
}
