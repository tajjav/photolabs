import React from "react";
import "../styles/PhotoListItem.scss";




const PhotoListItem = (props) => {
  
  return (
    <div>
      <img src={props.imageSource} />
      <img src={props.profile} />
      <h2>{props.username}</h2>
      <h3>{props.city}, {props.country}</h3>
    </div>
  );
};

export default PhotoListItem;
