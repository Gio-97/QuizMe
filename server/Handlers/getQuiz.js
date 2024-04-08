const {MongoClient} = require("mongodb");

require("dotenv").config();
const {MONGO_URI} = process.env;

const options= {
    useNewUrlParser: true,
    useUnifiedToplgy: true,
};

const getQuiz = async (req, res) => { // Gets a single quiz for user based on topic. getQuiz/:topic
    const client = new MongoClient(MONGO_URI);

    try {
        await client.connect();

        const _id = req.params._id
        const db = client.db("QuizMe")
        console.log("Connected");

        const singleQuiz = await db.collection("Quizzes").findOne({_id});
        res.status(200).json({status:200, _id, data: singleQuiz})
    }
    catch(err) {
        console.log(err);
        res.status(502).json({message: 'There seems to be an issue'})
    }
    finally{
        client.close();
        console.log("Disconnected");
    }
    
  };

  module.exports = getQuiz