import React from 'react';

import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoList from 'components/PhotoList';
import PhotoFavButton from 'components/PhotoFavButton';
// const sampleDataForPhotoListItem = {
//   id: "1",
//   location: {
//     city: "Montreal",
//     country: "Canada",
//   },
//   imageSource: `${process.env.PUBLIC_URL}/Image-1-Regular.jpeg`,
//   username: "Joe Example",
//   profile: `${process.env.PUBLIC_URL}/profile-1.jpg`,
// };
// const photo10 = {
//   "id": "10",
//   "location": {
//     "city": "Edmonton",
//     "country": "Canada"
//   },
//   "urls": {
//     "full": `${process.env.PUBLIC_URL}/Image-10-Full.jpg`,
//     "regular": `${process.env.PUBLIC_URL}/Image-10-Regular.jpg`
//   },
//   "user": {
//     "id": "10",
//     "username": "exampleuser",
//     "name": "Joe Example",
//     "profile": `${process.env.PUBLIC_URL}/profile-1.jpg`
//   }
// }

const PhotoDetailsModal = (props) => {
 let {photoDetails,setPhotoDetails} = props;


  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button" onClick={() => setPhotoDetails({})}>
        <img src={closeSymbol} alt="close symbol"  />
      </button>
        <div className='photo-details-modal__top-bar'>
        </div>
      <div className='photo-details-modal__images'>
        <PhotoFavButton
          handleFavButton={()=> props.handleFavButton(props.photoDetails.id)}
          isPhotoLiked={props.isPhotoLiked(props.photoDetails.id)}
        />
        <img src={photoDetails.urls.full} alt='photo' className='photo-details-modal__image' />
        <div className="photo-details-modal__photographer-details" >
          <img className="photo-details-modal__photographer-profile " src={photoDetails.user.profile} />
          <div className="photo-details-modal__photographer-info">
            {photoDetails.user.username}
            <div className="photo-details-modal__photographer-location">
              {photoDetails.location.city}, {photoDetails.location.country}
            </div>
          </div>
        </div>
        <div className='photo-details-modal__header'>Similar Photos</div>
        {props.photoDetails.similar_photos && (
          <PhotoList
            photos={Object.values(props.photoDetails.similar_photos)}
            handleFavButton={props.handleFavButton}
            isPhotoLiked={props.isPhotoLiked}
            setPhotoDetails={props.setPhotoDetails}
          />
        )}
        
      </div>
    </div>
  )
};

export default PhotoDetailsModal;
