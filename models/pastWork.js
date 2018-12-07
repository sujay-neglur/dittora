const mongoose= require('mongoose');
const {save} =require('../server/save');
const{WorkType} = require('../enums/enums');

let PastWorkSchema= new mongoose.Schema({
    hasWorked:{
        type:String
    },
    pastJobPosition:{
        type:String
    },
    pastJobPositionRelated:{//pastJobRelatedToFieldOfStudy
        type:Boolean
    },
    pastJobLikingMeter:{//pastJobLikingMeter
        type:Number
    },
    user:{
        type:mongoose.Schema.Types.ObjectId, ref:'User',
        required:true
    }
});

PastWorkSchema.methods.savePastWork=function(){
    return save(this);
};

let PastWorkType= mongoose.model('PastWorkType', PastWorkSchema);

module.exports={
    PastWorkType
};