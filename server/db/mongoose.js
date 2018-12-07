let mongoose = require('mongoose');
mongoose.Promise = global.Promise;
//mongodb://admin:password123@ds149252.mlab.com:49252/heroku_s6n7rkj9
//mongodb://localhost:27017/GooRoo'
mongoose.connect('mongodb://localhost:27017/GooRoo',{
    useNewUrlParser:true,
    useCreateIndex:true
});
module.exports = {
    db:mongoose
};