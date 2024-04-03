const mongoose = rquire("mongoose");
const Schema = mongoose.Schema;

const userModel = new Schema({
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

module.exports = mongoose.model("Users",userModel);