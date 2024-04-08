const {MongoClient} = require("mongodb");

require("dotenv").config();
const {MONGO_URI} = process.env;

const options= {
    useNewUrlParser: true,
    useUnifiedToplgy: true,
};


const getRandomQuizzes = async(req, res) => { // Gets a group of 10 quizzes to recommend the users on the home/front page
    const client = new MongoClient(MONGO_URI);

    try {
        await client.connect();

        const db = client.db('QuizMe');
        console.log("connected");

        const randomQuizzes = await db.collection("Quizzes").aggregate([{$sample : {size:10}}]).toArray();
        res.status(200).json({status: 200, message:'Here are the quizzes you are looking for', randomQuizzes});

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

module.exports = getRandomQuizzes;