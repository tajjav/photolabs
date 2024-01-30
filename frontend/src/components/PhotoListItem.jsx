import React from "react";
import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";
/**
 * PhotoListItem component, render each picture card or tile.
 * @param {Object} props props are coming from PhotoList.jsx
 * @returns JSX include PhotoFavButton
 */
const PhotoListItem = (props) => {
  const handleSidePeekModal = () => {
    props.setPhotoDetails({ ...props.item });
  };
  return (
    <div className="photo-list__item">
      <PhotoFavButton
        handleFavButton={() => props.handleFavButton(props.item.id)}
        isPhotoLiked={props.isPhotoLiked(props.item.id)}
      />
      <img
        className="photo-list__image"
        src={props.item.urls.regular}
        onClick={handleSidePeekModal}
      />
      <div className="photo-list__user-details">
        <img
          className="photo-list__user-profile "
          src={props.item.user.profile}
        />
        <div className="photo-list__user-info">
          {props.item.user.username}
          <div className="photo-list__user-location">
            {props.item.location.city}, {props.item.location.country}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoListItem;
