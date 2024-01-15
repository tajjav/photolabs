import React, { useState } from "react";
import "./App.scss";

import HomeRoute from "routes/HomeRoute";
import PhotoDetailsModal from "routes/PhotoDetailsModal";
import topics from "mocks/topics";
import photos from "mocks/photos";
import useApplicationData from "hooks/useApplicationData";

// Note: Rendering a single component to build components in isolation
const App = () => {
  const {topics,photos,photoDetails,setPhotoDetails,favList,handleFavButton,isPhotoLiked} = useApplicationData(); 

  return (
    <div className="App">
      <HomeRoute
        topics={topics}
        photos={photos}
        setPhotoDetails={setPhotoDetails}
        favList={favList}
        handleFavButton={handleFavButton}
        isPhotoLiked={isPhotoLiked}
      />
      {photoDetails.id !== "0" && (
        <PhotoDetailsModal
          photoDetails={photoDetails}
          setPhotoDetails={setPhotoDetails}
          photos={photos}
          handleFavButton={handleFavButton}
          isPhotoLiked={isPhotoLiked}
        />
      )}
    </div>
  );
};

export default App;
