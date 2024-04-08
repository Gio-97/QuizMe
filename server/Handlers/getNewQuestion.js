const { json } = require("express");

// const fetch = require ("node-fetch");
const getNewQuestion = async (req, res) => {
    try {
        // Information through req.query
        // variables for question type, difficulty and category



        const apiResponse = await fetch ('https://opentdb.com/api.php?amount=1'); // Fetches one question (data) from the API
        const apiData = await apiResponse.json();
        console.log(apiData);
        
        res.status(200).json({data:apiData.results[0]})
    }
    catch (err) {
        res.status(502).json({message: 'There seems to be an issue'})

    }
}

getNewQuestion()

module.exports = getNewQuestion