const _ = require('lodash');
const {sendResponse, findAndUpdateUser} = require('../utilities/utilities');


let login = (request, response) => {
    let user = request.user.generateAuthToken();
    let token = user.newToken;
    // let access = user.tokens[0].access;
    findAndUpdateUser(request, user.tokens, 'tokens')
        .then(user => {
            if (!user) {
                sendResponse(response, 404, 'User not found');
            }
            response.header('x-auth', token);
            sendResponse(response, 200, {
                _id: user._id,
                token: token,
                firstName: user.firstName
            });
        }).catch(error => {
        sendResponse(response, 400, error);
    })
};

module.exports = {
    login
};

