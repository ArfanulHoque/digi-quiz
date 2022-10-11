import React from "react";
import { useLoaderData } from "react-router-dom";
import Quiz from "../Quiz/Quiz";

const Quizzes = () => {
  const quizzes = useLoaderData();
  console.log(quizzes);
  return (
    <div>
      <h1>Quizs</h1>
      {quizzes.data.questions.map((quiz) => (
        <Quiz key={quiz.id} quiz={quiz}></Quiz>
      ))}
    </div>
  );
};

export default Quizzes;
