const mongoose = require('../db/mongoose');
const {User}= require('./../models/user');
const {AcademicStatus, StudyLevels}= require('../models/academicStatus');

console.log('Hello');
User.findOneAndRemove({}).then(() => {
    let academicStatus= new AcademicStatus({
        studyLevel:StudyLevels.GRADUATE,
        university:'Concordia',
        majors:['AI','ML'],
        minors:[],
        degreeType:'Btech',
        programName:'Computer',
        startDate: new Date('2017-09-01'),
        endDate: new Date('2019-08-31'),
        gpa:3.57,
        programHappinessMeter:7,
        programRelationshipMeter:5,
        stressMeter:8,
        academicAchievement:'UnderGraduate',
        schoolName:'Concordia',
        programType:'Computer Science',
        overallPerformance:[75,100],
        changedProgram:true,
        previousProgram:'Software',
        reasonForTransfer:'Other'
    });
    return academicStatus.saveRecords();
}).then((academicStatus) => {
    let user= new User({
        firstName:'Sujay',
        lastName:'Neglur',
        email:'sujay@example.com',
        password:'123456',
        consent:true,
        gender:'male',
        ethnicity:'indian',
        birthday: new Date('1994-10-05'),
        city:'montreal',
        isStudent:true,
        academicStatus:academicStatus
    });
    return user.saveUser();
}).then((user) => {
    return AcademicStatus.findOne({_id:user.academicStatus});
}).then((record) => {
    console.log(`Academic record is ${record.majors}`);
    
})
