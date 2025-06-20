import Header from "./components/Header.jsx";

import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./screens/Home.jsx";
import Search from "./screens/Search.jsx";
import AnimeDetails from "./screens/AnimeDetails.jsx";
import WatchList from "./components/WatchList.jsx";
import { useRef } from "react";

function App() {
  return (
    <div className="appContainer">
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/animeDetails/:id" element={<AnimeDetails />} />
      </Routes>
    </div>
  );
}

export default App;
