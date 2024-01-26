import axios from "axios";
import { useEffect, useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "FAV_PHOTO_ADDED":
      return {
        ...state,
        favList: [...state.favList, action.payload],
        PhotoLiked: true,
      };
    case "FAV_PHOTO_REMOVED":
      return {
        ...state,
        favList: [...state.favList].filter((phId) => phId !== action.payload),
        PhotoLiked: false,
      };
    case "SET_PHOTO_DATA":
      return {
        ...state,
        photoData: action.payload,
      };
    case "SET_PHOTO_DETAILS":
      return {
        ...state,
        photoDetails: action.payload,
      };
    case "SET_TOPICS_DATA":
      return {
        ...state,
        topicData: action.payload,
      };
    case "SET_CLICKED_TOPIC_ID":
      return {
        ...state,
        topicIdClicked: action.payload,
      };
    case "GET_PHOTOS_BY_TOPICS":
      return {
        ...state,
        photosForTopicIdClicked: action.payload,
      };
    default:
      throw new Error(`Unsupported action type: ${action.type}`);
  }
}

function useApplicationData() {
  const initialState = {
    photoId: 0,
    photoDetails: {},
    favList: [],
    PhotoLiked: false,
    photoData: [],
    topicData: [],
    topicIdClicked: 0,
    photosForTopicIdClicked: [],
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    axios
      .get("/api/photos")
      .then((res) => {
        dispatch({ type: "SET_PHOTO_DATA", payload: res.data });
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  useEffect(() => {
    axios
      .get("/api/topics")
      .then((res) => {
        dispatch({ type: "SET_TOPICS_DATA", payload: res.data });
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  useEffect(() => {
    axios
      .get(`/api/topics/photos/${state.topicIdClicked}`)
      .then((res) => {
        dispatch({ type: "GET_PHOTOS_BY_TOPICS", payload: res.data });
      })
      .catch((error) => {
        console.error(error);
      });
  }, [state.topicIdClicked]);

  // wrapper functions
  const handleFavButton = (photoId) => {
    if (!state.favList.includes(photoId)) {
      dispatch({ type: "FAV_PHOTO_ADDED", payload: photoId });
    } else {
      dispatch({ type: "FAV_PHOTO_REMOVED", payload: photoId });
    }
  };

  const setPhotoDetails = (newDetails) => {
    dispatch({ type: "SET_PHOTO_DETAILS", payload: newDetails });
  };

  const isPhotoLiked = (photoId) => {
    if (state.favList.includes(photoId)) {
      return true;
    }
  };

  const setTopicIdClicked = (topicIdFromClicked) => {
    dispatch({ type: "SET_CLICKED_TOPIC_ID", payload: topicIdFromClicked });
  };

  return {
    topics: state.topicData,
    photoDetails: state.photoDetails,
    setPhotoDetails,
    favList: state.favList,
    handleFavButton,
    isPhotoLiked,
    photoData: state.photoData,
    setTopicIdClicked,
    photosForTopicIdClicked: state.photosForTopicIdClicked,
  };
}

export default useApplicationData;
