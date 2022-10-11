import React from "react";
import "./Questions.css";

const Questions = ({ question }) => {
  const { questions } = question;
  const { options, correctAnswer } = question;
  return (
    <div className="question">
      <h4>{question.question}</h4>
      <div className="option">
        {options.map((option, _idx) => (
          <label key={_idx}>
            <input type="radio" />
            {option}
          </label>
        ))}
      </div>
    </div>
  );
};

export default Questions;
