import React, { useState } from 'react';
import './App.scss';

import HomeRoute from 'routes/HomeRoute';
import topics from 'mocks/topics';
import photos from 'mocks/photos';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';





// Note: Rendering a single component to build components in isolation
const App = () => {

  const [photoId, setPhotoId] = useState(0);
  const [photoDetails, setPhotoDetails] = useState({
                                                      "id": "10",
                                                      "location": {
                                                        "city": "Edmonton",
                                                        "country": "Canada"
                                                      },
                                                      "urls": {
                                                        "full": `${process.env.PUBLIC_URL}/Image-10-Full.jpg`,
                                                        "regular": `${process.env.PUBLIC_URL}/Image-10-Regular.jpg`
                                                      },
                                                      "user": {
                                                        "id": "10",
                                                        "username": "exampleuser",
                                                        "name": "Joe Example",
                                                        "profile": `${process.env.PUBLIC_URL}/profile-1.jpg`
                                                      }
                                                    });
  
 
  return (
    <div className="App">
      <HomeRoute
        topics={topics}
        photos={photos}
        setPhotoDetails={setPhotoDetails}
      />
      {photoDetails.id !== "0" && <PhotoDetailsModal
                                    photoDetails={photoDetails}
                                    setPhotoDetails={setPhotoDetails}  
                                  />}
     
    </div>
  );
};

export default App;
