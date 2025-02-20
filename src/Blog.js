import React from "react";
import "./Blog.css";
import { Link } from "react-router-dom";

function BlogContainer() {
  return (
      <div className="row">
        <div className="col col-md-12">
          <h3 className="post-header">
            August 11th, 2024 | Inspiration through observation{" "}
          </h3>
          <p className="post-preview my-5">
            The unmotivated only work when they're inspired. The determined push
            themselves even when motivation is low. But the exceptional? They
            find a way to stay inspired, no matter what. To stay inspired one
            must cultivate a passion for life itself. Continually observe the
            things around you and question how they came to be. Anything can be
            used as a source of inspiration. Just look around. Become excited
            about life’s infinite beauty.
          </p>
        <Link className="bg-orange text-white py-2 px-2 rounded-lg">Read more</Link>
        </div>
        <div className="col col-md-12">One of three columns</div>
        <div className="col col-md-12 ">One of three columns</div>
      </div>
  );
}

export default BlogContainer;
