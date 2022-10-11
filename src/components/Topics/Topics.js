import React from "react";
import "./Topics.css";
import { useLoaderData } from "react-router-dom";
import Topic from "../Topic/Topic";

const Topics = () => {
  const topics = useLoaderData();
  console.log(topics);
  return (
    <div className="topics-container">
      {topics.data.map((topic) => (
        <Topic key={topic.id} topic={topic}></Topic>
      ))}
    </div>
  );
};

export default Topics;
