const {MongoClient} = require("mongodb");

require("dotenv").config();
const {MONGO_URI} = process.env;

const options= {
    useNewUrlParser: true,
    useUnifiedToplgy: true,
};

const createNewQuiz = async (req, res) => { // Creates new quiz by creating new document and adding newQuestion to the array within it
    const client = new MongoClient(MONGO_URI);

    try {

        await client.connect();

        const db = client.db("QuizMe")
        console.log("Connected");

        const newQuiz = await db.collection("Quizzes").insertOne(req.body); //New questions??
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


