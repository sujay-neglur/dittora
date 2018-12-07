const {app} = require('../middleware/config');
const {db} = require('../db/mongoose');
const port = process.env.PORT || 5000;
const {register} = require('../api/register');
const {authenticateToken, authenticatePassword} = require('../middleware/authenticate')
const {academicStatus} = require('../api/academicStatus');
const {basicDetails} = require('../api/basicDetails');
const {bigFive} = require('../api/bigfive');
const {login} = require('../api/login');
const {pss} = require('../api/pss');
const {transfer} = require('../api/transfer');
const {values} = require('../api/values');
const {currentWorkExperience, pastWorkExperience} = require('../api/workExperience');
const {email} = require('../api/email');

app.post('/academics', authenticateToken, (request, response) => {
    console.log('Academics request received');
    academicStatus(request, response);
});

app.post('/basicDetails', authenticateToken, (request, response) => {
    console.log('Basic details request received');
    basicDetails(request, response);
});

app.post('/bigFive', authenticateToken, (request, response) => {
    console.log('Big five request received');
    bigFive(request, response);
});

app.post('/login', authenticatePassword, (request, response) => {
    console.log('Login request received');
    login(request, response);
});

app.post('/pss', authenticateToken, (request, response) => {
    console.log('PSS request received');
    pss(request, response);
});

app.post('/register', (request, response) => {
    console.log('Register request received');
    register(request, response);
});

app.post('/transfer', authenticateToken, (request, response) => {
    console.log('Transfer request received');
    transfer(request, response);
});

app.post('/values', authenticateToken, (request, response) => {
    console.log('Values request received');
    values(request, response);
});

app.post('/currentWork', authenticateToken, (request, response) => {
    console.log('Current work request received');
    currentWorkExperience(request, response);
});

app.post('/pastWork', authenticateToken, (request, response) => {
    console.log('Past request received');
    pastWorkExperience(request, response);
});

app.post('/email', (request, response) => {
    console.log('Email request received');
    email(request, response);
});

app.get('/',(request,response)=> {
	console.log('Home page1');//dddd
    //response.send('index');
    //response.sendFile('../../public/index.html');
    response.sendFile('index.html', {root: '../../public'});
});
// let ip = '192.168.43.136';

app.listen(port, () => {
    console.log(`App started on port ${port} `);
});


