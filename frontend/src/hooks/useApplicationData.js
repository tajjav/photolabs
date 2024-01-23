import React, { useReducer } from "react";
import topics from "mocks/topics";
import photos from "mocks/photos";


function useApplicationData () {
  // const [photoId, setPhotoId] = useState(0);
  // const [photoDetails, setPhotoDetails] = useState();
  // const [favList, setFavList] = useState([]);

  
  
  const initialState = {
    photoId: 0,
    photoDetails: {},
    favList: [],
    PhotoLiked: false
  }
  
  function reducer(state, action) {
    switch (action.type) {
      case 'FAV_PHOTO_ADDED':
        return {
          ...state,
          favList: [...state.favList,action.payload],
          PhotoLiked: true
        };
      case 'FAV_PHOTO_REMOVED':
        return {
          ...state,
          favList: [...state.favList].filter(phId => phId !== action.payload),
          PhotoLiked: false
        };
      case 'SET_PHOTO_DETAILS':
        return {
          ...state,
          photoDetails: action.payload
        };
      default:
        return {
          ...state
        };
    }

  }
  const [state,dispatch] = useReducer(reducer,initialState);
 
  // helper functions
  const handleFavButton = (photoId) => {
    
    if(!state.favList.includes(photoId)) {
      dispatch({type: 'FAV_PHOTO_ADDED', payload: photoId})
      // setFavList(prev=>[...prev,photoId])
    } else {
      dispatch({type: 'FAV_PHOTO_REMOVED', payload: photoId})
      // setFavList(prev=>prev.filter(phId => phId !== photoId))
    }

  }

  const setPhotoDetails = (newDetails) => {
    console.log('newDetails: ',newDetails);
    dispatch({type: 'SET_PHOTO_DETAILS', payload: newDetails});
  }

  const isPhotoLiked = (photoId) => {
    if(state.favList.includes(photoId)) {
      return true;
    }
  }


  return {
    topics,
    photos,
    photoDetails: state.photoDetails,
    setPhotoDetails,
    favList: state.favList,
    handleFavButton,
    isPhotoLiked
  }
}

export default useApplicationData;