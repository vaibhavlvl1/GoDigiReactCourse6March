import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import Home from "./screens/home";
import Blog from "./screens/Blog";
import About from "./screens/About";
import Settings from "./screens/Settings";
import Navbar from "./components/Navbar";
import Users from "./screens/Users";
import SingleUsers from "./screens/SingleUsers";

import PageNotFound from "./screens/PageNotFound";
export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/about" element={<About />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/users" element={<Users />} />

        <Route path="/users/:id" element={<SingleUsers />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}
