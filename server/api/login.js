const _ = require('lodash');
const {sendResponse, findAndUpdateUser} = require('../utilities/utilities');


let login = (request, response) => {
    let user = request.user.generateAuthToken();
    let token = user.newToken;
    // let access = user.tokens[0].access;
    findAndUpdateUser(request, user.tokens, 'tokens')
        .then(user => {
            if (!user) {
                console.log('user not found')
                sendResponse(response, 404, 'User not found');
            }
            response.header('x-auth', token);
            console.log('sending response')
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

