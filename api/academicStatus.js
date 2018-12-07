const {AcademicStatus} = require('../models/academicStatus');
const {sendResponse, findAndUpdateUser, constructObject} = require('../utilities/utilities');


let academicStatus=(request, response) => {
    let academicStatus = constructObject(request, new AcademicStatus({}));
    academicStatus.saveAcademicStatus().then(() => {
        return findAndUpdateUser(request, academicStatus, 'academicStatus');
    }).then(user => {
        if (!user) {
            sendResponse(response, 404, 'User not found');
        }
        sendResponse(response, 200, {
            _id: user._id
        });
    });
};

module.exports={
    academicStatus
};
