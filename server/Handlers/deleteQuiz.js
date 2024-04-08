const {MongoClient} = require("mongodb");

require("dotenv").config();
const {MONGO_URI} = process.env;

const options= {
    useNewUrlParser: true,
    useUnifiedToplgy: true,
};

const deleteQuiz = async (req, res) => { // Deletes quiz based on _id coming from FE
    const client = new MongoClient(MONGO_URI);

    const _id = req.params.id.toString();


    try{
        const db = client.db("QuizMe")
        console.log("Connected");

        const deletedQuiz = await db.collection("Quizzes").deleteOne({_id});

        if (deletedQuiz.deletedCount === 1)
        res.status(200).json({ status: 200, message: "Quiz deleted" });
        else res.status(404).json({ message: "Unable to remove cart" });
    }
    catch (err) {
        res.status(404).json({ status: 404, data: "Nothing was deleted" });
    }
    finally {
        client.close();
        console.log("Disconnected");
    }
  };

  module.exports = deleteQuiz;