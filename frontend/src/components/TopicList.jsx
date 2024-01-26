import React from "react";

import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";

const TopicList = (props) => {
  const parsedTopicList = props.topics.map((item, index) => {
    return (
      <TopicListItem
        key={item.id}
        item={item}
        setTopicIdClicked={props.setTopicIdClicked}
      />
    );
  });
  return <div className="top-nav-bar__topic-list">{parsedTopicList}</div>;
};

export default TopicList;
