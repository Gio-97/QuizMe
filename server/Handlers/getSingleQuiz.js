const {MongoClient} = require("mongodb");

require("dotenv").config();
const {MONGO_URI} = process.env;

const options= {
    useNewUrlParser: true,
    useUnifiedToplgy: true,
};

const getSingleQuiz = async (req, res) => { // Gets a single quiz for user based on _id
    const client = new MongoClient(MONGO_URI);
    const _id = req.params.id.toString();

    try {
        await client.connect();

        // const topic = req.query
        
        const db = client.db("QuizMe")
        console.log("Connected");

        const quiz = await db.collection("Quizzes").find({_id: _id}).toArray();
        res.status(200).json({status:200, data: quiz})
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

  module.exports = getSingleQuiz