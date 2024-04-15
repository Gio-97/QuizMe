import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css"; // Import CSS file for styling

const RandomQuizzes = () => {
  const [randomQuizzes, setRandomQuizzes] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    fetch("/randomQuizzes")
      .then((response) => response.json())
      .then((data) => setRandomQuizzes(data.data))
      .catch((error) => console.error("Error fetching quizzes:", error));
  }, []);

  const handleButtonClick = () => {
    navigate("/admin");
  };

  return (
    <>
      {/* <ul>
        {Quizzes.map((quiz) => (
          <li key={quiz._id}>{quiz.question}</li>
        ))}
      </ul> */}

      <h2 className="test_knowledge">Test your knowledge</h2>
      <h3>This is home</h3>

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

      <button onClick={handleButtonClick} className="loginBtn">
        Admin Login
      </button>
    </>
  );
};

export default RandomQuizzes;
