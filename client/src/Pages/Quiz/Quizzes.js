import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import './Quiz.css';
import Header from "../Homepage/Header";


const Quizzes = () => {
  const [quizzes, setQuizzes] = useState([]);
  const { category } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`/quizzes/${category}`)
      .then((response) => response.json())
      .then((data) => setQuizzes(data.data))
      .catch((error) => console.error("Error fetching quizzes:", error));
  }, []);
  // console.log(quizzes);


  return (
    <>
    <Header/>
      <h1>{`${category} `}Quizzes</h1>
      {/* <ul>
        {quizzes.map((quiz, index) => (
          <li key={index}>
            <Link to={`/quiz/${quiz._id}`}>{quiz.category}/{quiz.difficulty}</Link>
          </li>
        ))}
      </ul> */}

      {quizzes.map((quiz, index) => (
         <button className= "quizzesBtn" key={index} onClick={() => navigate(`/quiz/${quiz._id}`)}>{quiz.category}/{quiz.difficulty}</button>
        ))}
      
    </>
  );
};

export default Quizzes;
