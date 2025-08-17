import React, { useMemo } from "react";

// React.memo prevents unnecessary re-renders if props don't change
const Post = React.memo(({ post, toggleVerify }) => {
  // useMemo for stable background color
  const backgroundColor = useMemo(
    () =>
      `hsl(${Math.floor(Math.random() * 360)}, 70%, 80%)`,
    [] // only once per mount
  );

  return (
    <div
      style={{
        background: backgroundColor,
        margin: "10px 0",
        padding: "10px",
        borderRadius: "8px",
      }}
    >
      <h3>
        {post.id}: {post.title}
      </h3>
      <p>{post.body}</p>
      <button onClick={() => toggleVerify(post.id)}>
        {post.verifyPost ? "Verified ✅" : "Verify"}
      </button>
    </div>
  );
});

export default Post;
