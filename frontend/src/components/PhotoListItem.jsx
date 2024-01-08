import React from "react";
import "../styles/PhotoListItem.scss";




const PhotoListItem = (props) => {
  
  return (
    <div className="photo-list__item" >
      <img className="photo-list__image" src={props.imageSource} />
      <div className="photo-list__user-details" >
        <img className="photo-list__user-profile " src={props.profile} />
        <div className="photo-list__user-info">
          {props.username}
          <div className="photo-list__user-location">
            {props.city}, {props.country}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoListItem;
