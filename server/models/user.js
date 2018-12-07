const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const validator = require('validator');
const {save} = require('../server/save');
const jwt = require('jsonwebtoken')
const KEY = 'abc123';

let UserSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        trim: true,
        minlength: 1
    },
    lastName: {
        type: String,
        required: true,
        trim: true,
        minlength: 1
    },
    email: {
        type: String,
        required: true,
        trim: true,
        minlength: 1,
        // unique: true,
        validate: {
            validator: validator.isEmail,
            message: '{VALUE} is not an email'
        }
    },
    password: {
        type: String,
        required: true,
        minlength: 6
    },
    consent: {
        type: Boolean,
        required: true
    },
    gender: {
        type: String,
    },
    ethnicity: {
        type: String
    },
    birthDate: {
        type: Date
    },
    city: {
        type: String
    },
    academicStatus: {
        type: mongoose.Schema.Types.ObjectId, ref: 'AcademicStatus'
    },
    bigFive: {
        type: mongoose.Schema.Types.ObjectId, ref: 'BigFive'
    },
    currentWork: {
        type: mongoose.Schema.Types.ObjectId, ref: 'CurrentWorkType'
    },
    pastWork: {
        type: mongoose.Schema.Types.ObjectId, ref: 'PastWorkType'
    },
    pss: {
        type: mongoose.Schema.Types.ObjectId, ref: 'PSS'
    },
    transferStatus: {
        type: mongoose.Schema.Types.ObjectId, ref: 'TransferStatus'
    },
    values: {
        type: mongoose.Schema.Types.ObjectId, ref: 'Values'
    },
    tokens: [{
        access: {
            type: String,
            required: true
        },
        token: {
            type: String,
            required: true
        }
    }]
});

UserSchema.methods.saveUser = function () {
    return save(this);
}

UserSchema.pre('save', function (next) {
    let user = this;
    // console.log(`Modified ${user.isModified(user.password)}`)
    bcrypt.genSalt(10)
        .then(salt => bcrypt.hash(user.password, salt))
        .then(hash => {
            user.password = hash;
            next();
        });
});

UserSchema.methods.generateAuthToken = function () {
    let user = this;
    let access = 'auth';
    let token = jwt.sign({
        _id: user._id.toHexString(),
        access: access
    }, KEY,{
        expiresIn: '1h'
    }).toString();
    // console.log(`Inside user schema before concat- ${user.tokens}`);
    user.tokens = user.tokens.concat([{access,token}]);
    user.newToken=token;
    // console.log(`Inside user schema after concat- ${user.tokens}`);
    return user;
};

UserSchema.statics.findByToken = function (token) {
    let decoded;
    try {
        // console.log('decoding');
        decoded = jwt.verify(token, KEY);
    }
    catch (error) {
        return Promise.reject();
    }
    return User.findOne({
        '_id': decoded._id,
        'tokens.token': token,
        'tokens.access': 'auth'
    })
};

let User = mongoose.model('User', UserSchema);
module.exports = {User};