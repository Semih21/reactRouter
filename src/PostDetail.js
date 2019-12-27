import React, { useState, useEffect } from "react";

function PostDetail({ match }) {
  const [post, setPost] = useState({});
  console.log(match);
  useEffect(() => {
    fetchPost();
  }, []);

  const fetchPost = async () => {
    const data = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${match.params.id}`
    );
    const post = await data.json();
    console.log(post);
    setPost(post);
  };

  return (
    <div>
      <h1>{post.title}</h1>
      <h3>{post.body}</h3>
    </div>
  );
}

export default PostDetail;
