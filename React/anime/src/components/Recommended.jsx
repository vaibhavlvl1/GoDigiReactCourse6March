import styles from "./Recommended.module.css";
import axios from "axios";

import { useState, useEffect, useReducer } from "react";

import { StepForward, StepBack } from "lucide-react";
import Loader from "./Loader";
import { useContext } from "react";
import { AnimeContext } from "../context/AnimeProvider";

const initialState = {
  index: 0,
};

function indexReducer(state, action) {
  let result = { index: 0 };
  switch (action.type) {
    case "next":
      if (state.index >= 9) {
        result = { index: 0 };
      } else result = { index: state.index + 1 };

      return result;

    case "prev":
      if (state.index <= 0) {
        result = { index: 9 };
      } else result = { index: state.index - 1 };
      return result;
    case "reset":
      return { index: 0 };
  }
}

export default function Recommended() {
  const [topAnimes, setTopAnimes] = useState();
  const [state, dispatch] = useReducer(indexReducer, initialState);

  const { addToWatchList } = useContext(AnimeContext);

  async function getTopAnime() {
    try {
      const response = await axios.get(
        "https://api.jikan.moe/v4/top/anime?limit=10"
      );

      setTopAnimes(response.data.data);
    } catch (error) {
      console.log(error.message);
    }
  }

  useEffect(() => {
    getTopAnime();
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch({ type: "next" });
    }, 60000);

    if (state.index >= 9) {
      dispatch({ type: "reset" });
    }

    return () => {
      clearTimeout(timer);
    };
  }, [state.index]);

  return (
    <>
      {topAnimes ? (
        <div className={styles.recContainer}>
          <div className={styles.description}>
            <h1 className={styles.animeTitle}>
              {topAnimes[state.index].title}
            </h1>
            <h2 className={styles.animeTitleAlt}>
              {topAnimes[state.index].title_english}
            </h2>

            <p className={styles.info}>
              <span>Rating : {topAnimes[state.index].score}</span>
              <span>
                {topAnimes[state.index].airing ? "Ongoing" : "Finished"}
              </span>
              <span> Episodes : {topAnimes[state.index].episodes}</span>
            </p>

            <p className={styles.synopsis}>
              {topAnimes && topAnimes[state.index].synopsis.slice(0, 800)}
            </p>
            <div className={styles.genres}>
              <p>Genres:</p>
              {topAnimes[state.index].genres.map((genre) => (
                <span key={genre.name}>{genre.name}</span>
              ))}
            </div>
            <div style={{ marginTop: "40px" }}>
              <a
                href={topAnimes[state.index].studios[0].url}
                className={styles.studio}
              >
                Studio : {topAnimes[state.index].studios[0].name}
              </a>
              <a href={topAnimes[state.index].url} className={styles.mal}>
                Visit MAL
              </a>
              <button
                onClick={(e) => addToWatchList(topAnimes[state.index])}
                className={styles.addToWatch}
              >
                Add To WatchList
              </button>
            </div>
          </div>
          <div className={styles.trailerContainer}>
            <iframe
              src={`${
                topAnimes[state.index].trailer.embed_url
              }&controls=0&autoplay=1&mute=1&rel=0`}
              frameBorder="0"
            />
          </div>
          <button
            className={styles.slideChanger}
            onClick={() => dispatch({ type: "prev" })}
          >
            <StepBack color="#fff" />
          </button>
          <button
            className={styles.slideChanger}
            onClick={() => dispatch({ type: "next" })}
          >
            <StepForward color="#fff" />
          </button>
        </div>
      ) : (
        <div className={styles.recContainer}>
          <Loader />
        </div>
      )}
    </>
  );
}
