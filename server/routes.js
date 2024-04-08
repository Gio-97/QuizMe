const {
    getAllQuizzes,
    getRandomQuizzes,
    getQuiz,
    createNewQuiz,
    deleteQuiz
  } = require("./handlers");
  
  const router = require("express").Router();
  
  router.get("/allQuizzes", getAllQuizzes);
  router.get("/randomQuizzes", getRandomQuizzes);
  router.get("/quiz/:topic", getQuiz);
  
  router.post("/newQuiz", createNewQuiz);
  router.patch("/updateCart", updateCart);
  
  router.delete("/deleteQuiz/:id", deleteQuiz)
  
  module.exports = router;
  