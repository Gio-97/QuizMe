const {MongoClient} = require("mongodb");

require("dotenv").config();
const {MONGO_URI} = process.env;

const options= {
    useNewUrlParser: true,
    useUnifiedToplgy: true,
};


const getAllQuizzes = async(req, res) => { // Gets all the quizzes for the admin to see *Endpoint works*
    const client = new MongoClient(MONGO_URI);

    try {
        await client.connect();

        const db = client.db('QuizMe');
        console.log("connected");

        const quizzes = await db.collection("Quizzes").find().toArray();
        res.status(200).json({status: 200, message:'Here are the quizzes you asked for', data:quizzes});

    }
    catch (err) {
        console.log(err);
        res.status(502).json({message: 'There seems to be an issue'})
    }
    finally{
        client.close();
        console.log("disconnected");
    }

}

module.exports = getAllQuizzes;