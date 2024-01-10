import React from "react";
import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";




const PhotoListItem = (props) => {
  
  return (
    <div className="photo-list__item" >
      <PhotoFavButton/>
      <img className="photo-list__image" src={props.urls.regular} />
      <div className="photo-list__user-details" >
        <img className="photo-list__user-profile " src={props.user.profile} />
        <div className="photo-list__user-info">
          {props.user.username}
          <div className="photo-list__user-location">
            {props.location.city}, {props.location.country}
          </div>
        </div>
      </div>
    </div>
  );
};


export default PhotoListItem;
