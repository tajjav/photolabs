import React from "react";
import "../styles/TopicListItem.scss";
/**
 * TopicListItem component, render each topic title
 * @param {Object} props props are coming from TopicList.jsx
 * @returns JSX
 */
const TopicListItem = (props) => {
  let { setTopicIdClicked } = props;

  const topicClickHandler = () => {
    setTopicIdClicked(props.item.id);
  };

  return (
    <div className="topic-list__item" onClick={topicClickHandler}>
      <span>{props.item.title}</span>
    </div>
  );
};

export default TopicListItem;
