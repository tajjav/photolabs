import React from "react";
import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";




const PhotoListItem = (props) => {
  
  const handleSidePeekModal = (itemId) => {
    console.log('itemId: ',itemId);
    props.setPhotoId(itemId);
  }
  return (
    <div className="photo-list__item" >
      <PhotoFavButton
        handleFavButton={()=> props.handleFavButton(props.item.id)}
        isPhotoLiked={props.isPhotoLiked(props.item.id)}
      />
      <img className="photo-list__image" src={props.item.urls.regular} />
      <div className="photo-list__user-details" >
        <img className="photo-list__user-profile " src={props.item.user.profile} />
        <div className="photo-list__user-info">
          {props.item.user.username}
          <div className="photo-list__user-location">
            {props.item.location.city}, {props.item.location.country}
            <button  onClick={()=>{handleSidePeekModal(props.item.id)}}>Click</button>
          </div>
        </div>
      </div>
    </div>
  );
};


export default PhotoListItem;
