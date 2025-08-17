import React, { useState, useEffect, useCallback } from "react";
import Post from "./Post";

function App() {
  const [timer, setTimer] = useState(0);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [posts, setPosts] = useState([]);

  // Timer increments every 1 second
  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // useCallback to prevent new function creation every render
  const addPost = useCallback(() => {
    if (!title || !body) return;
    const newPost = {
      id: Date.now(),
      title,
      body,
      verifyPost: false,
    };
    setPosts((prev) => [...prev, newPost]);
    setTitle("");
    setBody("");
  }, [title, body]);

  const toggleVerify = useCallback((id) => {
    setPosts((prev) =>
      prev.map((post) =>
        post.id === id ? { ...post, verifyPost: !post.verifyPost } : post
      )
    );
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>React Performance Optimization</h1>
      <h2>Timer: {timer}</h2>

      <input
        type="text"
        placeholder="Post Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Post Body"
        value={body}
        onChange={(e) => setBody(e.target.value)}
      />
      <button onClick={addPost}>Add Post</button>

      <div style={{ marginTop: "20px" }}>
        {posts.map((post) => (
          <Post key={post.id} post={post} toggleVerify={toggleVerify} />
        ))}
      </div>
    </div>
  );
}

export default App;
