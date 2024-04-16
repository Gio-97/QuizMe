import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import GetQuestion from './GetQuestion';
import SaveQuiz from './SaveQuiz';
import Header from "../Homepage/Header";


const categories = ["Sports", "Geography", "Entertainment"] // Cate
const difficulties = ["easy", "medium", "hard"]

const NewQuiz = () => {

    const [selectedCat, setSelectedCat] = useState(categories[0]);
    const [selectedDiff, setSelectedDiff] = useState(difficulties[0])
    const [question1, setQuestion1] = useState(null)// state for each question
    const [question2, setQuestion2] = useState(null)
    const [question3, setQuestion3] = useState(null)
    const [question4, setQuestion4] = useState(null)
    const [question5, setQuestion5] = useState(null)



    //Options for category and difficulty
    const catOptions = categories.map((category) => {
		return <option key = {category}>{category}</option>
	})
    const diffOptions = difficulties.map((difficulty) => {
		return <option key = {difficulty}>{difficulty}</option>
	})

    console.log(selectedCat);
    console.log(selectedDiff);

    return (
        <>
        <Header/>
        <label> Select a category:
            <select onChange={(e) => setSelectedCat(e.target.value)}>
                {catOptions}
            </select>
        </label>
        
        <label>Select difficulty:
            <select onChange={(e) => setSelectedDiff(e.target.value)}>
                {diffOptions}
            </select>
        </label>
        <SaveQuiz question1 = {question1} 
        question2={question2} 
        question3={question3}
        question4={question4}
        question5={question5}
        category= {selectedCat} difficulty = {selectedDiff}/>
        

        <GetQuestion question = {question1} setQuestion={setQuestion1} category= {selectedCat} difficulty = {selectedDiff}/>
        <GetQuestion question = {question2} setQuestion={setQuestion2} category= {selectedCat} difficulty = {selectedDiff}/>
        <GetQuestion question = {question3} setQuestion={setQuestion3} category= {selectedCat} difficulty = {selectedDiff}/>
        <GetQuestion question = {question4} setQuestion={setQuestion4} category= {selectedCat} difficulty = {selectedDiff}/>
        <GetQuestion question = {question5} setQuestion={setQuestion5} category= {selectedCat} difficulty = {selectedDiff}/>

    


         {/* <button onClick={handleNewQuizButton}>Create a new quiz</button> */}
        </>
    )
}

export default NewQuiz