import React, { useEffect, useState } from 'react';
import SampleQuestion from './SampleQuestion';
import Header from "../Homepage/Header";



const GetQuestion = ({question, setQuestion, category, difficulty}) => {

    const [buttonDisabled, setButtonDisabled] = useState(false);

    console.log(question);

   const handleQuestionFetch = () => {
    setButtonDisabled(true);
    fetch(`/newQuestion?category=${category}&difficulty=${difficulty}`) 
    .then(response => {
        if (response.status == 502){
            throw new Error("Wait a sec...");
        }
        return response.json()})
    .then(data => {setButtonDisabled(false)
         setQuestion(data.question)})
    .catch (handleQuestionFetch)
   }
   

    return (
        <>
        <Header/>
        <h2>Get a new question</h2>
        <SampleQuestion question={question}/>
        <button onClick={handleQuestionFetch} disabled = {buttonDisabled}>{buttonDisabled? "Working...": "Get question"}</button>

        </>
    )
}

export default GetQuestion