import React from "react";

function Feature({ views, downloads, likes }) {
  return (
    <div className="feature">
      <ul>
        <li>
          <strong>Views: </strong>
          {views}
        </li>
        <li>
          <strong>Downloads: </strong>
          {downloads}
        </li>
        <li>
          <strong>Likes: </strong>
          {likes}
        </li>
      </ul>
    </div>
  );
}

export default Feature;
