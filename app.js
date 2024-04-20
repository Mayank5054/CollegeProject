const express = require("express");
const mongooseConnection = require("./utils/mongooseConnections");
const path = require("path");
const indexRoute = require("./routers/index");
const bodyParser = require("body-parser");
const multer = require("multer");
const isAuth = require("./Auth/isLogin");
const cookieParser = require("cookie-parser");
const storageObj = multer.diskStorage({
    destination:(req,file,cb) => {
        cb(null,"uploads/");
    },
    filename:(req,file,cb) => {
        cb(null,new Date().toISOString().replace(/:/g, '-')
        + "-"
        + file.originalname );
    }
})
const app  = express();
app.set("view engine","ejs");
app.set("views",path.join(__dirname,'views'));
app.use(cookieParser());
app.use(express.static(path.join(__dirname,"public")));
app.use("/uploads",express.static(path.join(__dirname,"uploads")));
app.use(bodyParser.urlencoded({extended:true}))
app.use(multer({storage:storageObj}).single("img"))
app.use(bodyParser.json())
app.use(indexRoute);

app.use(isAuth,(req,res,next) => {
    // res.send("<h1>Helo World </h1>")
    console.log("request recieved");
    res.render("./index.ejs",{
        name:"Guests"
    });
})

mongooseConnection().then(result => {
    console.log("MongoDB Connection Achieved");
    app.listen(5354,function(){
        console.log("Server Started");
    });
})
