import React from 'react';

import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';

const sampleDataForPhotoListItem = {
  id: "1",
  location: {
    city: "Montreal",
    country: "Canada",
  },
  imageSource: `${process.env.PUBLIC_URL}/Image-1-Regular.jpeg`,
  username: "Joe Example",
  profile: `${process.env.PUBLIC_URL}/profile-1.jpg`,
};
const PhotoDetailsModal = ({setPhotoId}) => {

  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button" onClick={() => setPhotoId(0)}>
        <img src={closeSymbol} alt="close symbol"  />
      </button>
      <div className='photo-details-modal__images'>

        <div className='photo-details-modal__top-bar'>
          <div className='photo-details-modal__header'>
            {sampleDataForPhotoListItem.id}. {sampleDataForPhotoListItem.username}
          </div>
        </div>
        <img src={sampleDataForPhotoListItem.imageSource} alt='photo' className='photo-details-modal__image' />
        <div className="photo-details-modal__photographer-details" >
          <img className="photo-details-modal__photographer-profile " src={sampleDataForPhotoListItem.profile} />
          <div className="photo-details-modal__photographer-info">
            {sampleDataForPhotoListItem.username}
            <div className="photo-details-modal__photographer-location">
              {sampleDataForPhotoListItem.location.city}, {sampleDataForPhotoListItem.location.country}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default PhotoDetailsModal;
