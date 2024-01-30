import axios from "axios";
import { useEffect, useReducer } from "react";

/**
 * Reducer function definition, it returns modified state based on the action dispatched to it. Dispatched logic is either in the useEffect hook or in the wrapper functions.
 * @param {Object} state
 * @param {Object} action
 * @returns modified state object based on the action type
 */
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

/**
 * useApplicationData custom hook, handles API requests and modify state based on the business logic and actions dispatched to the useReducer hook.  
 * @returns Object, the simplest example is initialState.
    initialState = {
      photoId: 0,
      photoDetails: {},
      favList: [],
      PhotoLiked: false,
      photoData: [],
      topicData: [],
      topicIdClicked: 0,
      photosForTopicIdClicked: [],
    }
*/
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

/////////////////////////
//// wrapper functions //
/////////////////////////

/**
 * handleFavButton function definition, if selected picture photoId is not present in the favList array, it dispatch add photo action and vice versa.
 * @param {Number} photoId 
 */
  const handleFavButton = (photoId) => {
    if (!state.favList.includes(photoId)) {
      dispatch({ type: "FAV_PHOTO_ADDED", payload: photoId });
    } else {
      dispatch({ type: "FAV_PHOTO_REMOVED", payload: photoId });
    }
  };

  /**
   * setPhotoDetails function definition, it dispatch action to set photoDetails to the state.
   * @param {Object} newDetails 
   */
  const setPhotoDetails = (newDetails) => {
    dispatch({ type: "SET_PHOTO_DETAILS", payload: newDetails });
  };

  /**
   * isPhotoLiked function definition, it returns boolean true, for photoId present in the favList array.
   * @param {Number} photoId 
   * @returns Boolean
   */
  const isPhotoLiked = (photoId) => {
    if (state.favList.includes(photoId)) {
      return true;
    }
  };

  /**
   * setTopicIdClicked function definition, it dispatch the set topic id action to useReducer hook. 
   * @param {Number} topicIdFromClicked 
   */
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
