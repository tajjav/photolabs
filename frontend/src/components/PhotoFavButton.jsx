import React, { useState } from "react";

import FavIcon from "./FavIcon";
import "../styles/PhotoFavButton.scss";
/**
 * PhotoFavButton component, toggle selected and unselected state of FavIcon
 * @param {Object} props are coming from PhotoListItem.jsx
 * @returns JSX include FavIcon
 */
function PhotoFavButton(props) {
  const { isPhotoLiked, handleFavButton } = props;

  return (
    <div className="photo-list__fav-icon" onClick={handleFavButton}>
      <div className="photo-list__fav-icon-svg">
        {isPhotoLiked ? (
          <FavIcon selected={true} />
        ) : (
          <FavIcon selected={false} />
        )}
      </div>
    </div>
  );
}

export default PhotoFavButton;
