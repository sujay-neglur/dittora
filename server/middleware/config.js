const express= require('express');
const app =express();
const bodyParser= require('body-parser');
console.log("DDD")
app.use(bodyParser.json());
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}))
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("x-auth")
    next();
});

module.exports={
    app
};