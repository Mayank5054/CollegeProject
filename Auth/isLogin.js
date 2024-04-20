const isLogin = (req,res,next) => {
    console.log("isAuth",req.cookies);
    if(req.cookies.id !=null){
        next();
    }
    else{
        res.redirect("/login");
    }
}

module.exports = isLogin;