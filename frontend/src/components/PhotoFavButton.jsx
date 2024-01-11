import React, { useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton(props) {
  const {likedPhoto,handleFavButton} = props;
  // const [heartToggle, setHeartToggle] = useState(false);
  
  // const handleClick = () => {
  //   if(heartToggle === false) {
  //     setHeartToggle(true);
      
  //   }
  //   if(heartToggle === true) {
  //     setHeartToggle(false);

  //   }  
  // }
  return (
    <div className="photo-list__fav-icon" onClick={handleFavButton}>
      <div className="photo-list__fav-icon-svg">
        {/* insert React */}
        {likedPhoto
          ?<FavIcon selected={true} />
          :<FavIcon selected={false} />
        }
      </div>
    </div>
  );
}

export default PhotoFavButton;