import React, { useState } from 'react';
import './App.scss';

import HomeRoute from 'routes/HomeRoute';
import topics from 'mocks/topics';
import photos from 'mocks/photos';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';





// Note: Rendering a single component to build components in isolation
const App = () => {

  const [photoId, setPhotoId] = useState(0);
  
 
  return (
    <div className="App">
      <HomeRoute topics={topics} photos={photos} setPhotoId={setPhotoId}/>
      {photoId && <PhotoDetailsModal/>}
     
    </div>
  );
};

export default App;
