import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AllQuizzes = () => {
  const [allQuizzes, setAllQuizzes] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("/allQuizzes")
      .then((response) => response.json())
      .then((data) => setAllQuizzes(data.data))
      .catch((error) => console.error("Error fetching quizzes:", error));
  }, []);
  console.log(allQuizzes); // Returns an object intead of an array

  const handleNewQuizButton = () => {
    navigate("/newQuiz");
  };

  return (
    <>
      {allQuizzes.map((quiz) => (
        <li key={quiz._id}>
          <strong>Category:</strong> {quiz.category}
          <br />
          <strong>Difficulty:</strong> {quiz.difficulty}
          <br />
          <strong>Questions:</strong>
          <ul>
            {quiz.questions.map((question, index) => (
              <li key={index}>
                <strong>Question:</strong> {question.question}
                <br />
                <strong>Correct Answer:</strong> {question.correct_answer}
                <br />
                <strong>Incorrect Answers:</strong>{" "}
                {question.incorrect_answers.join(", ")}
              </li>
            ))}
          </ul>
        </li>
      ))}

      <button onClick={handleNewQuizButton}>Create a new quiz</button>
    </>
  );
};

export default AllQuizzes;
