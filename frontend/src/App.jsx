import React, { useState } from "react";
import "./App.scss";

import HomeRoute from "routes/HomeRoute";
import PhotoDetailsModal from "routes/PhotoDetailsModal";
import topics from "mocks/topics";
import photos from "mocks/photos";
import useApplicationData from "hooks/useApplicationData";

// Note: Rendering a single component to build components in isolation
const App = () => {
  const {topics,photoDetails,setPhotoDetails,favList,handleFavButton,isPhotoLiked, photoData} = useApplicationData(); 

  return (
    <div className="App">
      <HomeRoute
        topics={topics}
       
        photoData={photoData}
        setPhotoDetails={setPhotoDetails}
        favList={favList}
        handleFavButton={handleFavButton}
        isPhotoLiked={isPhotoLiked}
      />
      {photoDetails && photoDetails.urls && (
        <PhotoDetailsModal
          photoDetails={photoDetails}
          setPhotoDetails={setPhotoDetails}
          photoData={photoData}
          handleFavButton={handleFavButton}
          isPhotoLiked={isPhotoLiked}
        />
      )}
    </div>
  );
};

export default App;
