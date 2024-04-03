const express = require("express");
const mongooseConnection = require("./utils/mongooseConnections");
const path = require("path");
const indexRoute = require("./routers/index");
const app  = express();
app.set("view engine","ejs");
app.set("views",path.join(__dirname,'views'));
app.use(express.static(path.join(__dirname,"public")));
app.use("/Assets",express.static(path.join(__dirname,"public","Assets")));
app.use(indexRoute);
app.use((req,res,next) => {
    // res.send("<h1>Helo World </h1>")
    console.log("request recieved");
    res.render("./index.ejs");
})

mongooseConnection().then(result => {
    console.log("MongoDB Connection Achieved");
    app.listen(5354,function(){
        console.log("Server Started");
    });
})
