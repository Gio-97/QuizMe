import React from "react";

const SampleQuestion = ({ question }) => {
  return (
    <>
      {question ? (
        <div>
          <h3>Sample Question</h3>
          <p>{question.question}</p>
          <p>{question.incorrect_answers + question.correct_answer}</p>
        </div>
      ) : (
        <p>Add a question</p>
      )}
    </>
  );
};

export default SampleQuestion;
