import axios, { Axios } from "axios";
import React, { useEffect, useReducer } from "react";





function useApplicationData () {

  useEffect(() => {
    axios.get('/api/photos')
      .then((res) => {
        // console.log('res.data: ',res.data);
        dispatch({type: 'SET_PHOTO_DATA', payload: res.data})
      })
  }, []);

  useEffect(() => {
    axios.get('/api/topics')
      .then((res) => {
        console.log('res.data: ',res.data);
        dispatch({type: 'SET_TOPICS_DATA', payload: res.data})
      })
  }, []);
  
  const initialState = {
    photoId: 0,
    photoDetails: {},
    favList: [],
    PhotoLiked: false,
    photoData: [],
    topicData: []
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
      case 'SET_PHOTO_DATA':
        return {
          ...state,
          photoData: action.payload
        };
        case 'SET_PHOTO_DETAILS':
        return {
          ...state,
          photoDetails: action.payload
        };
        case 'SET_TOPICS_DATA':
          return {
            ...state,
            topicData: action.payload
          };
      default:
        throw new Error(`Unsupported action type: ${action.type}`);
    }

  }
  const [state,dispatch] = useReducer(reducer,initialState);
 
  // helper functions
  const handleFavButton = (photoId) => {
    
    if(!state.favList.includes(photoId)) {
      dispatch({type: 'FAV_PHOTO_ADDED', payload: photoId})
  
    } else {
      dispatch({type: 'FAV_PHOTO_REMOVED', payload: photoId})

    }

  }

  const setPhotoDetails = (newDetails) => {
    dispatch({type: 'SET_PHOTO_DETAILS', payload: newDetails});
  }

  const isPhotoLiked = (photoId) => {
    if(state.favList.includes(photoId)) {
      return true;
    }
  }


  return {
    topics: state.topicData,
    photoDetails: state.photoDetails,
    setPhotoDetails,
    favList: state.favList,
    handleFavButton,
    isPhotoLiked,
    photoData: state.photoData
  }
}

export default useApplicationData;