import React, { useState } from "react";

import FavIcon from "./FavIcon";
import "../styles/PhotoFavButton.scss";

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
