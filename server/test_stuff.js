// const { AcademicStatus, StudyLevels } = require('../models/academicStatus');
// const { User } = require('../models/user');
// const { mongoose } = require('../db/mongoose');
// const {BigFive} =require('../models/bigfive');
// const {CurrentWorkType} = require('../models/currentWork');
// const {PastWorkType}= require('../models/pastWork');
// const {PSS}= require('../models/pss');
// const {TransferStatus} = require('../models/transfer');
// const {Values} = require('../models/values');
const bcrypt= require('bcryptjs');
const {check} = require('../enums/enums');
const {User} = require('../models/user');

// let academicRecord = new AcademicStatus({
//     studyLevel: StudyLevels.GRADUATE,
//     university: 'Concordia',
//     majors: ['CS'],
//     minors: [],
//     typeOfDegree: 'Masters',
//     nameOfProgram: 'MACS',
//     startDate: new Date(2017, 09, 01),
//     endDate: new Date(2019, 08, 31),
//     gpa: 3.57,
//     programHappinessMeter: 5,
//     academicAchievement: StudyLevels.UNDERGRADUATE,
//     highSchoolName: 'My high school',
//     typeOfDiploma: 'My diploma',
//     diplomaName: 'Diploma',
//     overallPerformanceInSchool: 15,
//     relationshipWithOtherPeopleInProgram: 5,
//     stressMeterInSemester: 8,
//     favoriteSubjectsInHighSchool: ['P', 'C', 'M']
// });

// let bigFive= new BigFive({});
// let currentWorkType= new CurrentWorkType({});
// let pastWorkType= new PastWorkType({});
// let pss= new PSS({});
// let transfer= new TransferStatus({});
// let values= new Values({});

// academicRecord.saveAcademicStatus().then((record) => {
//     let userRecord = new User({
//         firstName: 'Sujay',
//         lastName: 'Neglur',
//         email: 'sujay@example.com',
//         password: '123456',
//         consent: true,
//         academicStatus:record._id
//     });
//     return userRecord.saveUser();
// }).then( user => console.log(user));

// Promise.all([academicRecord.saveAcademicStatus(),
//     bigFive.saveBigFive(),
//     currentWorkType.saveCurrentWork(),
//     pastWorkType.savePastWork(),
//     pss.savePss(),
//     transfer.saveTransfer(),
//     values.saveValues()
// ]).then( values => {
//     let user= new User({
//         firstName:'Sujay',
//         lastName:'Neglur',
//         email:'sujay@example.com',
//         password:'123456',
//         consent:true,
//         academicStatus:values[0]._id,
//         bigFive:values[1]._id,
//         currentWork:values[2]._id,
//         pastWork:values[3]._id,
//         pss:values[4]._id,
//         transferStatus:values[5]._id,
//         values:values[6]._id
//     });
//     return user.saveUser()
// }).then(user => console.log(user));
//
// User.findOne({
//     email:'sujay@example.com'
// }).then((user) => Values.findById({id:user._id}))
// .then(value => console.log(value));
//
// let password='password1';
// let salt = bcrypt.genSaltSync(10);
// let hash= bcrypt.hashSync(password,salt);
// console.log(bcrypt.compareSync(password,hash));
// console.log(bcrypt.compareSync(password,hash));
// console.log( check('hs','study'))
// console.log(check('ft','work'))
// console.log(check('y','resp'));
//
// var object={
//     egg:"plant",
//     func:function () {
//         var self=this;
//         console.log(this.egg);
//         console.log(self.egg);
//        function f() {//execute this from outside using method call
//             console.log(this.egg);//fuck the interviewer
//             console.log(self.egg);
//             console.log("Hello");
//         };
//     }
// };

console.log(new User({}) instanceof User)



