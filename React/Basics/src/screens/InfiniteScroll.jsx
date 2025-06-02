import React, { useState, useEffect, useRef } from "react";
import axios from "axios";

const InfiniteScrollPosts = () => {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const limit = 10;
  const [isLoading, setIsLoading] = useState(false);
  const lastPageFetched = useRef(0);

  async function fetchPosts() {
    if (lastPageFetched.current == page) {
      return;
    }
    try {
      setIsLoading(true);
      lastPageFetched.current = page;
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=${limit}`
      );

      const data = response.data;

      setPosts((prev) => [...prev, ...data]);
    } catch (error) {
      console.log(error.message);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    setTimeout(() => {
      fetchPosts();
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
    <div>
      <h2>Posts</h2>

      {posts.map((post) => (
        <div
          key={post.id}
          style={{ padding: 10, borderBottom: "1px solid #ccc" }}
        >
          <h1>{post.id}</h1>
          <h4>{post.title}</h4>
          <p>{post.body}</p>
        </div>
      ))}
      {isLoading ? (
        <h1 style={{ textAlign: "center" }}>"Loading......"</h1>
      ) : (
        ""
      )}
    </div>
  );
};

export default InfiniteScrollPosts;
