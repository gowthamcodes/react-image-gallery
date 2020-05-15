import React from "react";
import Features from "./Features";

function ImageCard({ image }) {
  const tags = image.tags.split(",");
  return (
    <div className="card shadow rounded" style={{ width: "18rem" }}>
      <img src={image.webformatURL} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-text font-weight-bold">Photo by {image.user}</h5>
        <Features
          views={image.views}
          downloads={image.downloads}
          likes={image.likes}
        />
        {tags.map((tag, index) => (
          <span key={index} className="badge badge-pill">
            #{tag}
          </span>
        ))}
      </div>
    </div>
  );
}

export default ImageCard;
