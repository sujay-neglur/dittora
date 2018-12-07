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
import {addAcademia7} from "../../actions/actions";

import DittoraRegularLogo from '../../images-logos/dittora-regular-logo/dittora-regular-logo.svg';
import UniversityLogo from '../../images-logos/academia/academia1-university.svg';
import AcademiaBalloon from '../../images-logos/academia/academia-balloon.svg';
import AcademiaArrow from '../../images-logos/academia/academia-arrow.svg';

class Academia7 extends React.Component{

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
            typeOfStudentPast: 'type of student',
            universityPast: '',
            statusPast: 'engagement type',
            typeOfDegreePast: 'type of degree',
            programNamePast: '',
            statusTwoPast: 'engagement type',
            typeOfDegreeTwoPast: 'type of degree',
            programNameTwoPast: '',
            startDatePast: moment(),
            endDatePast: moment(),
            selectedStartDatePast: '',
            selectedEndDatePast: '',
            academicObtainedMarksPast: '',
            academicTotalMarksPast: '',
            min: 0,
            max: 10,
            overallAcademicPerformanceMeterPast: 5,
            programSatisfactionMeterPast: 5,
            relationshipWithOtherPeopleInProgramMeterPast: 5,
            stressInSemesterMeterPast: 5,
            doAddMore: false
        }
    }

    setStateCallBack() {
        this.sendToStore();
    }

    sendToStore(){
        console.log('Here in Send Function');
        this.props.dispatch(addAcademia7(this.state.id, {typeOfStudentPast:this.state.typeOfStudentPast,
            universityPast:this.state.universityPast,
            statusPast:this.state.statusPast,
            typeOfDegreePast:this.state.typeOfDegreePast,
            programNamePast:this.state.programNamePast,
            statusTwoPast:this.state.statusTwoPast,
            typeOfDegreeTwoPast:this.state.typeOfDegreeTwoPast,
            programNameTwoPast:this.state.programNameTwoPast,

            overallAcademicPerformanceMeterPast:this.state.overallAcademicPerformanceMeterPast,
            programSatisfactionMeterPast:this.state.programSatisfactionMeterPast,
            relationshipWithOtherPeopleInProgramMeterPast:this.state.relationshipWithOtherPeopleInProgramMeterPast,
            stressInSemesterMeterPast:this.state.stressInSemesterMeterPast}));
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
                typeOfStudentPast: eventKey.target.text
            },
            ()=> {
                this.setStateCallBack();
            });
    }

    handleUniversity(evt) {
        console.log("Changing University Name");
        this.setState({
                universityPast: evt.target.value
            },
            ()=> {
                this.setStateCallBack();
            });
    }

    handleCurrentStatus(evt, eventKey) {
        this.setState({
                statusPast: eventKey.target.text
            },
            ()=> {
                this.setStateCallBack();
            });
    }

    handleTypeOfDegree(evt, eventKey) {
        this.setState({
                typeOfDegreePast: eventKey.target.text
            },
            ()=> {
                this.setStateCallBack();
            });
    }

    handleProgramName(evt) {
        this.setState({
                programNamePast: evt.target.value
            },
            ()=> {
                this.setStateCallBack();
            });
    }


    handleCurrentStatusTwo(evt, eventKey) {
        this.setState({
                statusTwoPast: eventKey.target.text
            },
            ()=> {
                this.setStateCallBack();
            });
    }

    handleTypeOfDegreeTwo(evt, eventKey) {
        this.setState({
                typeOfDegreeTwoPast: eventKey.target.text
            },
            ()=> {
                this.setStateCallBack();
            });
    }

    handleProgramNameTwo(evt) {
        this.setState({
                programNameTwoPast: evt.target.value
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
                startDatePast: date,
                selectedStartDatePast: formattedDate
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
                endDatePast: date,
                selectedEndDatePast: formattedDate
            },
            ()=> {
                this.setStateCallBack();
            });

    }

    handleAcademicObtainedMarks(event) {
        this.setState({academicObtainedMarksPast: event.target.value},
            ()=> {
                this.setStateCallBack();
            });
    }

    handleAcademicTotalMarks(event) {
        this.setState({academicTotalMarksPast: event.target.value},
            ()=> {
                this.setStateCallBack();
            });
    }

    handleAcademicValue1(event) {
        this.setState({programSatisfactionMeterPast: event.target.value},
            ()=> {
                this.setStateCallBack();
            });
    }
    handleAcademicValue2(event) {
        this.setState({relationshipWithOtherPeopleInProgramMeterPast: event.target.value},
            ()=> {
                this.setStateCallBack();
            });
    }
    handleAcademicValue3(event) {
        this.setState({stressInSemesterMeterPast: event.target.value},
            ()=> {
                this.setStateCallBack();
            });
    }

    handleAcademicValue4(event) {
        this.setState({overallAcademicPerformanceMeterPast: event.target.value},
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
        console.log("Academia7 Send Object");
        //console.log(this.props.usersAbout[0].addAcademia1.users);

        //let completeObject = {};
        let objectAcademia1 = this.props.usersAbout[0].addAcademia1.users;
        let objectAcademia6 = this.props.usersAbout[0].addAcademia6.users;
        let objectAcademia7 = this.props.usersAbout[0].addAcademia7.users;



        let object = Object.assign(objectAcademia1, objectAcademia6, objectAcademia7);

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

        console.log('Academia7 Page!');

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


                        <span className='academia4-text-1'>I was an,</span>

                        <input className='academia4-line-1' placeholder="Undergrad" />

                        <span className='academia4-text-2'>student at,</span>

                        <input value={this.state.universityPast} className='academia-university-name'
                               placeholder="university name"
                               onChange={this.handleUniversity}/>

                        <span className='academia-text-3'>I was</span>

                        <span className='academia-line-2'>
                            <DropdownButton
                                bsSize="small"
                                bsStyle={'default'.toLowerCase()}
                                title={this.state.statusPast}
                                key={0}
                                id={'currentStatus'}

                                onSelect={this.handleCurrentStatus}
                            >
                                        <MenuItem eventKey={0} value="Minor">Minoring</MenuItem>
                                        <MenuItem eventKey={1} value="Majoring">Majoring</MenuItem>

                                </DropdownButton>
                        </span>



                        <span className='academia-text-4'>in</span>

                        <span className='academia-type-of-degree'>
                            <DropdownButton
                                bsSize="small"
                                bsStyle={'default'.toLowerCase()}
                                title={this.state.typeOfDegreePast}
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


                        <input value={this.state.programNamePast} className='academia-program-name'
                               placeholder="name of program"
                               onChange={this.handleProgramName}/>

                        <img className='academia-balloon' src={AcademiaBalloon} alt='academia-balloon' />

                        <img className='academia-arrow' src={AcademiaArrow} alt='academia-arrow' />

                        {!this.state.doAddMore ?
                            <button className='academia-add-more-button' onClick={this.addMoreDiv}>
                                add more
                            </button>:
                            <button className='academia-add-more-button' onClick={this.addMoreDiv}>
                                show less
                            </button>
                        }

                        {/*<button className='academia-add-more-button' onClick={this.addMoreDiv}>
                            add more
                        </button>*/}

                        {this.state.doAddMore ?
                            <div>
                                <span className='academia-text-3-two'>I'm currently</span>

                                <span className='academia-line-2-two'>
                            <DropdownButton
                                bsSize="small"
                                bsStyle={'default'.toLowerCase()}
                                title={this.state.statusTwoPast}
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
                                title={this.state.typeOfDegreeTwoPast}
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


                                <input value={this.state.programNameTwoPast} className='academia-program-name-two'
                                       placeholder="name of program"
                                       onChange={this.handleProgramNameTwo}/>
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
                                value={this.state.overallAcademicPerformanceMeterPast}
                                onChange={this.handleAcademicValue4}
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
                                value={this.state.programSatisfactionMeterPast}
                                onChange={this.handleAcademicValue1}
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
                                value={this.state.relationshipWithOtherPeopleInProgramMeterPast}
                                onChange={this.handleAcademicValue2}
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
                                value={this.state.stressInSemesterMeterPast}
                                onChange={this.handleAcademicValue3}
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

export default connect(mapStateToProps)(Academia7);

