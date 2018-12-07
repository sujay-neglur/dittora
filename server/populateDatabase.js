const file = '../../survey.csv';
const csv = require('csvtojson');
const {User}= require('../models/user');

csv()
    .fromFile(file)
    .then(data => {
        return data;
    })
    .then((data) => {
        for (let entry in data){

        }
    });