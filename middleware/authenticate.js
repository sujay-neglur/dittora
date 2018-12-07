const {User} = require('../models/user');
const bcrypt = require('bcrypt');

const authenticatePassword = (request, response, next) => {
    console.log('Authenticating password');
    let email = request.body.loginEmail;
    console.log(email);
    let userRecord;
    User.findOne({
        email: email
    }).then(user => {
        if (!user) {
            response.status(404).send(`No user with email id ${email}`);
        }
        userRecord = user;
        return bcrypt.compare(request.body.loginPassword, user.password);
    }).then(result => {
        if (result) {
            request.user = userRecord;
            next();
        }
        else response.status(401).send('Invalid password');
    });
}

const authenticateToken= (request,response,next) =>{
    console.log('Authenticating token');
    let token = request.body.token;
    console.log(token);
    User.findByToken(token).then(user => {
        if(!user){
            return Promise.reject();
        }
        request.user=user;
        next();
    }).catch(error => {
        response.status(401).send(error)
    })
}

module.exports = {
    authenticatePassword,
    authenticateToken
}
