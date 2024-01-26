import React, { useState } from "react";
import "../styles/HomeRoute.scss";

import TopNavigation from "components/TopNavigationBar";
import PhotoList from "components/PhotoList";

const HomeRoute = (props) => {
  return (
    <div className="home-route">
      <TopNavigation
        topics={props.topics}
        setTopicIdClicked={props.setTopicIdClicked}
        favList={props.favList}
      />
      <PhotoList
        photosForTopicIdClicked={props.photosForTopicIdClicked}
        photoData={props.photoData}
        handleFavButton={props.handleFavButton}
        isPhotoLiked={props.isPhotoLiked}
        setPhotoDetails={props.setPhotoDetails}
      />
    </div>
  );
};

export default HomeRoute;
