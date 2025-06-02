import React from "react";
import { useState } from "react";
import { createContext } from "react";

export const AnimeContext = createContext();

export default function AnimeProvider({ children }) {
  const [search, setSearch] = useState("");
  const [watchCount, setWatchCount] = useState(0);
  // const [watchListOpen, setWatchListOpen] = useState(false);
  const [watchList, setWatchList] = useState([]);

  function addToWatchList(anime) {
    console.log("addTo WatchList function called");
    setWatchList((prev) => [...prev, anime]);
    console.log(anime);
    console.log(watchList);
    setWatchCount(watchList.length + 1);
  }

  function removeFromWatchList(animeId) {
    const newWatchList = watchList.filter((item) => item.mal_id != animeId);
    setWatchList(newWatchList);
    setWatchCount(watchList.length - 1);
  }

  function itemInWatchList(animeId) {
    watchList.forEach((item) => {
      if (item.anime.mal_id == animeId) {
        return true;
      }
      return false;
    });
  }

  return (
    <AnimeContext.Provider
      value={{
        search,
        setSearch,
        watchCount,
        watchList,
        setWatchList,
        addToWatchList,
        removeFromWatchList,
        itemInWatchList,
      }}
    >
      {children}
    </AnimeContext.Provider>
  );
}
