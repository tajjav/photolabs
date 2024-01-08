import React from "react";
import "../styles/PhotoListItem.scss";




const PhotoListItem = (props) => {
  
  return (
    <div className="photo-list__item" >
      <img className="photo-list__image" src={props.imageSource} />
      <div className="photo-list__user-details" >
        <img className="photo-list__user-profile " src={props.profile} />
        <div className="photo-list__user-info">
          <h3   >{props.username} </h3>
        </div>
        <div className="photo-list__user-info photo-list__user-location">
          <h3   >{props.city}, {props.country}</h3>
        </div>
      </div>
    </div>
  );
};

export default PhotoListItem;
