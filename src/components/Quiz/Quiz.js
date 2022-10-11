import React from "react";

const Quiz = ({ quiz }) => {
  const { question, options } = quiz;
  console.log(quiz);
  return (
    <div>
      <h4>Quiz:{question}</h4>

      <ul>
        {" "}
        <input type="checkbox" /> {options}
      </ul>
    </div>
  );
};

export default Quiz;
