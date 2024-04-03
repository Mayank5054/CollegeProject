const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductModel = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: "Users",
        required: true
    },
    productName: {
        type: String,
        required: true
    },
    productDetails:{
        type:String,
        required:true
    },
    imageUrl:{
        type:String,
        required:true
    },
    price:{
        type:Number
    },
    color:[{type:String}],
    sizes:[{type:String}],
    category:{type:String}


})

module.exports = mongoose.model("Product",ProductModel);