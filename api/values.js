const {Values} = require('../models/values');
const {sendResponse, findAndUpdateUser, constructObject} = require('../utilities/utilities');

let values = (request, response) => {
    let value = constructObject(request, new Values({}));
    value.saveValues().then(() => {
        return findAndUpdateUser(request, value, 'values');
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
    values
};