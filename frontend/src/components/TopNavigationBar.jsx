import React from "react";

import "../styles/TopNavigationBar.scss";
import TopicList from "./TopicList";
import FavBadge from "./FavBadge";

/**
 * TopNavigation component
 * @param {Object} props props coming from HomeRoute.jsx
 * @returns JSX include TopicList and FavBadge
 */
const TopNavigation = (props) => {
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList
        topics={props.topics}
        setTopicIdClicked={props.setTopicIdClicked}
      />
      <FavBadge isFavPhotoExist={props.favList.length > 0} />
    </div>
  );
};

export default TopNavigation;
