const {User} = require('../models/user');
const {check} = require('../enums/enums');
const bigFiveLength = 5;
const _ = require('lodash');

let findAndUpdateUser = (request, object, updateValue) => {
    return User.findOneAndUpdate({
        _id: request.user._id
    }, {
        $set: {
            [updateValue]: object
        }
    })
};


let constructObject = (request, emptyObject) => {
    // console.log(request.body);
        let object = emptyObject;
    for (let field in request.body) {
        switch (field) {
            case 'typeOfStudent':
            case 'highestAcademicAchievement':
                object[field]=check(request.body[field],'study');
                break;
            case 'doNotTalkALot':
            case 'notInterestedInOthersProblems':
            case 'forgetToPutThingsBackInPlace':
            case 'relaxedMostOfTheTime':
            case 'notInterestedInAbstractIdeas':
            case 'difficultyUnderstandingAbstractIdeas':
            case 'keepInBackground':
            case 'notInterestedInOthers':
            case 'makeMessOfThings':
            case 'seldomFeelBlue':
            case 'doNotHaveGoodImagination':
                object[field] = bigFiveLength - request.body[field] + 1;
            case  'hobbies':
                object[field]=request.body[field];
                break;
            default:
                object[field] = request.body[field];
        }
    }
    object.user = request.user;
    return object;
};


let sendResponse = (response, status, message) => {
    response.status(status).send(message);
};
module.exports = {
    findAndUpdateUser,
    sendResponse,
    constructObject
};

/*
if(field==='studyLevel' || field ==='academicAchievement'){
           object[field]= check(request.body[field],'study');
           continue;
       }
       if(field==='workStatus'){
           object[field]=check(request.body[field],'work');
           continue;
       }
       object[field]= request.body[field];
   }
   object[field]= bigFiveLength-request.body[field]+1
 */

/*
case 'typeOfStudent':
            case 'academicAchievement':
                object[field] = check(request.body[field], 'study');
                break;
            case 'workStatus':
            case  'oldWorkStatus':
                object[field] = check(request.body[field], 'work');
                break;
            case 'option6':
            case 'option7':
            case 'option8':
            case 'option9':
            case 'option10':
            case 'option15':
            case 'option16':
            case 'option17':
            case 'option18':
            case 'option19':
            case 'option20':
                object[field] = bigFiveLength - request.body[field] + 1;
                break;
 */
