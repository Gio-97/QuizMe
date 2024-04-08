const {MongoClient} = require("mongodb");

require("dotenv").config();
const {MONGO_URI} = process.env;

const options= {
    useNewUrlParser: true,
    useUnifiedToplgy: true,
};

const updateQuiz = async (req, res) => {
    const client = new MongoClient(MONGO_URI);

    try{
        await client.connect();

        const db = client.db("QuizMe")
        console.log("Connected");

        const query = { };
        const newValues = { $set: { data: req.body } };
        const updateDoc = await db.collection("greetings").updateOne(query, newValues);

       
          if (updateDoc.matchedCount == 1){
            res.status(200).json({status:200, message:"We have found what we were looking for"})
          }
          else{
            res.status(404).json({ status: 404, message: "Nothing was updated" });
          }

          if(updateDoc.modifiedCount == 1){
            res.status(200).json({status:200, message:"Update completed"})
          }

        res.status(200).json({ status: 200, data:updateDoc});
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
