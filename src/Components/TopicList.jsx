import { useState, useEffect } from "react";
import { getTopics } from "../utls/api";
import TopicCard from "./TopicCard";

const TopicList = () => {
  const [currentTopics, setCurrentTopics] = useState([]);

  useEffect(() => {
    getTopics().then((topics) => {
      setCurrentTopics(topics);
    });
  }, []);

  return (
    <div>
      <ul className="list-unstyled">
        {currentTopics.map((currentTopic) => {
          return <TopicCard key={currentTopic.slug} topic={currentTopic} />;
        })}
      </ul>
    </div>
  );
};

export default TopicList;
