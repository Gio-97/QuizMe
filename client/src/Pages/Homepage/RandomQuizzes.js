import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css"; // Import CSS file for styling
import entertainmentImg from '../../images/entertainment.jpg'
import geographyImg from '../../images/geography.jpg'
import sportsImg from "../../images/sports.jpg"


const RandomQuizzes = () => {
  const [randomQuizzes, setRandomQuizzes] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("/randomQuizzes")
      .then((response) => response.json())
      .then((data) => setRandomQuizzes(data.data))
      .catch((error) => console.error("Error fetching quizzes:", error));
  }, []);

  const topics = [
    {category:"Sports", img: sportsImg }, 
    {category:"Geography", img: geographyImg}, 
    {category:"Entertainment" , img: entertainmentImg}
];

  return (
    <>
      <h2 className="test-knowledge">Test your knowledge</h2>

      <div className="btnContainer">
      {topics.map((topic) => {
        return (
          <div className="btnWrapper">
            <button
              style={ {backgroundImage: `url(${topic.img})` }}
              className="categoryBTN"
              onClick={() => {
                navigate("/quizzes/" + topic.category);
              }}
            >
              {topic.category}
            </button>
          </div>
        );
      })}

      </div>
      
      
    </>
  );
};

export default RandomQuizzes;
