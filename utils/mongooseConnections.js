const mongoose = require("mongoose");

const mongooseConnection = () =>{
    return mongoose.connect("mongodb+srv://Mayank5354:Mayank%2E5354@cluster0.yofgfpa.mongodb.net/Lendrobe");
}

module.exports = mongooseConnection