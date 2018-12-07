const {CurrentWorkType} = require('../models/currentWork');
const {PastWorkType} = require('../models/pastWork');
const {sendResponse, findAndUpdateUser, constructObject} = require('../utilities/utilities');


let saveWorkAndSendResponse = (request, response, workObject, updateValue) => {
    findAndUpdateUser(request, workObject, updateValue)
        .then(user => {
            if (!user) {
                sendResponse(response, 404, 'User not found');
            }

            sendResponse(response, 200, {
                _id: user._id
            });
        }).catch(error => {
        sendResponse(response, 400, error);
    });
};

let currentWork = (request) => {
    return constructObject(request, new CurrentWorkType({}));
};

let pastWork = (request) => {
    return constructObject(request, new PastWorkType({}));
};

let currentWorkExperience = (request, response) => {
    let currentWorkType = currentWork(request);
    currentWorkType.saveCurrentWork().then(() => {
        saveWorkAndSendResponse(request, response, currentWorkType, 'currentWork');
    });
};

let pastWorkExperience = (request, response) => {
    let pastWorkType = pastWork(request);
    pastWorkType.savePastWork().then(() => {
        saveWorkAndSendResponse(request, response, pastWorkType, 'pastWork');
    })
};

module.exports = {
    currentWorkExperience,
    pastWorkExperience
};