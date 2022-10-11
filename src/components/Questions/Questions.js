import React from "react";
import "./Questions.css";
import { EyeIcon } from "@heroicons/react/24/solid";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Questions = ({ question, _idx }) => {
  const correct = () => toast.success("Your Answer is Correct");
  const wrong = () => toast.error("Your Answer is Wrong");
  //   const { questions } = question;
  const { options, correctAnswer } = question;
  const answer = () => toast.info(`Your answer is: ${correctAnswer}`);
  const getAnswer = (data) => {
    if (data === correctAnswer) {
      correct();
    } else {
      wrong();
    }
  };
  const showAnswer = () => {
    answer();
  };
  return (
    <div className="question">
      <div>
        <h5>
          Quiz {_idx + 1} : {question.length}
        </h5>
        <EyeIcon onClick={showAnswer} className="eye" />
      </div>
      <h4>{question.question}</h4>

      <div className="option">
        {options.map((option, _idx) => (
          <label key={_idx}>
            <input
              type="radio"
              name="q"
              onClick={() => getAnswer(option)}
              id={_idx}
            />
            {option}
          </label>
        ))}
      </div>
      <ToastContainer />
    </div>
  );
};

export default Questions;
