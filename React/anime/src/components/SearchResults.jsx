import React, { useContext, useEffect, useState, useRef } from "react";
import styles from "./SearchResults.module.css";
import axios from "axios";
import ResultListItem from "./ResultListItem";
import Loader from "./Loader";

export default function SearchResults() {
  const [filterResults, setFilterResults] = useState("");

  const [loading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const limit = 10;
  let lastPageFetched = useRef(0);

  async function getAnimes() {
    let animeName, animeId, animeType, animeSfw, animeRating, animeAiring;
    animeName = document.querySelector("#AnimeName").value[0];
    animeId = document.querySelector("#AnimeId").value;
    animeType = document.querySelector("#AnimeType").value;
    animeSfw = document.querySelector("#AnimeSfw").checked;
    animeRating = document.querySelector("#AnimeRating").value;
    animeAiring = document.querySelector("#AnimeStatus").value;

    const BASE_URL = "https://api.jikan.moe/v4/anime?";
    const PARAMS = `type=${animeType}&letter=${
      animeName || ""
    }&status=${animeAiring}&${
      animeSfw && "sfw"
    }&min_score=${animeRating}&limit=${limit}&page=${page}`;

    try {
      if (lastPageFetched === page) {
        return;
      }
      setIsLoading(true);
      lastPageFetched = page;
      const response = await axios.get(BASE_URL + PARAMS);
      setFilterResults((prev) => [...prev, ...response.data.data]);
    } catch (error) {
      console.log(error.message);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    setTimeout(() => {
      getAnimes();
    }, 2000);
  }, [page]);

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY + window.innerHeight >= document.body.offsetHeight) {
        setPage((prev) => prev + 1);
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={styles.resultsContainer}>
      <div className={`${styles.filters}`}>
        <h1>Filters</h1>

        <form
          className={styles.filterForm}
          onSubmit={(e) => {
            e.preventDefault();
            setFilterResults([]);
            getAnimes();
          }}
        >
          <input id="AnimeName" type="text" placeholder="Search By Name" />
          <input id="AnimeId" type="number" placeholder="search by MAL ID" />
          <select name="searchByType" id="AnimeType">
            <option value="tv">TV</option>
            <option value="movie">Movie</option>
            <option value="ova">OVA</option>
            <option value="special">Special</option>
            <option value="ona">ONA</option>
            <option value="music">Music</option>
            <option value="cm">CM</option>
            <option value="pv">PV</option>
            <option value="tv_special">TV Special</option>
          </select>
          <select name="searchByStatus" id="AnimeStatus">
            <option value="complete">Complete</option>
            <option value="airing">Airing</option>

            <option value="upcoming">Upcoming</option>

            <option value="tv_special">TV Special</option>
          </select>

          <input
            id="AnimeRating"
            type="number"
            placeholder="Filter By Rating"
          />
          <div
            style={{ height: "44.89px", display: "flex", alignItems: "center" }}
          >
            <label htmlFor="sfw">Filter SFW</label>
            <input
              style={{ width: "auto", marginLeft: "10px", padding: "10px" }}
              type="checkbox"
              name="sfw"
              id="AnimeSfw"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-600 text-white w-2xl rounded-md"
          >
            Filter
          </button>
        </form>
      </div>

      <div className={styles.results}>
        <ul className={styles.resultsList}>
          {filterResults &&
            filterResults.map((anime) => (
              <ResultListItem key={anime.mal_id} anime={anime} />
            ))}
        </ul>
      </div>
      {loading && <Loader />}
    </div>
  );
}
