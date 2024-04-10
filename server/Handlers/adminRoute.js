const {MongoClient} = require("mongodb");

require("dotenv").config();
const {MONGO_URI} = process.env;

const options= {
    useNewUrlParser: true,
    useUnifiedToplgy: true,
};

const getAdmin = async (req, res) => { // Gets a single quiz for user based on topic. getQuiz/:topic
    const sentPassword = req.body.password

    if (sentPassword === "strongPassword") {
        res.status(200).json({message: "Correct password"})
        
        console.log("Admin access granted!");
      } else {
        res.status(401).json({message:"Password is incorrect"})
        
      }
    
  };

  module.exports = getAdmin