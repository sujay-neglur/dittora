const {User} = require('../models/user');
const {constructObject} = require('../utilities/utilities');
const {sendResponse} = require('../utilities/utilities');

let register = (request, response) => {
    let user = constructObject(request, new User({}));
    user.saveUser().then((user) => {
        sendResponse(response, 200, {
            email:user.email
        });
    }).catch((err) => {
        console.log(err);
        sendResponse(response, 400, err);
    });
};

module.exports = {
    register
};