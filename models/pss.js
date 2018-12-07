const mongoose = require('mongoose');
const {save} = require('../server/save');

let PersonalityStyleScaleSchema=new mongoose.Schema({
    prestige:{
        type:Number
    },
    highIncome:{
        type:Number
    },
    immediateEmployment:{
        type:Number
    },
    leadership:{
        type:Number
    },
    independence:{
        type:Number
    },
    stability:{
        type:Number
    },
    leisure:{
        type:Number
    },
    helpingOthers:{
        type:Number
    },
    diversity:{
        type:Number
    },
    doWhatILove:{
        type:Number
    },
    user:{
        type:mongoose.Schema.Types.ObjectId, ref:'User',
        required:true
    }
});

PersonalityStyleScaleSchema.methods.savePss=function(){
    return save(this);
};

let PSS= mongoose.model('PSS', PersonalityStyleScaleSchema);
module.exports={
    PSS
}