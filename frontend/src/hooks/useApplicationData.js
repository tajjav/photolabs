import React, { useState } from "react";
import topics from "mocks/topics";
import photos from "mocks/photos";


function useApplicationData () {
  const [photoId, setPhotoId] = useState(0);
  const [photoDetails, setPhotoDetails] = useState();

  const [favList, setFavList] = useState([]);
  
  const handleFavButton = (photoId) => {
    if(!favList.includes(photoId)) {
      setFavList(prev=>[...prev,photoId])
    } else {
      setFavList(prev=>prev.filter(phId => phId !== photoId))
    }
  }

  const isPhotoLiked = (photoId) => {
    if(favList.includes(photoId)) {
      return true;
    }
  }

  return {
    topics,
    photos,
    photoDetails,
    setPhotoDetails,
    favList,
    handleFavButton,
    isPhotoLiked
  }
}

export default useApplicationData;