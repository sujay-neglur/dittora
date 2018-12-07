let mongoose = require('mongoose');
mongoose.Promise = global.Promise;
//mongodb://admin:password123@ds149252.mlab.com:49252/heroku_s6n7rkj9
//mongodb://localhost:27017/GooRoo'
mongoose.connect('mongodb://heroku_t58pbvnk:gpnvsmip6mhtu2mp7ktp5ad9dg@ds133152.mlab.com:33152/heroku_t58pbvnk',{
    useNewUrlParser:true,
    useCreateIndex:true
});
module.exports = {
    db:mongoose
};