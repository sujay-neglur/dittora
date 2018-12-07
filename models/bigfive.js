const mongoose= require('mongoose');
const {save} = require('../server/save');

let BigFiveSchema= new mongoose.Schema({
    lifeOfTheParty:{//lifeOfTheParty
        type:Number
    },
    sympatheticToOthers:{//sympatheticToOthers
        type:Number
    },
    doChoresRightAway:{//doChoresRightAway
        type:Number
    },
    frequentMoodSwings:{//frequentMoodSwings
        type:Number
    },
    vividImagination:{//vividImagination
        type:Number
    },
    doNotTalkALot:{//doNotTalkALot
        type:Number
    },
    notInterestedInOthersProblems:{//notInterestedInOthersProblems
        type:Number
    },
    forgetToPutThingsBackInPlace:{//forgetToPutThingsBackInPlace
        type:Number
    },
    relaxedMostOfTheTime:{//relaxedMostOfTheTime
        type:Number
    },
    notInterestedInAbstractIdeas:{//notInterestedInAbstractIdeas
        type:Number
    },
    talkToDifferentPeopleAtParties:{//talkToDifferentPeopleAtParties
        type:Number
    },
    feelOthersEmotions:{//feelOthersEmotions
        type:Number
    },
    likeOrder:{//likeOrder
        type:Number
    },
    getUpsetEasily:{//getUpsetEasily
        type:Number
    },
    difficultyUnderstandingAbstractIdeas:{//difficultyUnderstandingAbstractIdeas
        type:Number
    },
    keepInBackground:{//keepInBackground
        type:Number
    },
    notInterestedInOthers:{//notInterestedInOthers
        type:Number
    },
    makeMessOfThings:{//makeMessOfThings
        type:Number
    },
    seldomFeelBlue:{//seldomFeelBlue
        type:Number
    },
    doNotHaveGoodImagination:{//doNotHaveGoodImagination
        type:Number
    },
    user:{
        type:mongoose.Schema.Types.ObjectId, ref:'User',
        required:true
    }
});

BigFiveSchema.methods.saveBigFive= function(){
    return save(this);
}

let BigFive= mongoose.model('BigFive',BigFiveSchema);
module.exports={BigFive};