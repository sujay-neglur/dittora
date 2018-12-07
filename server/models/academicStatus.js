const mongoose = require('mongoose');
const {save} = require('../server/save');
const {StudyLevels} = require('../enums/enums');

/*
past academics schema
oldTypeOfStudent
oldUniversity
previousStatus
oldTypeOfDegree
oldProgramName
oldSelectedStartDate
oldSelectedEndDate
oldGpa
oldOutOf
oldAcademicValue1 - programHappinessMeter
oldAcademicValue2 - relationshipWithOtherPeopleInProgramMeter
oldAcademicValue3 - stressInSemesterMeter
 */

let AcademicStatusSchema = new mongoose.Schema({
    isStudent: {
        type: Boolean
    },
    typeOfStudent: {
        type: StudyLevels
    },
    currentUniversity: {
        type: String
    },
    currentStatus: {
        type: String
    },
    typeOfDegree: {
        type: String
    },
    programName: {
        type: String
    },
    currentStatusTwo: {
        type: String
    },
    typeOfDegreeTwo: {
        type: String
    },
    programNameTwo: {
        type: String
    },
    selectedStartDate: {
        type: Date
    },
    selectedEndDate: {
        type: Date
    },
    academicObtainedMarks: {
        type: Number
    },
    academicTotalMarks: {
        type: Number
    },
    currentProgramSatisfactionMeter: {
        type: Number
    },
    currentRelationshipWithOtherPeopleInProgramMeter: {
        type: Number,
        default: -1
    },
    currentStressInSemesterMeter: {
        type: Number,
        default: -1
    },

    typeOfStudentPast: {
        type: StudyLevels
    },
    universityPast: {
        type: String
    },
    statusPast: {
        type: String
    },
    typeOfDegreePast: {
        type: String
    },
    programNamePast: {
        type: String
    },
    statusTwoPast: {
        type: String
    },
    typeOfDegreeTwoPast: {
        type: String
    },
    programNameTwoPast: {
        type: String
    },
    selectedStartDatePast: {
        type: Date
    },
    selectedEndDatePast: {
        type: Date
    },
    universityTwoPast: {
        type: String
    },
    universityPastGraduate:{
        type:String
    },
    programNamePastGraduate:{
        type:String
    },
    programSatisfactionMeterPast: {
        type: Number
    },
    relationshipWithOtherPeopleInProgramMeterPast: {
        type: Number
    },
    stressInSemesterMeterPast: {
        type: String
    },
    overallAcademicPerformanceMeterPast: {
        type: Number,
        default: -1
    },
    highestAcademicAchievement: {
        type: StudyLevels
    },

});

AcademicStatusSchema.methods.saveAcademicStatus = function () {
    return save(this);
};

let AcademicStatus = mongoose.model('AcademicStatus', AcademicStatusSchema);
module.exports = {
    AcademicStatus,
    StudyLevels
};

/*

    typeOfStudent: {//studylevel
        type: StudyLevels,
        required: true
    },
    university: {
        type: String,
        required: true
    },
    majors: [{
        type: String
    }],
    minors: [{
        type: String
    }],
    typeOfDegree: {
        type: String,
        required: true
    },//adjust the mapping between majors, minors and type of degree
    programName: {
        type: String,
        required: true
    },
    selectedStartDate: {
        type: Date,
        required: true
    },
    selectedEndDate: {
        type: String,
        required: true
    },
    gpa: {
        type: Number,
        required: true
    },
    outOf: {
        type: Number,
        required: true
    },
    academicValue1: {//programHappinessMeter
        type: Number,
        required: true
    },
    academicAchievement: {
        type: StudyLevels,
        required: true
    },
    schoolName: {
        type: String,
        required: true
    },
    typeOfDiploma: {
        type: String,
        required: true
    },
    diplomaName: {
        type: String,
        required: true
    },
    cgpaInSchool: {
        type: Number
    },
    totalCgpaInSchool: {
        type: Number
    },
    academicValue2: {//relationshipWithOtherPeopleInProgramMeter
        type: Number,
        required: true
    },
    academicValue3: {//stressInSemesterMeter
        type: Number,
        required: true
    },
    isStudent: {
        type: Boolean
    },
    user: {
        type: mongoose.Schema.Types.ObjectId, ref: 'User',
        required: true
    }
 */