import React from 'react';
import Header from "../Header";
import Action from "../Action";
import FormInput from "../FormInput";
//import {Dropdown, MenuItem} from "semantic-ui-react";

//import { DropdownMenu, MenuItem} from 'react-bootstrap-dropdown-menu';

//import {ButtonToolbar} from 'reactstrap';


import DatePicker from 'react-datepicker';
import moment from 'moment';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
//import 'bootstrap/dist/js/bootstrap.min.js';

import DatePickerClass from '../DatePickerClass';
import 'react-bootstrap/dist/react-bootstrap.js';
import 'react-bootstrap/dist/react-bootstrap.min.js';

import {DropdownButton, Button, MenuItem,ButtonToolbar} from 'react-bootstrap';
import Axios from 'axios';
import {connect} from "react-redux";
import {addAcademia8} from "../../actions/actions";

import DittoraRegularLogo from '../../images-logos/dittora-regular-logo/dittora-regular-logo.svg';
import UniversityLogo from '../../images-logos/academia/academia1-university.svg';
import AcademiaBalloon from '../../images-logos/academia/academia-balloon.svg';
import AcademiaArrow from '../../images-logos/academia/academia-arrow.svg';

class Academia8 extends React.Component{

    constructor(props) {
        super(props);

        this.handleFormData = this.handleFormData.bind(this);
        this.handleTypeOfStudent = this.handleTypeOfStudent.bind(this);
        this.handleUniversity = this.handleUniversity.bind(this);
        this.handleCurrentStatus = this.handleCurrentStatus.bind(this);
        this.handleTypeOfDegree = this.handleTypeOfDegree.bind(this);
        this.handleProgramName = this.handleProgramName.bind(this);


        this.handleCurrentStatusTwo = this.handleCurrentStatusTwo.bind(this);
        this.handleTypeOfDegreeTwo = this.handleTypeOfDegreeTwo.bind(this);
        this.handleProgramNameTwo = this.handleProgramNameTwo.bind(this);
        this.handleUniversityTwo = this.handleUniversityTwo.bind(this);

        this.handleProgramNameGraduate = this.handleProgramNameGraduate.bind(this);
        this.handleUniversityGraduate = this.handleUniversityGraduate.bind(this);

        this.handleStartDate = this.handleStartDate.bind(this);
        this.handleEndDate = this.handleEndDate.bind(this);
        this.handleAcademicObtainedMarks = this.handleAcademicObtainedMarks.bind(this);
        this.handleAcademicTotalMarks = this.handleAcademicTotalMarks.bind(this);

        this.handleAcademicValue1 = this.handleAcademicValue1.bind(this);
        this.handleAcademicValue2 = this.handleAcademicValue2.bind(this);
        this.handleAcademicValue3 = this.handleAcademicValue3.bind(this);
        this.handleAcademicValue4 = this.handleAcademicValue4.bind(this);


        this.addMoreDiv = this.addMoreDiv.bind(this);

        this.callFetch = this.callFetch.bind(this);
        this.initiateCallFetch = this.initiateCallFetch.bind(this);

        this.setStateCallBack = this.setStateCallBack.bind(this);
        //this.handleChange = this.handleChange.bind(this);

        //this.renderDropdownButton = this.renderDropdownButton.bind(this);

        this.state = {
            id: this.props.match.params.id,
            typeOfStudentPastGraduate: 'Graduate Studies',
            universityPastUndergrad: '',
            universityPastGraduate: '',
            currentStatusPastGraduate: 'engagement type',
            typeOfDegreePastGraduate: 'type of degree',
            programNamePastUndergrad: '',
            programNamePastGraduate: '',
            currentStatusTwoPastGraduate: 'engagement type',
            typeOfDegreeTwoPastGraduate: 'type of degree',
            programNameTwoPastUndergrad: '',
            universityTwoPastUndergrad: '',
            startDatePastGraduate: moment(),
            endDatePastGraduate: moment(),
            selectedStartDatePastGraduate: '',
            selectedEndDatePastGraduate: '',
            academicObtainedMarksPastGraduate: '',
            academicTotalMarksPastGraduate: '',
            min: 0,
            max: 10,
            academicPerformancePastGraduate: 5,
            satisfiedWithProgramPastGraduate: 5,
            relationshipsWithOthersPastGraduate: 5,
            stressYouFeelPastGraduate: 5,
            doAddMore: false
        }
    }

    setStateCallBack() {
        this.sendToStore();
    }

    sendToStore(){
        console.log('Here in Send Function');
        this.props.dispatch(addAcademia8(this.state.id, {
            typeOfStudentPastGraduate:this.state.typeOfStudentPastGraduate,
            universityPast:this.state.universityPastUndergrad,
            universityPastGraduate:this.state.universityPastGraduate,
            statusPast:this.state.currentStatusPastGraduate,
            typeOfDegreePast:this.state.typeOfDegreePastGraduate,
            programNamePast:this.state.programNamePastUndergrad,
            programNamePastGraduate:this.state.programNamePastGraduate,
            statusTwoPast:this.state.currentStatusTwoPastGraduate,
            typeOfDegreeTwoPast:this.state.typeOfDegreeTwoPastGraduate,
            programNameTwoPast:this.state.programNameTwoPastUndergrad,
            universityTwoPast:this.state.universityTwoPastUndergrad,

            overallAcademicPerformanceMeterPast:this.state.academicPerformancePastGraduate,
            programSatisfactionMeterPast:this.state.satisfiedWithProgramPastGraduate,
            relationshipWithOtherPeopleInProgramMeterPast:this.state.relationshipsWithOthersPastGraduate,
            stressInSemesterMeterPast:this.state.stressYouFeelPastGraduate}));
    }

    handleFormData(evt) {
        evt.preventDefault();

        //console.log("Handled Form!-------------");
        //console.log("Gender: "+evt.target[0].value);

        let dx = this.state;
        /*console.log(`Ethnicity: ${this.state.gender}`);
        console.log("Ethnicity1: "+this.state.ethnicity);
        console.log("Date: "+this.state.date);
        console.log("City: "+this.state.city);*/
        console.log(dx);
        //this.callFetch(dx);

        /*this.props.dispatch(addAcademia4(this.state.id, {typeOfStudent:this.state.typeOfStudent,
            university:this.state.university,
            currentStatus:this.state.currentStatus,
            typeOfDegree:this.state.typeOfDegree,
            programName:this.state.programName,
            selectedStartDate:this.state.selectedStartDate,
            selectedEndDate:this.state.selectedEndDate,
            academicObtainedMarks:this.state.academicObtainedMarks,
            academicTotalMarks:this.state.academicTotalMarks,
            academicValue1:this.state.academicValue1,
            academicValue2:this.state.academicValue2,
            academicValue3:this.state.academicValue3}));*/

    }

    handleTypeOfStudent(evt, eventKey) {
        console.log("Changing Student!");
        this.setState({
                typeOfStudentPastGraduate: eventKey.target.text
            },
            ()=> {
                this.setStateCallBack();
            });
    }

    handleUniversity(evt) {
        console.log("Changing University Name");
        this.setState({
                universityPastUndergrad: evt.target.value
            },
            ()=> {
                this.setStateCallBack();
            });
    }

    handleUniversityGraduate(evt) {
        console.log("Changing University Name");
        this.setState({
                universityPastGraduate: evt.target.value
            },
            ()=> {
                this.setStateCallBack();
            });
    }

    handleCurrentStatus(evt, eventKey) {
        this.setState({
                currentStatusPastGraduate: eventKey.target.text
            },
            ()=> {
                this.setStateCallBack();
            });
    }

    handleTypeOfDegree(evt, eventKey) {
        this.setState({
                typeOfDegreePastGraduate: eventKey.target.text
            },
            ()=> {
                this.setStateCallBack();
            });
    }

    handleProgramName(evt) {
        this.setState({
                programNamePastUndergrad: evt.target.value
            },
            ()=> {
                this.setStateCallBack();
            });
    }

    handleProgramNameGraduate(evt) {
        this.setState({
                programNamePastGraduate: evt.target.value
            },
            ()=> {
                this.setStateCallBack();
            });
    }


    handleCurrentStatusTwo(evt, eventKey) {
        this.setState({
                currentStatusTwoPastGraduate: eventKey.target.text
            },
            ()=> {
                this.setStateCallBack();
            });
    }

    handleTypeOfDegreeTwo(evt, eventKey) {
        this.setState({
                typeOfDegreeTwoPastGraduate: eventKey.target.text
            },
            ()=> {
                this.setStateCallBack();
            });
    }

    handleProgramNameTwo(evt) {
        this.setState({
                programNameTwoPastUndergrad: evt.target.value
            },
            ()=> {
                this.setStateCallBack();
            });
    }

    handleUniversityTwo(evt) {
        this.setState({
                universityTwoPastUndergrad: evt.target.value
            },
            ()=> {
                this.setStateCallBack();
            });
    }

    /*handleBirthday(data) {

        console.log("In Birthday!");
        this.setState({
            date: data
        });
    }*/

    /*handleChange(date) {
        console.log("In Change!");
        console.log(date);
    }*/

    handleStartDate(date) {
        //console.log(this.state.date + " "+ typeof this.state.date);

        const formattedDate = moment(date).format('YYYY/MM/DD');

        console.log("Date : " + formattedDate);
        console.log(typeof formattedDate);
        this.setState({
                startDatePastGraduate: date,
                selectedStartDatePastGraduate: formattedDate
            },
            ()=> {
                this.setStateCallBack();
            });

    }

    handleEndDate(date) {
        //console.log(this.state.date + " "+ typeof this.state.date);

        const formattedDate = moment(date).format('YYYY/MM/DD');

        console.log("Date : " + formattedDate);
        console.log(typeof formattedDate);
        this.setState({
                endDatePastGraduate: date,
                selectedEndDatePastGraduate: formattedDate
            },
            ()=> {
                this.setStateCallBack();
            });

    }

    handleAcademicObtainedMarks(event) {
        this.setState({academicObtainedMarksPastGraduate: event.target.value},
            ()=> {
                this.setStateCallBack();
            });
    }

    handleAcademicTotalMarks(event) {
        this.setState({academicTotalMarksPastGraduate: event.target.value},
            ()=> {
                this.setStateCallBack();
            });
    }

    handleAcademicValue1(event) {
        this.setState({academicPerformancePastGraduate: event.target.value},
            ()=> {
                this.setStateCallBack();
            });
    }
    handleAcademicValue2(event) {
        this.setState({satisfiedWithProgramPastGraduate: event.target.value},
            ()=> {
                this.setStateCallBack();
            });
    }
    handleAcademicValue3(event) {
        this.setState({relationshipsWithOthersPastGraduate: event.target.value},
            ()=> {
                this.setStateCallBack();
            });
    }

    handleAcademicValue4(event) {
        this.setState({stressYouFeelPastGraduate: event.target.value},
            ()=> {
                this.setStateCallBack();
            });
    }




    addMoreDiv() {
        console.log("Div is to be added!");

        this.setState({doAddMore: !this.state.doAddMore},
            () => {
                console.log(this.state.doAddMore);
            });
    }


    initiateCallFetch(){
        console.log("Academia8 Send Object");
        //console.log(this.props.usersAbout[0].addAcademia1.users);

        //let completeObject = {};
        let objectAcademia1 = this.props.usersAbout[0].addAcademia1.users;
        let objectAcademia6 = this.props.usersAbout[0].addAcademia6.users;
        let objectAcademia8 = this.props.usersAbout[0].addAcademia8.users;



        let object = Object.assign(objectAcademia1, objectAcademia6, objectAcademia8);

        object.token = this.props.usersAbout[0].token;

        console.log(object);
        //object
        this.callFetch(object)
    }


    callFetch(dx) {
        console.log("In callFetch");
        console.log(dx);
        /*header('Access-Control-Allow-Origin: *');
        header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
        header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');*/
        //Axios.post('/data', {id: 'id here'})


        fetch('http://localhost:5000/academics', {
            method: 'POST',
            //headers: {} <-- You can include some headers if you want
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(dx)
        })
            .then(res => {
                console.log(res);
                return res.json()
            })
            .then(users => {
                console.log(users);
                this.setState({ users })
            });

    }





    render(){

        console.log('Academia4 Page!');

        const title = "Let's talk about your academic status";
        const action = "/transfer1";
        const actionButtonData = "Next";
        const actionButtonClass = "home-button-down";
        const inputRight = "input__Text__Right";
        const inputLeft = "input__Text__Left";
        const inputLeft2 = "input__Text__Left2";
        const date = '';
        return(

            <div>
                <img className='dittora-regular-logo' src={DittoraRegularLogo} alt='dittora-regular-logo' />
                <img className='university-logo' src={UniversityLogo} alt='university-logo' />
                <span className="academia1-border-header">Let’s talk about your {' '}
                    <span style={{'color':'#DD417C'}}>Academic Status...</span>
                </span>
                {
                    <div className='container'>


                        <p className='academia4-border-small-header'>Fill in the blanks</p>

                        <span className='academia4-border'></span>


                        <span className='academia-other-text-1'>I was doing my</span>

                        <span className='academia-other-line-1'>Graduate Studies</span>

                        {/*<input className='academia-other-line-1' placeholder="graduate studies" />*/}

                        <span className='academia-other-text-2'>in</span>

                        <input value={this.state.programNamePastGraduate} className='academia-other-graduate-program-name'
                               placeholder="name of program"
                               onChange={this.handleProgramNameGraduate}/>



                        <span className='academia-other-text-3'>, at</span>

                        <input value={this.state.universityPastGraduate} className='academia-other-graduate-university-name'
                               placeholder="university name"
                               onChange={this.handleUniversityGraduate}/>

                        <span className='academia-other-text-4'>When I was an undergraduate, I was </span>

                        <span className='academia-other-engagement-type'>
                            <DropdownButton
                                bsSize="small"
                                bsStyle={'default'.toLowerCase()}
                                title={this.state.currentStatusPastGraduate}
                                key={0}
                                id={'currentStatus'}

                                onSelect={this.handleCurrentStatus}
                            >
                                        <MenuItem eventKey={0} value="Minor">Minoring</MenuItem>
                                        <MenuItem eventKey={1} value="Majoring">Majoring</MenuItem>

                                </DropdownButton>
                        </span>





                        <span className='academia-other-text-5'>in</span>

                        <span className='academia-other-type-of-degree'>
                            <DropdownButton
                                bsSize="small"
                                bsStyle={'default'.toLowerCase()}
                                title={this.state.typeOfDegreePastGraduate}
                                key={0}
                                id={'currentStatus'}

                                size="5"

                                onSelect={this.handleTypeOfDegree}
                            >
                            <MenuItem eventKey={0} value="Architecture">B.Architecture</MenuItem>
                            <MenuItem eventKey={1} value="BiomedicalScience">B.Biomedical Science</MenuItem>
                            <MenuItem eventKey={2} value="BA">B.Business Administration</MenuItem>
                            <MenuItem eventKey={3} value="ClinicalScience">B.Clinical Sciences</MenuItem>
                            <MenuItem eventKey={4} value="Commerce">B.Commerce</MenuItem>
                            <MenuItem eventKey={5} value="ComputerApplications">B.Computer Applications</MenuItem>
                            <MenuItem eventKey={6} value="CommunityHealth">B.Community Health</MenuItem>
                            <MenuItem eventKey={7} value="CIS">B.Computer Information Systems</MenuItem>
                            <MenuItem eventKey={8} value="ConstructionTechnology">B.Sc.Construction Technology</MenuItem>
                            <MenuItem eventKey={9} value="CriminalJustice">B.Criminal Justice</MenuItem>
                            <MenuItem eventKey={10} value="Divinity">B.Divinity</MenuItem>
                            <MenuItem eventKey={11} value="Economics">B.Economics</MenuItem>
                            <MenuItem eventKey={12} value="Education">B.Education</MenuItem>
                            <MenuItem eventKey={13} value="Engineering">B.Engineering</MenuItem>
                            <MenuItem eventKey={14} value="FineArts">B.Fine Arts</MenuItem>
                            <MenuItem eventKey={15} value="Letters">B.Letters</MenuItem>
                            <MenuItem eventKey={16} value="InformationSystems">B.Information Systems</MenuItem>
                            <MenuItem eventKey={17} value="Management">B.Management</MenuItem>
                            <MenuItem eventKey={18} value="Music">Music</MenuItem>
                            <MenuItem eventKey={19} value="Pharmacy">B.Pharmacy</MenuItem>
                            <MenuItem eventKey={20} value="Philosophy">B.Philosophy</MenuItem>
                            <MenuItem eventKey={21} value="SocialWork">B.Social Work</MenuItem>
                            <MenuItem eventKey={22} value="Technology">B.Technology</MenuItem>
                            <MenuItem eventKey={23} value="Accountancy">B.Accountancy</MenuItem>

                        </DropdownButton>
                        </span>

                        <input value={this.state.programNamePastUndergrad} className='academia-other-program-name'
                               placeholder="name of program"
                               onChange={this.handleProgramName}/>

                        <span className='academia-other-text-6'>, at the</span>

                        <input value={this.state.universityPastUndergrad} className='academia-other-university-name'
                               placeholder="university name"
                               onChange={this.handleUniversity}/>



                        <img className='academia-other-balloon' src={AcademiaBalloon} alt='academia-other-balloon' />

                        <img className='academia-other-arrow' src={AcademiaArrow} alt='academia-other-arrow' />

                        {!this.state.doAddMore ?
                            <button className='academia-other-add-more-button' onClick={this.addMoreDiv}>
                                add more
                            </button>:
                            <button className='academia-other-add-more-button' onClick={this.addMoreDiv}>
                                show less
                            </button>
                        }

                        {/*<button className='academia-other-add-more-button' onClick={this.addMoreDiv}>
                            add more
                        </button>*/}

                        {this.state.doAddMore ?
                            <div>
                                <span className='academia-other-text-4-two'>When I was an undergraduate, I was </span>

                                <span className='academia-other-engagement-type-two'>
                            <DropdownButton
                                bsSize="small"
                                bsStyle={'default'.toLowerCase()}
                                title={this.state.currentStatusTwoPastGraduate}
                                key={0}
                                id={'currentStatus'}

                                onSelect={this.handleCurrentStatusTwo}
                            >
                                        <MenuItem eventKey={0} value="Minor">Minoring</MenuItem>
                                        <MenuItem eventKey={1} value="Majoring">Majoring</MenuItem>

                                </DropdownButton>
                        </span>





                                <span className='academia-other-text-5-two'>in</span>

                                <span className='academia-other-type-of-degree-two'>
                            <DropdownButton
                                bsSize="small"
                                bsStyle={'default'.toLowerCase()}
                                title={this.state.typeOfDegreeTwoPastGraduate}
                                key={0}
                                id={'currentStatus'}

                                size="5"

                                onSelect={this.handleTypeOfDegreeTwo}
                            >
                            <MenuItem eventKey={0} value="Architecture">B.Architecture</MenuItem>
                            <MenuItem eventKey={1} value="BiomedicalScience">B.Biomedical Science</MenuItem>
                            <MenuItem eventKey={2} value="BA">B.Business Administration</MenuItem>
                            <MenuItem eventKey={3} value="ClinicalScience">B.Clinical Sciences</MenuItem>
                            <MenuItem eventKey={4} value="Commerce">B.Commerce</MenuItem>
                            <MenuItem eventKey={5} value="ComputerApplications">B.Computer Applications</MenuItem>
                            <MenuItem eventKey={6} value="CommunityHealth">B.Community Health</MenuItem>
                            <MenuItem eventKey={7} value="CIS">B.Computer Information Systems</MenuItem>
                            <MenuItem eventKey={8} value="ConstructionTechnology">B.Sc.Construction Technology</MenuItem>
                            <MenuItem eventKey={9} value="CriminalJustice">B.Criminal Justice</MenuItem>
                            <MenuItem eventKey={10} value="Divinity">B.Divinity</MenuItem>
                            <MenuItem eventKey={11} value="Economics">B.Economics</MenuItem>
                            <MenuItem eventKey={12} value="Education">B.Education</MenuItem>
                            <MenuItem eventKey={13} value="Engineering">B.Engineering</MenuItem>
                            <MenuItem eventKey={14} value="FineArts">B.Fine Arts</MenuItem>
                            <MenuItem eventKey={15} value="Letters">B.Letters</MenuItem>
                            <MenuItem eventKey={16} value="InformationSystems">B.Information Systems</MenuItem>
                            <MenuItem eventKey={17} value="Management">B.Management</MenuItem>
                            <MenuItem eventKey={18} value="Music">Music</MenuItem>
                            <MenuItem eventKey={19} value="Pharmacy">B.Pharmacy</MenuItem>
                            <MenuItem eventKey={20} value="Philosophy">B.Philosophy</MenuItem>
                            <MenuItem eventKey={21} value="SocialWork">B.Social Work</MenuItem>
                            <MenuItem eventKey={22} value="Technology">B.Technology</MenuItem>
                            <MenuItem eventKey={23} value="Accountancy">B.Accountancy</MenuItem>

                        </DropdownButton>
                        </span>

                                <input value={this.state.programNameTwoPastUndergrad} className='academia-other-program-name-two'
                                       placeholder="name of program"
                                       onChange={this.handleProgramNameTwo}/>

                                <span className='academia-other-text-6-two'>, at the</span>

                                <input value={this.state.universityTwoPastUndergrad} className='academia-other-university-name-two'
                                       placeholder="university name"
                                       onChange={this.handleUniversityTwo}/>















                            {/*
                                <span className='academia-text-3-two'>I'm currently</span>

                                <span className='academia-line-2-two'>
                            <DropdownButton
                                bsSize="small"
                                bsStyle={'default'.toLowerCase()}
                                title={this.state.currentStatusTwoPastGraduate}
                                key={0}
                                id={'currentStatus'}

                                onSelect={this.handleCurrentStatusTwo}
                            >
                                        <MenuItem eventKey={0} value="Minor">Minoring</MenuItem>
                                        <MenuItem eventKey={1} value="Majoring">Majoring</MenuItem>

                                </DropdownButton>
                        </span>



                                <span className='academia-text-4-two'>in</span>

                                <span className='academia-type-of-degree-two'>
                            <DropdownButton
                                bsSize="small"
                                bsStyle={'default'.toLowerCase()}
                                title={this.state.typeOfDegreeTwoPastGraduate}
                                key={0}
                                id={'currentStatus'}

                                size="5"

                                onSelect={this.handleTypeOfDegreeTwo}
                            >
                            <MenuItem eventKey={0} value="Architecture">B.Architecture</MenuItem>
                            <MenuItem eventKey={1} value="BiomedicalScience">B.Biomedical Science</MenuItem>
                            <MenuItem eventKey={2} value="BA">B.Business Administration</MenuItem>
                            <MenuItem eventKey={3} value="ClinicalScience">B.Clinical Sciences</MenuItem>
                            <MenuItem eventKey={4} value="Commerce">B.Commerce</MenuItem>
                            <MenuItem eventKey={5} value="ComputerApplications">B.Computer Applications</MenuItem>
                            <MenuItem eventKey={6} value="CommunityHealth">B.Community Health</MenuItem>
                            <MenuItem eventKey={7} value="CIS">B.Computer Information Systems</MenuItem>
                            <MenuItem eventKey={8} value="ConstructionTechnology">B.Sc.Construction Technology</MenuItem>
                            <MenuItem eventKey={9} value="CriminalJustice">B.Criminal Justice</MenuItem>
                            <MenuItem eventKey={10} value="Divinity">B.Divinity</MenuItem>
                            <MenuItem eventKey={11} value="Economics">B.Economics</MenuItem>
                            <MenuItem eventKey={12} value="Education">B.Education</MenuItem>
                            <MenuItem eventKey={13} value="Engineering">B.Engineering</MenuItem>
                            <MenuItem eventKey={14} value="FineArts">B.Fine Arts</MenuItem>
                            <MenuItem eventKey={15} value="Letters">B.Letters</MenuItem>
                            <MenuItem eventKey={16} value="InformationSystems">B.Information Systems</MenuItem>
                            <MenuItem eventKey={17} value="Management">B.Management</MenuItem>
                            <MenuItem eventKey={18} value="Music">Music</MenuItem>
                            <MenuItem eventKey={19} value="Pharmacy">B.Pharmacy</MenuItem>
                            <MenuItem eventKey={20} value="Philosophy">B.Philosophy</MenuItem>
                            <MenuItem eventKey={21} value="SocialWork">B.Social Work</MenuItem>
                            <MenuItem eventKey={22} value="Technology">B.Technology</MenuItem>
                            <MenuItem eventKey={23} value="Accountancy">B.Accountancy</MenuItem>

                        </DropdownButton>
                        </span>


                                <input className='academia-program-name-two'
                                       placeholder={this.state.programNameTwoPastGraduate}
                                       onChange={this.handleProgramNameTwo}/>*/}
                            </div> : ''}



                        <span className='academia-slider-4-text'>
                            How would you rate your overall academic performance?
                        </span>

                        <span className='academia-slider-4-left'>I did really bad</span>


                        <span className='academia-slider-4'>
                            <input
                                id="typeinp"
                                type="range"
                                min="0" max="10"
                                value={this.state.academicPerformancePastGraduate}
                                onChange={this.handleAcademicValue1}
                                step="1"/>
                        </span>



                        <span className='academia-slider-4-right'>I did really well</span>


                        <span className='academia-slider-1-text'>
                            How satisfied are you with your program?
                        </span>

                        <span className='academia-slider-1-left'>I hate it</span>


                        <span className='academia-slider-1'>
                            <input
                                id="typeinp"
                                type="range"
                                min="0" max="10"
                                value={this.state.satisfiedWithProgramPastGraduate}
                                onChange={this.handleAcademicValue2}
                                step="1"/>
                        </span>



                        <span className='academia-slider-1-right'>I love it</span>


                        <span className='academia-slider-2-text'>
                            How are your relationships with other people in your program?
                        </span>

                        <span className='academia-slider-2-left'>I feel isolated and left out</span>


                        <span className='academia-slider-2'>
                            <input
                                id="typeinp"
                                type="range"
                                min="0" max="10"
                                value={this.state.relationshipsWithOthersPastGraduate}
                                onChange={this.handleAcademicValue3}
                                step="1"/>
                        </span>



                        <span className='academia-slider-2-right'>I feel that I belong here</span>




                        <span className='academia-slider-3-text'>
                            How stressed did you feel throughout the semester?
                        </span>

                        <span className='academia-slider-3-left'>I feel stressed all the time</span>


                        <span className='academia-slider-3'>
                            <input
                                id="typeinp"
                                type="range"
                                min="0" max="10"
                                value={this.state.stressYouFeelPastGraduate}
                                onChange={this.handleAcademicValue4}
                                step="1"/>
                        </span>



                        <span className='academia-slider-3-right'>I feel relaxed most of the time</span>

                        <div onClick={this.initiateCallFetch}>
                        <Action action={action}
                                actionButtonData={actionButtonData}
                                classButton='academia-button'
                                sendID={this.state.id}/>
                        </div>

                    </div>
                }



            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        usersAbout: state.users
    }
}

export default connect(mapStateToProps)(Academia8);

