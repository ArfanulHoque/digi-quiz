import React from "react";
import "./Topic.css";

const Topic = ({ topic }) => {
  const { name, logo, total } = topic;
  return (
    <div className="topic-container">
      <div>
        <img src={logo} alt="" />
        <h1>{name}</h1>
        <p>
          <strong>Total Quiz: {total}</strong>
        </p>
      </div>
      <button className="start-quiz-btn">Start Quiz</button>
    </div>
  );
};

export default Topic;
