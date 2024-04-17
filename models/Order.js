const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const OrderModel = new Schema({
    productId:{
        type: Schema.Types.ObjectId,
        ref: "Product",
        required: true
    },
    date:{
        type:Schema.Types.Date,
        required:true
    },
    size:String,
    totalPayment:{
        type:Schema.Types.Number,
        required:true
    },
    advancePayment:{
        type:Schema.Types.Number,
        required:true
    }
})


module.exports = mongoose.model("Order",OrderModel);