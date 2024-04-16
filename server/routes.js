const {
    getAllQuizzes,
    getRandomQuizzes,
    getQuiz,
    createNewQuiz,
    deleteQuiz,
    updateQuiz,
    getNewQuestion,
    getAdmin,
    getSingleQuiz
  } = require("./handlers");
  
  const router = require("express").Router();

  router.post("/admin",getAdmin) //admin route 
  
  router.get("/allQuizzes", getAllQuizzes);
  router.get("/randomQuizzes", getRandomQuizzes);
  router.get("/quizzes/:category", getQuiz);
  router.get("/quiz/:id",getSingleQuiz)
  
  router.get("/newQuestion", getNewQuestion) 
  router.post("/newQuiz", createNewQuiz);
  router.patch("/editQuiz", updateQuiz);
  
  router.delete("/deleteQuiz/:id", deleteQuiz)
  
  module.exports = router;
  