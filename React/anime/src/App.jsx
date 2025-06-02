import Header from "./components/Header.jsx";

import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./screens/Home.jsx";
import Search from "./screens/Search.jsx";
import AnimeDetails from "./screens/AnimeDetails.jsx";
import WatchList from "./components/WatchList.jsx";
import { useRef } from "react";

function App() {
  const watchListRef = useRef();

  function handleHide() {
    watchListRef.current.classList.toggle("hide");
    // watchListRef.current.classList.toggle("unhide");
  }

  return (
    <>
      <Header handleHide={handleHide} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/search/:id" element={<AnimeDetails />} />
      </Routes>

      <WatchList handleHide={handleHide} watchListRef={watchListRef} />
    </>
  );
}

export default App;
