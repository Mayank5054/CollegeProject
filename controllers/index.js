const { mongo } = require("mongoose");
const Order = require("../models/Order");
const productModel = require("../models/Product");
const mongoose = require("mongoose");
exports.addProduct = (req,res,next) =>{
    console.log(req.body);
    console.log(req.file);
    const product = new productModel({
        userId:"65e0c1803e97474f5fd9d9a5",
        productName:req.body.productName,
        productDetails:req.body.productDescription,
        imageUrl:req.file.path,
        price:req.body.rent,
        color:[req.body.col1,req.body.col2,req.body.col3],
        sizes:req.body.WearWith,
        category:req.body.garmentType
    });
    product.save().then((result)=>{
        console.log(result);
    })
}


exports.getProduct = (req,res,next) => {
    const id = req.body.id;
    console.log("id ",id);
    productModel.findById(id)
    .then(product =>{
        console.log(product);
        res.render("./../views/view2.ejs",{
            name:product.productName,
            details:product.productDetails,
            url:product.imageUrl,
            price:product.price,
            color:product.color,
            sizes:product.sizes,
            category:product.category,
            id:id
        });
    })
    
    // res.render("./../views/index.ejs")
}


exports.addOrder = (req,res,next) =>{
    console.log(req.body);
    const order = new Order({
productId : req.body.id,
date:req.body.formIddate,
size:req.body.formId411,
name:req.body.formId1,
totalPayment:req.body.formId2,
advancePayment:req.body.formId3,
remaining:req.body.formId41,
 description:req.body.formId5
    });
    order.save()
    .then(result => {
        res.render("orderPlaced.ejs");
        console.log(result);
    })
}
exports.checkAvailable = (req,res,next) => {
    // const order = new Order({
    //     productId: new mongoose.Types.ObjectId("66103a3116aaa591c626a1e7"),
    //     date:"2024-04-11",
    //     size:'XL',
    //     totalPayment:500,
    //     advancePayment:250
    // })
    // order.save()
    // .then(product => {
      
    
    // })
console.log("REQ.BODY",req.body);
    console.log(req.body.formId1+"T00:00:00.000+00:00");
    console.log(req.body.id);
    Order.find({$and:[
        {productId:{$eq:req.body.id}},
        {date:{$eq:req.body.formId1+"T00:00:00.000+00:00"}},
        {size:{$eq:req.body.formId4}}
    ]}).then(product=> {
        console.log("products",product);
        if(product.length==0){
            res.json({status:"available"});
        console.log("No Piece Available")
    }
    else{
        res.json({status:"notAvailable"});
        console.log("Data There Are");
        console.log(product);
    }
    })
}