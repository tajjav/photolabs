import React from "react";
import FavIcon from "./FavIcon";

import "../styles/FavBadge.scss";
/**
 * FavBadge component, render Favourite Icon
 * @param {Object} param0 props are coming from PhotoFavButton.jsx  
 * @returns JSX include FavIcon
 */
const FavBadge = ({ isFavPhotoExist }) => {
  return (
    <div className="fav-badge">
      <FavIcon displayAlert={isFavPhotoExist} selected={isFavPhotoExist} />
    </div>
  );
};

export default FavBadge;
