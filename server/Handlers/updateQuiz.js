const {MongoClient} = require("mongodb");

require("dotenv").config();
const {MONGO_URI} = process.env;

const options= {
    useNewUrlParser: true,
    useUnifiedToplgy: true,
};


const updateQuiz = async (req, res) => {
    const client = new MongoClient(MONGO_URI);

    const category = req.query.category
    const difficulty = req.query.difficulty
    let catNumber = 22
        if(category == "Sports"){
            catNumber = 21
        }
        else if(category == "Entertainment"){
            catNumber = 12
    }

    const queryGetQuiz = req.query._id
    const filter = {_id }; //Question id?? questions don't have ids. How would I target it?
    

    try{
        await client.connect();
        const db = client.db("QuizMe")
        console.log("Connected");

        const findQuiz = await db.collection("Quizzes").findOne(queryGetQuiz);

        const apiResponse = await fetch (`https://opentdb.com/api.php?amount=1&category=${catNumber}&difficulty=${difficulty}&type=multiple`); // Fetches one new question (data) from the API
        const apiData = await apiResponse.json();
        const newValue = { $set: { "questions.$" : apiData } }; //questions.$?? does it access the index of the array needed

        const updateQuiz = await db.collection("Quizzes").updateOne(findQuiz, newValue); //Updates the quiz that was found, replaces the question with the new one that was fetched


        res.status(200).json({ status: 200, data:updateQuiz});
    }
    catch (err) {
        res.status(404).json({ status: 404, message: "Nothing was updated" });
    }
    finally{
        client.close();
        console.log("Disconnected");
    }
  };

  module.exports = updateQuiz 
