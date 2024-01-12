import React, {useState} from 'react';

import '../styles/HomeRoute.scss';
import TopNavigation from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';

const HomeRoute = (props) => {
  
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

  return (
    <div className="home-route">
      {/* Insert React */}
      <TopNavigation
        topics={props.topics}
        favList={favList}
      />
      <PhotoList
        photos={props.photos}
        handleFavButton={handleFavButton}
        isPhotoLiked={isPhotoLiked}
        setPhotoId={props.setPhotoId}
      />
    </div>
  );
};

export default HomeRoute;
