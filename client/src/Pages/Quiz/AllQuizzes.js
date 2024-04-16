import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Header from "../Homepage/Header";


const AllQuizzes = () => {
  const [allQuizzes, setAllQuizzes] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("/allQuizzes")
      .then((response) => response.json())
      .then((data) => setAllQuizzes(data.data))
      .catch((error) => console.error("Error fetching quizzes:", error));
  }, []);
  console.log(allQuizzes); // Returns an object instead of an array

  const handleNewQuizButton = () => {
    navigate("/newQuiz");
  };


  return (
    <>
    <Header/>
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
            <button
              onClick={() => {
                const deletedId = quiz._id;
                axios.delete(`/deleteQuiz/${deletedId}`)
                .then (updatedData => setAllQuizzes(allQuizzes.filter((filteredQuiz) => {
                  if (quiz._id != filteredQuiz._id){
                    return true
                  }
                  else{
                    return false 
                  }

                })))
                console.log("Quiz deleted successfully.");
              }}
            >
              Delete
            </button>
          </ul>
        </li>
      ))}

      <button onClick={handleNewQuizButton}>Create a new quiz</button>
    </>
  );
};

export default AllQuizzes;
