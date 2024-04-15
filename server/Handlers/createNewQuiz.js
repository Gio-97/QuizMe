const {MongoClient} = require("mongodb");

const { v4: uuidv4 } = require("uuid");
require("dotenv").config();
const {MONGO_URI} = process.env;

const options= {
    useNewUrlParser: true,
    useUnifiedToplgy: true,
};

const makeQuiz = (category, difficulty, questions) => {
  const _id = uuidv4() 
  return {
    _id, 
    category, 
    difficulty, 
    questions
  }
}

const createNewQuiz = async (req, res) => { // Creates new quiz by creating new document and adding newQuestion to the array within it
    const client = new MongoClient(MONGO_URI);
    const {category, difficulty, questions} = req.body
    

    try {

        await client.connect();

        const db = client.db("QuizMe")
        console.log("Connected");

        const theNewQuiz = makeQuiz (category, difficulty, questions);

        const newQuiz = await db.collection("Quizzes").insertOne(theNewQuiz); //New questions??
        res.status(201).json({status:201, data: newQuiz})    

      } catch (err) {
        console.log(err);
        res.status(502).json({message: 'There seems to be an issue'})
        
      }
      finally{
        client.close();
        console.log("Disconnected");
      }
    
  };

  module.exports = createNewQuiz;


