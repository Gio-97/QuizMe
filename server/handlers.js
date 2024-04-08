const getAllQuizzes = require("./Handlers/getAllQuizzes");
const getRandomQuizzes = require("./Handlers/getRandomQuizzes");
const getQuiz = require("./Handlers/getQuiz");
const createNewQuiz = require ("./Handlers/createNewQuiz");
const deleteQuiz = require("./Handlers/deleteQuiz");



module.exports = {
    getAllQuizzes,
    getRandomQuizzes,
    getQuiz,
    createNewQuiz,
    deleteQuiz
}