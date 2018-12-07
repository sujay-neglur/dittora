let mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/GooRoo',{
    useNewUrlParser:true,
    useCreateIndex:true
});
module.exports = {
    db:mongoose
};