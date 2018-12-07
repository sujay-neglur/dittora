const {sendResponse, findAndUpdateUser} = require('../utilities/utilities');

let basicDetails = (request, response) => {
    findAndUpdateUser(request, request.body.gender, 'gender')
        .then(() => {
            return findAndUpdateUser(request, request.body.ethnicity, 'ethnicity');
        }).then(() => {
        return findAndUpdateUser(request, request.body.city, 'city');
    }).then(() => {
        return findAndUpdateUser(request, new Date(request.body.birthDate), 'birthDate');
    }).then(user => {
        if (!user) {
            sendResponse(response, 404, 'User  not found');
        }
        sendResponse(response, 200, {
            _id: user._id
        });
    }).catch(error => {
        sendResponse(response, 400, error);
    })
};

module.exports = {
    basicDetails
};
