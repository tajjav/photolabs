import React from "react";
import "./App.scss";

import HomeRoute from "routes/HomeRoute";
import PhotoDetailsModal from "routes/PhotoDetailsModal";
import useApplicationData from "hooks/useApplicationData";

const App = () => {
  const {
    topics,
    photoDetails,
    setPhotoDetails,
    favList,
    handleFavButton,
    isPhotoLiked,
    photoData,
    setTopicIdClicked,
    photosForTopicIdClicked,
  } = useApplicationData();

  return (
    <div className="App">
      <HomeRoute
        topics={topics}
        setTopicIdClicked={setTopicIdClicked}
        photoData={photoData}
        setPhotoDetails={setPhotoDetails}
        favList={favList}
        handleFavButton={handleFavButton}
        isPhotoLiked={isPhotoLiked}
        photosForTopicIdClicked={photosForTopicIdClicked}
      />
      {photoDetails && photoDetails.urls && (
        <PhotoDetailsModal
          photoDetails={photoDetails}
          setPhotoDetails={setPhotoDetails}
          handleFavButton={handleFavButton}
          isPhotoLiked={isPhotoLiked}
        />
      )}
    </div>
  );
};

export default App;
