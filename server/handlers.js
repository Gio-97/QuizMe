const getAllQuizzes = require("./Handlers/getAllQuizzes");
const getRandomQuizzes = require("./Handlers/getRandomQuizzes");
const getQuiz = require("./Handlers/getQuiz");
const createNewQuiz = require ("./Handlers/createNewQuiz");
const deleteQuiz = require("./Handlers/deleteQuiz");
const updateQuiz = require("./Handlers/updateQuiz");
const getNewQuestion = require("./Handlers/getNewQuestion");
const getAdmin = require("./Handlers/adminRoute");
const getSingleQuiz = require("./Handlers/getSingleQuiz")



module.exports = {
    getAllQuizzes,
    getRandomQuizzes,
    getQuiz,
    createNewQuiz,
    deleteQuiz,
    updateQuiz,
    getNewQuestion,
    getAdmin,
    getSingleQuiz
}