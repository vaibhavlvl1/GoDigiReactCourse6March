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
import SignUp from "./screens/SignUp";

import { Provider } from "react-redux";
import store from "./redux/Store";
import InfiniteScrollPosts from "./screens/InfiniteScroll";
import ListUsers from "./screens/ListUsers";

export default function App() {
  return (
    <>
      <Navbar />
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/about" element={<About />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/users" element={<ListUsers />} />
          <Route path="/infinite" element={<InfiniteScrollPosts/>} />


          <Route path="/users/:id" element={<SingleUsers />} />
          <Route path="/createuser" element={<SignUp />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Provider>

      {/* <UseReducerHook /> */}
    </>
  );
}
