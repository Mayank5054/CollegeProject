const productModel = require("../models/Product");
exports.addProduct = (req,res,next) =>{
    console.log(req);
    const product = new productModel({
        userId:"65e0c1803e97474f5fd9d9a5",
        productName:"Blazor",
        productDetails:"An Lether Jacket",
        imageUrl:"/Pattern.svg",
        price:500,
        color:["black","green"],
        sizes:["XL","L"],
        category:"Blazor"
    });
    product.save().then((result)=>{
        console.log(result);
    })
}


exports.getProduct = (req,res,next) => {
    productModel.findById("660d9887220c0113866266dd")
    .then(product =>{
        res.render("./../views/image.ejs",{
            url:product.imageUrl
        });
    })
    
    // res.render("./../views/index.ejs")
}