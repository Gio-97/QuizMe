import React from 'react';
import { useNavigate } from 'react-router-dom';

const SaveQuiz = ({ question1, question2, question3, question4, question5, category, difficulty }) => {
  const areQuestionsValid = question1 && question2 && question3 && question4 && question5;
  const navigate = useNavigate();


  const saveQuizButton = () => {
    fetch("/newQuiz", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ category, difficulty, questions:[question1, question2, question3, question4, question5,] }),
      }).then(response => { 
        if (response.status === 201) {
          navigate("/allQuizzes")
        } else {
          console.log("Unable to save");
        }
         
      }); 
  }

  return (
    <div>
      {areQuestionsValid ? (
        <div>
          <h2>Save Quiz</h2>
          <p>Selected Category: {category}</p>
          <p>Selected Difficulty: {difficulty}</p>
          <button onClick={saveQuizButton}>Save</button>
        </div>
      ) : (
        <p>Choose questions</p>
      )}
    </div>
  );
};

export default SaveQuiz;
