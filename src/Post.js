import React from "react";
import "./Post.css";

const BlogPost = ({ title, content, date }) => {
  return (
    <div className="blog-post">
      <h2>{title}</h2>
      <p>{date}</p>
      <div>{content}</div>
    </div>
  );
};

export default BlogPost;
