import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Shop() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fethcItems();
  }, []);
  const fethcItems = async () => {
    const data = await fetch("https://jsonplaceholder.typicode.com/posts");
    const newPosts = await data.json();
    console.log(newPosts);
    setPosts(newPosts);
  };
  return (
    <div>
      <h1>Shop Page</h1>
      {posts.map(post => {
        return (
          <Link key={post.id} to={`/shop/${post.id}`}>
            <li>{post.title}</li>
          </Link>
        );
      })}
    </div>
  );
}

export default Shop;
