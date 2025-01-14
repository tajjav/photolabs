import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";
/**
 * PhotoList component, render photos on the home page and similar photos on photo details modal.
 * @param {Object} props props are coming from HomeRoute.jsx and PhotoDetailsModal.jsx  
 * @returns JSX include PhotoListItem
 */
const PhotoList = (props) => {
  const { photosForTopicIdClicked, photoData } = props;

  const parsedPhotos = (
    photosForTopicIdClicked?.length > 0 ? photosForTopicIdClicked : photoData
  ).map((item, index) => {
    return (
      <PhotoListItem
        key={item.id}
        item={item}
        handleFavButton={props.handleFavButton}
        isPhotoLiked={props.isPhotoLiked}
        setPhotoDetails={props.setPhotoDetails}
      />
    );
  });

  return <ul className="photo-list">{parsedPhotos}</ul>;
};

export default PhotoList;
