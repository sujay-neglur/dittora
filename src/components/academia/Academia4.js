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
import {addAcademia4} from "../../actions/actions";

import DittoraRegularLogo from '../../images-logos/dittora-regular-logo/dittora-regular-logo.svg';
import UniversityLogo from '../../images-logos/academia/academia1-university.svg';
import AcademiaBalloon from '../../images-logos/academia/academia-balloon.svg';
import AcademiaArrow from '../../images-logos/academia/academia-arrow.svg';

class Academia4 extends React.Component{

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

        this.addMoreDiv = this.addMoreDiv.bind(this);

        this.callFetch = this.callFetch.bind(this);
        this.initiateCallFetch = this.initiateCallFetch.bind(this);

        this.setStateCallBack = this.setStateCallBack.bind(this);
        //this.handleChange = this.handleChange.bind(this);

        //this.renderDropdownButton = this.renderDropdownButton.bind(this);

        this.state = {
            id: this.props.match.params.id,
            typeOfStudent: 'type of student',
            currentUniversity: '',
            currentStatus: 'engagement type',
            typeOfDegree: 'type of degree',
            programName: '',
            currentStatusTwo: 'engagement type',
            typeOfDegreeTwo: 'type of degree',
            programNameTwo: '',
            startDate: moment(),
            endDate: moment(),
            selectedStartDate: '',
            selectedEndDate: '',
            academicObtainedMarks: '',
            academicTotalMarks: '',
            min: 0,
            max: 10,
            currentProgramSatisfactionMeter: 5,
            currentRelationshipWithOtherPeopleInProgramMeter: 5,
            currentStressInSemesterMeter: 5,
            doAddMore: false
        }
    }

    setStateCallBack() {
        this.sendToStore();
    }

    sendToStore(){
        console.log('Here in Send Function');
        this.props.dispatch(addAcademia4(this.state.id, {typeOfStudent:this.state.typeOfStudent,
            currentUniversity:this.state.currentUniversity,
            currentStatus:this.state.currentStatus,
            typeOfDegree:this.state.typeOfDegree,
            programName:this.state.programName,
            currentStatusTwo:this.state.currentStatusTwo,
            typeOfDegreeTwo:this.state.typeOfDegreeTwo,
            programNameTwo:this.state.programNameTwo,
            selectedStartDate:this.state.selectedStartDate,
            selectedEndDate:this.state.selectedEndDate,
            academicObtainedMarks:this.state.academicObtainedMarks,
            academicTotalMarks:this.state.academicTotalMarks,
            currentProgramSatisfactionMeter:this.state.currentProgramSatisfactionMeter,
            currentRelationshipWithOtherPeopleInProgramMeter:this.state.currentRelationshipWithOtherPeopleInProgramMeter,
            currentStressInSemesterMeter:this.state.currentStressInSemesterMeter}));
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
            typeOfStudent: eventKey.target.text
        },
            ()=> {
                this.setStateCallBack();
            });
    }

    handleUniversity(evt) {
        console.log("Changing University Name");
        this.setState({
            currentUniversity: evt.target.value
        },
            ()=> {
                this.setStateCallBack();
            });
    }

    handleCurrentStatus(evt, eventKey) {
        this.setState({
            currentStatus: eventKey.target.text
        },
            ()=> {
                this.setStateCallBack();
            });
    }

    handleTypeOfDegree(evt, eventKey) {
        this.setState({
            typeOfDegree: eventKey.target.text
        },
            ()=> {
                this.setStateCallBack();
            });
    }

    handleProgramName(evt) {
        this.setState({
            programName: evt.target.value
        },
            ()=> {
                this.setStateCallBack();
            });
    }


    handleCurrentStatusTwo(evt, eventKey) {

        console.log(this.state.currentStatusTwo);

        this.setState({
                currentStatusTwo: eventKey.target.text
            },
            ()=> {
                this.setStateCallBack();
            });
    }

    handleTypeOfDegreeTwo(evt, eventKey) {
        this.setState({
                typeOfDegreeTwo: eventKey.target.text
            },
            ()=> {
                this.setStateCallBack();
            });
    }

    handleProgramNameTwo(evt) {
        this.setState({
                programNameTwo: evt.target.value
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
            startDate: date,
            selectedStartDate: formattedDate
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
            endDate: date,
            selectedEndDate: formattedDate
        },
            ()=> {
                this.setStateCallBack();
            });

    }

    handleAcademicObtainedMarks(event) {
        this.setState({academicObtainedMarks: event.target.value},
            ()=> {
                this.setStateCallBack();
            });
    }

    handleAcademicTotalMarks(event) {
        this.setState({academicTotalMarks: event.target.value},
            ()=> {
                this.setStateCallBack();
            });
    }

    handleAcademicValue1(event) {
        this.setState({currentProgramSatisfactionMeter: event.target.value},
            ()=> {
                this.setStateCallBack();
            });
    }
    handleAcademicValue2(event) {
        this.setState({currentRelationshipWithOtherPeopleInProgramMeter: event.target.value},
            ()=> {
                this.setStateCallBack();
            });
    }
    handleAcademicValue3(event) {
        this.setState({currentStressInSemesterMeter: event.target.value},
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
        console.log("Academia4 Send Object");
        //console.log(this.props.usersAbout[0].addAcademia1.users);

        //let completeObject = {};
        let objectAcademia1 = this.props.usersAbout[0].addAcademia1.users;
        let objectAcademia2 = this.props.usersAbout[0].addAcademia2.users;
        let objectAcademia4 = this.props.usersAbout[0].addAcademia4.users;



        let object = Object.assign(objectAcademia1, objectAcademia2, objectAcademia4);

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


        fetch('http://localhost:5000/academics', {  //http://192.168.0.133:3000/
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


                        <span className='academia4-text-1'>Today I'm an,</span>

                        <span className='academia4-line-1'>Undergraduate</span>

                        {/*<input className='academia4-line-1' placeholder="Undergraduate" />*/}

                        <span className='academia4-text-2'>student at,</span>

                        <input value={this.state.currentUniversity} className='academia-university-name'
                               placeholder="university name"
                               onChange={this.handleUniversity}/>

                        <span className='academia-text-3'>I'm currently</span>

                        <span className='academia-line-2'>
                            <DropdownButton
                                bsSize="small"
                                bsStyle={'default'.toLowerCase()}
                                title={this.state.currentStatus}
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
                                title={this.state.typeOfDegree}
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


                        <input value={this.state.programName} className='academia-program-name'
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
                                title={this.state.currentStatusTwo}
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
                                title={this.state.typeOfDegreeTwo}
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


                                <input value={this.state.programNameTwo} className='academia-program-name-two'
                                       placeholder="name of program"
                                       onChange={this.handleProgramNameTwo}/>
                        </div> : ''}

                        <span className='academia-text-5'>I started</span>

                        <span className='academia-start-date'>
                            <DatePicker
                                selected={this.state.startDate}
                                onChange={this.handleStartDate}
                                id="Start-Date"

                        />
                        </span>

                        <span className='academia-text-6'>and I expect to graduate by</span>

                        <span className='academia-end-date'>
                            <DatePicker
                                selected={this.state.endDate}
                                onChange={this.handleEndDate}
                                id="End-Date"

                            />
                        </span>

                        <span className='academia-text-7'>My cumulative GPA is</span>

                        <input className='academia-gpa-obtained' placeholder={this.state.obtainedMarks}
                               onChange={this.handleAcademicObtainedMarks}/>

                        <span className='academia-slash'>/</span>

                        <input className='academia-gpa-total' placeholder={this.state.totalMarks}
                               onChange={this.handleAcademicTotalMarks}/>

                        <span className='academia-slider-1-text'>
                            How satisfied are you with your program?
                        </span>

                        <span className='academia-slider-1-left'>I hate it</span>


                        <span className='academia-slider-1'>
                            <input
                                id="typeinp"
                                type="range"
                                min="0" max="10"
                                value={this.state.currentProgramSatisfactionMeter}
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
                                value={this.state.currentRelationshipWithOtherPeopleInProgramMeter}
                                onChange={this.handleAcademicValue2}
                                step="1"/>
                        </span>



                        <span className='academia-slider-2-right'>I feel that I belong here</span>




                        <span className='academia-slider-3-text'>
                            How stressed do you feel throughout the semester?
                        </span>

                        <span className='academia-slider-3-left'>I feel stressed all the time</span>


                        <span className='academia-slider-3'>
                            <input
                                id="typeinp"
                                type="range"
                                min="0" max="10"
                                value={this.state.currentStressInSemesterMeter}
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

export default connect(mapStateToProps)(Academia4);



/*/!*data={this.state.date}*!/*/

{/*/!*data={this.state.date}*!/*/}
/*
<div className='container__Big'>
    <p className='paragraph__Text2'>Fill in the blank!</p>
    <div className='borderDiv__Big'>
        <form className="form__Text" onSubmit={this.handleFormData}>

            <div className='div__Button'>
                                <span className='span__Text2'>
                                Today, I'm an
                                </span>

                <span className="span__Container_Left_Right">
                                    <DropdownButton
                                        bsSize="small"
                                        bsStyle={'default'.toLowerCase()}
                                        title={this.state.typeOfStudent}
                                        key={0}
                                        id={'typeOfStudent'}

                                        onSelect={this.handleTypeOfStudent}
                                    >
                                        <MenuItem eventKey={0} value="Undergrad">Undergrad</MenuItem>
                                        <MenuItem eventKey={1} value="Graduate">Graduate</MenuItem>
                                        <MenuItem eventKey={1} value="Doctorate">Doctorate</MenuItem>

                                </DropdownButton>
                                </span>

                <span className='span__Text2'>
                                student,at the
                                </span>

                <input className="input__Text__Left" placeholder={this.state.university}
                       onChange={this.handleUniversity}/>

            </div>


            {/!*{this.state.genderTrialList.map(this.renderDropdownButton)}*!/}

            {/!*<Dropdown title="Select Gender" list={this.state.genderList}/>*!/}


            <div className='div__Button'>
                                <span className='span__Text2'>
                                I'm currently
                                </span>

                <span className="span__Container_Left_Right">
                                    <DropdownButton
                                        bsSize="small"
                                        bsStyle={'default'.toLowerCase()}
                                        title={this.state.currentStatus}
                                        key={0}
                                        id={'currentStatus'}

                                        onSelect={this.handleCurrentStatus}
                                    >
                                        <MenuItem eventKey={0} value="Minor">Minoring</MenuItem>
                                        <MenuItem eventKey={1} value="Majoring">Majoring</MenuItem>

                                </DropdownButton>
                                </span>

                <span className='span__Text2'>
                                in
                                </span>

                <span className="span__Container_Left_Right">
                                    <DropdownButton
                                        bsSize="small"
                                        bsStyle={'default'.toLowerCase()}
                                        title={this.state.typeOfDegree}
                                        key={0}
                                        id={'currentStatus'}

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


                <input className="input__Text__Left" placeholder={this.state.programName}
                       onChange={this.handleProgramName}/>
            </div>

            {/!*<input className={inputLeft} placeholder={this.state.ethnicity}
                                        onChange={this.handleEthnicity}/>*!/}


            <div className='div__Button2'>
                                <span className='span__Text2'>
                                I started
                                </span>
                {/!*<DatePickerClass date={this.props.data} onChange={this.handleBirthday}/>*!/}
                <span className="span__Container_Left_Right">
                                    <DatePicker
                                        selected={this.state.startDate}
                                        onChange={this.handleStartDate}
                                        id="Start-Date"
                                        /!*data={this.state.date}*!/
                                    />
                                </span>

                <span className='span__Text2'>
                                and I expect to graduate by
                                </span>
                {/!*<DatePickerClass date={this.props.data} onChange={this.handleBirthday}/>*!/}
                <span className="span__Container_Left_Right">
                                    <DatePicker
                                        selected={this.state.endDate}
                                        onChange={this.handleEndDate}
                                        id="End-Date"
                                        /!*data={this.state.date}*!/
                                    />
                                </span>

                <span className='span__Text2'>My cumulative GPA is
                                    <input className="input__Text__Small" placeholder={this.state.obtainedMarks}
                                           onChange={this.handleAcademicObtainedMarks}/>
                                    /
                                    <input className="input__Text__Small" placeholder={this.state.totalMarks}
                                           onChange={this.handleAcademicTotalMarks}/>
                                </span>


            </div>


            {/!*<div className='div__Button'>
                                <span className='span__Text'>
                                    Where do you live?

                                </span>
                                <input className={inputLeft2} placeholder={this.state.city}
                                       onChange={this.handleCity}/>
                            </div>


                            <span>
                                <p className="paragraph__Text2">
                                    Ex. Montreal, Quebec, Canada
                                </p>
                            </span>*!/}

            <div className="div__Button2">
                                <span className="span__Text3">
                                    How happy are you with your program?
                                </span>
                <span className="span__Text4">
                                    I hate it
                                </span>
                <div className='span__Container_Left_Right3'>


                    <input
                        id="typeinp"
                        type="range"
                        min="0" max="10"
                        value={this.state.academicValue1}
                        onChange={this.handleAcademicValue1}
                        step="1"/>



                </div>
                <span className="span__Text4">
                                    I love it
                                </span>
            </div>
            <div className="div__Button2">
                                <span className="span__Text3">
                                    How are your relationships with other people in your program?
                                </span>
                <span className="span__Text4">
                                    I feel isolated and left out
                                </span>
                <div className='span__Container_Left_Right3'>


                    <input
                        id="typeinp"
                        type="range"
                        min="0" max="10"
                        value={this.state.academicValue2}
                        onChange={this.handleAcademicValue2}
                        step="1"/>



                </div>
                <span className="span__Text4">
                                    I feel that I belong here
                                </span>
            </div>

            <div className="div__Button2">
                                <span className="span__Text3">
                                    How stressed do you feel throughout the semester?
                                </span>
                <span className="span__Text4">
                                    I feel stressed all the time
                                </span>
                <div className='span__Container_Left_Right3'>


                    <input
                        id="typeinp"
                        type="range"
                        min="0" max="10"
                        value={this.state.academicValue3}
                        onChange={this.handleAcademicValue3}
                        step="1"/>



                </div>
                <span className="span__Text4">
                                    I feel relaxed most of the time
                                </span>
            </div>

            <div onClick={this.initiateCallFetch}>
                <Action action={action}
                        actionButtonData={actionButtonData}
                        classButton={actionButtonClass}
                        sendID={this.state.id}/>
            </div>

            {/!*<button className='home-button-down' onClick={this.handleFormData}>Save</button>*!/}
        </form>

    </div>



</div>*/










/*
function handleFormData(evt) {
    evt.preventDefault();

    console.log(evt.target.elements);
}

const AboutPage = () => {
    console.log('Consent Page!');

    const title = "Welcome, Student!";
    const action = "/about";
    const inputRight = "input__Text__Right";
    const inputLeft = "input__Text__Left";
    const inputLeft2 = "input__Text__Left2";
    return(
        <div>
            <Header title={title}/>
            <div className='container'>
                <p className='paragaphText'>Let's start by filling in some information about you!</p>
                <div className='borderDiv'>
                    <form className="form__Text" onSubmit={handleFormData}>
                        <p>
                            Select your gender
                            <FormInput clsName={inputRight} inputName="gender"/>
                        </p>
                        <p>
                            What is your ethnicity?
                            <FormInput clsName={inputLeft} inputName="ethnicity"/>
                        </p>
                        <p>
                            When is your Birthday?
                        </p>
                        <DatePickerClass />

                        <p>
                            Where do you live?
                        </p>
                        <p className="paragraph__Text2">
                            Ex. Montreal, Quebec, Canada
                        </p>

                        <input className={inputLeft2} type="text" />

                        <button className='home-button'>Next</button>
                    </form>

                </div>

            </div>

        </div>
    );
};


/!*<FormInput clsName={inputRight} inputName="gender"/>*!/
export default AboutPage;*/

