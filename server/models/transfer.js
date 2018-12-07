const mongoose= require('mongoose');
const {save} = require('../server/save');

let TransferSchema= new mongoose.Schema({
    isTransferStudent:{
        type:Boolean
    },
    pastProgramName:{
        type:String
    },
    reasonToLeave:{
        type:String
    },
    user:{
        type:mongoose.Schema.Types.ObjectId, ref:'User',
        required:true
    }
});

TransferSchema.methods.saveTransfer= function(){
    return save(this);
}

let TransferStatus= mongoose.model('TransferStatus',TransferSchema);

module.exports={
    TransferStatus
}
