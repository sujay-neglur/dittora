const {TransferStatus} = require('../models/transfer');
const {sendResponse, findAndUpdateUser, constructObject} = require('../utilities/utilities');

let transfer = (request, response) => {
    let transferStatus = constructObject(request, new TransferStatus({}));
    transferStatus.saveTransfer().then(() => {
        return findAndUpdateUser(request, transferStatus, 'transferStatus')
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
    transfer
};