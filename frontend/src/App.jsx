import React from 'react';

import PhotoListItem from './components/PhotoListItem';
import './App.scss';

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

const photos = new Array(3);
photos.forEach((element) => {
  element = {...sampleDataForPhotoListItem};
  // element[id] = {sampleDataForPhotoListItem.id.toString()};
  // element[city] = {sampleDataForPhotoListItem.location.city}
  // element[country] = {sampleDataForPhotoListItem.location.country}
  // element[]
})

console.log('photos: ', photos);

// Note: Rendering a single component to build components in isolation
const App = () => {
  return (
    <div className="App">
      <PhotoListItem 
        id={sampleDataForPhotoListItem.id}
        city={sampleDataForPhotoListItem.location.city}
        country={sampleDataForPhotoListItem.location.country}
        imageSource={sampleDataForPhotoListItem.imageSource}
        username={sampleDataForPhotoListItem.username}
        profile={sampleDataForPhotoListItem.profile}
      />
        <PhotoListItem 
        id={sampleDataForPhotoListItem.id}
        city={sampleDataForPhotoListItem.location.city}
        country={sampleDataForPhotoListItem.location.country}
        imageSource={sampleDataForPhotoListItem.imageSource}
        username={sampleDataForPhotoListItem.username}
        profile={sampleDataForPhotoListItem.profile}
      />
        <PhotoListItem 
        id={sampleDataForPhotoListItem.id}
        city={sampleDataForPhotoListItem.location.city}
        country={sampleDataForPhotoListItem.location.country}
        imageSource={sampleDataForPhotoListItem.imageSource}
        username={sampleDataForPhotoListItem.username}
        profile={sampleDataForPhotoListItem.profile}
      />
    </div>
  );
};

export default App;
