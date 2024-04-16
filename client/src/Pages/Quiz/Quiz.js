import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Header from "../Homepage/Header";
import "./Quiz.css";

const Quiz = () => {
  const [quizzes, setQuizzes] = useState([]);
  
  const { _id } = useParams();

  useEffect(() => {
    fetch(`/quiz/${_id}`)
      .then((response) => response.json())
      .then((data) => setQuizzes(data.data))
      .catch((error) => console.error("Error fetching quizzes:", error));
  }, []);
  console.log(quizzes);

  //   quizzes.map((quiz) => (

  //   ))

  const answers = () => {
    if (ques) {
    }
  };

  return (
    <>
      <Header />
      <div className="singleQuizContainer">
        <ul>
          {quizzes.map((quiz) => (
            <p key={quiz._id}>
              <div className="cat-diff">
                <strong>Category:</strong> {quiz.category}
                <br />
                <strong>Difficulty:</strong> {quiz.difficulty}
                <br />
              </div>
            </p>
          ))}
        </ul>

        {quizzes.map((quiz) => (
          <div key={quiz._id}>
            {quiz.questions.map((question, index) => (
              <div key={index} className="questions">
                <h2>{question.question}</h2>
                <div className="answers">
                  <button className="correctAnswer">
                    {question.correct_answer}
                  </button>
                  {question.incorrect_answers.map((incorrectAnswer, index) => (
                    <button key={index} className="incorrectAnswer">
                      {incorrectAnswer}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </>
  );
};

export default Quiz;
