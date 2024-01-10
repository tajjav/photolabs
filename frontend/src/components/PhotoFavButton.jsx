import React, { useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton() {
  const [heartToggle, setHeartToggle] = useState(false);
  
  const handleClick = () => {
    if(heartToggle === false) {
      setHeartToggle(true);
      
    }
    if(heartToggle === true) {
      setHeartToggle(false);

    }  
  }
  return (
    <div className="photo-list__fav-icon" onClick={handleClick}>
      <div className="photo-list__fav-icon-svg">
        {/* insert React */}
        {heartToggle === false && <FavIcon/>}
        {heartToggle === true && <FavIcon selected={true} />}
      </div>
    </div>
  );
}

export default PhotoFavButton;