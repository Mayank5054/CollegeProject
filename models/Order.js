const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const OrderModel = new Schema({
    productId:{
        type: Schema.Types.ObjectId,
        ref: "Product",
        // required: true
    },
    date:{
        type:Schema.Types.Date,
        // required:true
    },
    name:{
        type:String
    },
    size:{
        type:String
    },
    totalPayment:{
        type:Schema.Types.Number,
    },
    advancePayment:{
        type:Schema.Types.Number,
    },
    description :{
        type:String
    },
    remaining:{
        type:Schema.Types.Number
    }
})


module.exports = mongoose.model("Order",OrderModel);