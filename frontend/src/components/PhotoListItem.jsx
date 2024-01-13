import React from "react";
import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";




const PhotoListItem = (props) => {
  
  const handleSidePeekModal = (itemId) => {
    props.setPhotoDetails({
      "id": itemId,
      "location": {
        "city": props.item.location.city,
        "country": props.item.location.country
      },
      "urls": {
        "full": props.item.urls.full,
        "regular": props.item.urls.regular
      },
      "user": {
        "id": props.item.user.id,
        "username": props.item.user.username,
        "name": props.item.user.name,
        "profile": props.item.user.profile
      }
    })
  }
  return (
    <div className="photo-list__item" >
      <PhotoFavButton
        handleFavButton={()=> props.handleFavButton(props.item.id)}
        isPhotoLiked={props.isPhotoLiked(props.item.id)}
      />
      <img className="photo-list__image" src={props.item.urls.regular} onClick={()=>{handleSidePeekModal(props.item.id)}}/>
      <div className="photo-list__user-details" >
        <img className="photo-list__user-profile " src={props.item.user.profile} />
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
