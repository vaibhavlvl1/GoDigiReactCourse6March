import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import styles from "./AnimeDetails.module.css";

export default function AnimeDetails() {
  const { id } = useParams();
  const [isLoading, setLoading] = useState(false);
  const [anime, setAnime] = useState();

  async function getAnime(id) {
    try {
      setLoading(true);
      const response = await axios.get(`https://api.jikan.moe/v4/anime/${id}`);
      console.log(response.data.data);
      setAnime(response.data.data);
    } catch (error) {
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    setTimeout(() => {
      getAnime(id);
    }, 2000);
  }, []);

  return (
    anime && (
      <div className="detailsContainer">
        <div className={styles.imageContainer}>
          <img src={anime.images.webp.large_image_url} alt="" />
          <div className="detailsContainer">
            <h1>This is for {anime.title}</h1>
            <div className="stats">
              <span>Score: {anime.score}</span>
              <span></span>
              <span>Status : {anime.status}</span>
              <span>Year : {anime.year}</span>
              <span>Season : {anime.season}</span>
              <span>Episodes : {anime.episodes}</span>
              <span>Duration : {anime.duration}</span>
              <span>Demographics : {anime.demographics[0].name}</span>
              <span>Rating : {anime.rating}</span>
              <span>
                Genres :{" "}
                {anime.genres.map((genre) => (
                  <p key={genre.url} style={{ display: "inline" }}>
                    {genre.name}
                  </p>
                ))}
              </span>
              <span>Rank : {anime.rank}</span>
              <span>Liked By : {anime.favorites}</span>
            </div>
            <div className={styles.synopsis}>{anime.synopsis}</div>
            <button>Visit Mal</button>
          </div>  
        </div>
      </div>
    )
  );
}
