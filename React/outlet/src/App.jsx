import React from "react";
import Layout from "./components/Layout";
import Home from "./screens/Home";
import About from "./screens/About";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Users from "./screens/Users";
import Settings from "./screens/Settings";
import Layout2 from "./components/Layout2";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
