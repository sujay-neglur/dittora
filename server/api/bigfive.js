const {sendResponse, findAndUpdateUser, constructObject} = require('../utilities/utilities');
const {BigFive} = require('../models/bigfive');


let bigFive = (request, response) => {

    let bigFive = constructObject(request, new BigFive({}));
    bigFive.saveBigFive().then(() => {
        return findAndUpdateUser(request, bigFive, 'bigFive');
    }).then(user => {
        if (!user) {
            sendResponse(response, 404, 'User not found');
        }

        sendResponse(response, 200, {
            _id: user._id
        })
    }).catch(error => {
        sendResponse(response, 400, error);
    })
};

module.exports = {
    bigFive
};