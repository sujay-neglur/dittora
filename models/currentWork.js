const mongoose= require('mongoose');
const {save} =require('../server/save');
const{WorkType}= require('../enums/enums');

let CurrentWorkSchema= new mongoose.Schema({
    isWorking:{
        type:String
    },
    jobPosition:{
        type:String
    },
    jobPositionRelated:{
        type:Boolean
    },
    currentJobLikingMeter:{//currentJobLikingMeter
        type:Number
    },
    user:{
        type:mongoose.Schema.Types.ObjectId, ref:'User',
        required:true
    }
});

CurrentWorkSchema.methods.saveCurrentWork= function(){
    return save(this);
};

let CurrentWorkType= mongoose.model('CurrentWorkType', CurrentWorkSchema);
module.exports={
    CurrentWorkType
}