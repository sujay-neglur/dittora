const {PSS} = require('../models/pss');
const {sendResponse, findAndUpdateUser, constructObject} = require('../utilities/utilities');

let pss = (request, response) => {
    let pss = constructObject(request, new PSS({}));
    pss.savePss().then(() => {
        return findAndUpdateUser(request, pss, 'pss')
    }).then(user => {
        if (!user) {
            sendResponse(response, 404, 'User not found');
        }
        sendResponse(response, 200, {
            _id: user._id
        })
    }).catch(error => {
        sendResponse(response, 400, error);
    });
};

module.exports = {
    pss
};