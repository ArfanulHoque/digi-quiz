import React from "react";
import "./Topic.css";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

const Topic = ({ topic }) => {
  const { name, logo, total } = topic;
  return (
    <div className="topic-cart">
      <div className="topic-container">
        <div>
          <img src={logo} alt="" />
          <h1>{name}</h1>
          <p>
            <strong>Total Quiz: {total}</strong>
          </p>
        </div>
        <Link to={`/quiz/${topic.id}`}>
          <button className="start-quiz-btn">
            Start Quiz <ArrowRightIcon className="arrow" />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Topic;
