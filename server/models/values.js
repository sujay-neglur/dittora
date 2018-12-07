const mongoose = require('mongoose');
const {save} = require('../server/save');

let ValuesSchema = new mongoose.Schema({
    workAloneVsWithPeople: { //workAloneVsWithPeople
        type: Number,
        default: 0
    },
    practicalLearningVsAcademicEnvironment: {//practicalLearningVsAcademicEnvironment
        type: Number,
        default: 0
    },
    doingTheJobVsDirectingOthers: { //doingTheJobVsDirectingOthers
        type: Number,
        default: 0
    },
    riskTakingVsNoRisk: {//riskTakingVsNoRisk
        type: Number,
        default: 0
    },
    independentContributorVsTeamPlayer: {//independentContributorVsTeamPlayer
        type: Number,
        default: 0
    },
    hobbies: [{
        type: String
    }],
    user: {
        type: mongoose.Schema.Types.ObjectId, ref: 'User',
        required: true
    },
    valuesList: [{
        type: String
    }],
    favoriteSubjects: [{
        type: String
    }]
});

ValuesSchema.methods.saveValues = function () {
    return save(this);
}

let Values = mongoose.model('Values', ValuesSchema);
module.exports = {
    Values
};