import React from 'react';
import Header from "../Header";
import Action from "../Action";

import uuid from 'uuid';


import FormInput from "../FormInput";
//import {Dropdown, MenuItem} from "semantic-ui-react";

//import { DropdownMenu, MenuItem} from 'react-bootstrap-dropdown-menu';

//import {ButtonToolbar} from 'reactstrap';

import {connect} from 'react-redux';
import {addBig5, addUser} from "../../actions/actions";
import {addName} from "../../actions/actions";

import DittoraRegularLogo from '../../images-logos/dittora-regular-logo/dittora-regular-logo.svg';
import DudeWithBottle from '../../images-logos/about/dude-bottle.svg';


import DatePicker from 'react-datepicker';
import moment from 'moment';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
//import 'bootstrap/dist/js/bootstrap.min.js';

import DatePickerClass from '../DatePickerClass';
import 'react-bootstrap/dist/react-bootstrap.js';
import 'react-bootstrap/dist/react-bootstrap.min.js';

import {DropdownButton, Button, MenuItem,ButtonToolbar} from 'react-bootstrap';
import ReactDatePicker from 'react-date-picker-cs';

import InfiniteCalendar from 'react-infinite-calendar';
import "react-infinite-calendar/styles.css";


import Axios from 'axios';





let id = '';

//let isDateOn = true;

class About extends React.Component{


    constructor(props) {
        super(props);

        this.handleFormData = this.handleFormData.bind(this);
        this.handleGender = this.handleGender.bind(this);
        this.handleEthnicity = this.handleEthnicity.bind(this);


        this.handleBirthday = this.handleBirthday.bind(this);

        this.handleCity = this.handleCity.bind(this);
        this.callFetch = this.callFetch.bind(this);

        this.handleVisibility = this.handleVisibility.bind(this);
        this.sendToStore = this.sendToStore.bind(this);

        this.initiateCallFetch = this.initiateCallFetch.bind(this);

        //this.handleChange = this.handleChange.bind(this);

        //this.renderDropdownButton = this.renderDropdownButton.bind(this);


        //console.log("ID down here!")
        console.log(this.props);

        this.state = {
            id: this.props.usersAbout[0].id, //1234,    //uuid(),
            token: this.props.usersAbout[0].token, //'token',
            firstName: this.props.usersAbout[0].firstName, //'Suyash',
            gender: 'gender',
            ethnicity: 'ethnicity',
            date: moment(),
            city: '',
            birthDate: '',
            today: new Date(),

            isDateOn: false
            //lastWeek: new Date(this.state.today.getFullYear(), this.state.today.getMonth(), this.state.today.getDate() - 7)
            /*genderList: [
                {
                    id: 0,
                    title: 'Male',
                    selected: false,
                    key: 'gender'
                },
                {
                    id: 1,
                    title: 'Female',
                    selected: false,
                    key: 'gender'
                }
            ],*/
            //genderTrialList: ['Default']
        };

        //this.props.dispatch(addUser({id: this.state.id}));

        //id = this.state.id;
    }

    setStateCallBack() {
        this.sendToStore();
    }

    sendToStore(){
        console.log('Here in Send Function');
        this.props.dispatch(addName(this.state.id, {gender:this.state.gender, ethnicity:this.state.ethnicity,
            birthDate: this.state.birthDate, city: this.state.city}));
    }

    handleFormData(evt) {
        evt.preventDefault();

        //console.log("Handled Form!-------------");
        //console.log("Gender: "+evt.target[0].value);

        let dx = this.state;
        //console.log(`Ethnicity: ${this.state.gender}`);
        //console.log("Ethnicity1: "+this.state.ethnicity);
        //console.log("Date: "+this.state.date);
        //console.log("City: "+this.state.city);
        //console.log(dx);
        //this.callFetch(dx);

        //this.props.dispatch(addUser({id: this.state.id}));

        //console.log(this.props);

        /*this.props.dispatch(addName(this.state.id, {gender:this.state.gender, ethnicity:this.state.ethnicity,
        birthDate: this.state.birthDate, city: this.state.city}));*/

    }

    handleGender(evt, eventKey) {
        console.log("Changing gender!");
        this.setState({
            gender: eventKey.target.text
        },
            ()=> {
                this.setStateCallBack();
            }
            );
        //this.sendToStore();
    }
    handleEthnicity(evt, eventKey) {
        this.setState({
            ethnicity: eventKey.target.text
        },
            ()=> {
                this.setStateCallBack();
            });
        //this.sendToStore();
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


    convertDate(date){
        /*var str = d.stringify();
        var parts = str.split(" ");
        var months = {Jan: "01",Feb: "02",Mar: "03",Apr: "04",May: "05",Jun: "06",Jul: "07",Aug: "08",Sep: "09",Oct: "10",Nov: "11",Dec: "12"};
        return parts[3]+"-"+months[parts[1]]+"-"+parts[2];*/

        const year=date.getFullYear();
        const month=date.getMonth()+1 //getMonth is zero based;
        const day=date.getDate();
        const formatted=year+"-"+month+"-"+day;
        return formatted;
    }


    handleVisibility() {
        //isDateOn = !isDateOn;
        //this.render();
        this.setState({isDateOn: !this.state.isDateOn},
            () => {
                console.log("isDateOn updated!");
            });

        console.log(this.state.isDateOn);
    }

    handleBirthday(date) {

        console.log(date);

        const formattedDate = this.convertDate(date);  //$.datepicker.formatDate('yy-mm-dd', d);  //date.format('YYYY/MM/DD');

        console.log("Date : " + formattedDate);

        this.setState({
            date: date,
            birthDate: formattedDate

        },
            ()=> {
                this.setStateCallBack();
            });

        /*console.log(this.state.date + " "+ typeof this.state.date);

        const formattedDate = moment(date).format('YYYY/MM/DD');

        console.log("Date : " + formattedDate);
        console.log(typeof formattedDate);
        this.setState({
            date: date,
            birthDate: formattedDate

        });*/
        //this.sendToStore();
    }

    handleCity(evt) {
        this.setState({
            city: evt.target.value
        },
            ()=> {
                this.setStateCallBack();
            });
        //this.sendToStore();
    }


    initiateCallFetch(){
        console.log("About Send Object");
        //console.log(this.props.usersAbout[0].addAbout.users);
        let object = this.props.usersAbout[0].addAbout.users;

        this.callFetch(object)
    }


    callFetch(dx) {
        console.log("In callFetch");
        console.log(dx);
        dx.token = this.state.token;
        /*header('Access-Control-Allow-Origin: *');
        header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
        header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');*/
        //Axios.post('/data', {id: 'id here'})


        fetch('http://localhost:5000/basicDetails', {
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

        console.log('About Page!');

        const title = "Welcome, Student!";
        const action = "/academia1";
        const actionButtonData = "Next";
        const actionButtonClass = "home-button-down";
        const inputRight = "input__Text__Right";
        const inputLeft = "input__Text__Left";
        const inputLeft2 = "input__Text__Left2";
        const date = '';

        //let dateOn = false;
        const lastWeek = new Date(this.state.today.getFullYear(), this.state.today.getMonth(), this.state.today.getDate() - 7);

        return(

            <div>
                {/*<Header title={title}/>*/}
                <span className='about-header'> Welcome, <span style={{'color':'#DD417C'}}>{this.state.firstName}</span>!</span>
                <div className='container'>
                    <p className='about-border-header'>
                        Let’s start by filling in some information about you
                    </p>

                    <img className='dude-with-bottle' src={DudeWithBottle} alt='dude-with-bottle' />

                    <span className='about-border'></span>
                    <span className='select-gender'>
                        Select your gender
                    </span>
                    <span className='gender-input'>
                        <DropdownButton
                            bsSize="small"
                            bsStyle={'default'.toLowerCase()}
                            title={this.state.gender}
                            key={0}
                            id={'gender'}
                            onSelect={this.handleGender}
                        >
                            <MenuItem eventKey={0} value="Male">Male</MenuItem>
                            <MenuItem eventKey={1} value="Female">Female</MenuItem>

                        </DropdownButton>
                    </span>

                    <span className='ethnicity'>
                        What's your ethnicity?
                    </span>
                    <span className='ethnicity-input'>
                        <DropdownButton
                            bsSize="small"
                            bsStyle={'default'.toLowerCase()}
                            title={this.state.ethnicity}
                            key={1}
                            id={'ethnicity'}
                            onSelect={this.handleEthnicity}
                        >
                            <MenuItem eventKey={0} value="Caucasian">Caucasian</MenuItem>
                            <MenuItem eventKey={1} value="Hispanic">Hispanic (or Latino)</MenuItem>
                            <MenuItem eventKey={2} value="African">African American</MenuItem>
                            <MenuItem eventKey={3} value="NativeAmerican">Native American</MenuItem>
                            <MenuItem eventKey={4} value="MiddleEastern">Middle Eastern</MenuItem>
                            <MenuItem eventKey={5} value="Asian">Asian</MenuItem>
                            <MenuItem eventKey={6} value="Other">Other</MenuItem>

                        </DropdownButton>
                    </span>

                    <span className='birthday'>
                        When is your birthday?
                    </span>

                    <button className='birthday-input' onClick={this.handleVisibility}>
                        {this.state.isDateOn ?  'Select date' : 'Show date picker'}
                    </button>


                    <br/>
                    <div className='birthday-date-picker'>
                        {this.state.isDateOn ? <InfiniteCalendar
                            theme={{headerColor:'#ff1493', selectionColor:'#ff1493'}}
                            width={250}
                            height={200}
                            selected={this.state.today}
                            onSelect={this.handleBirthday}
                        /> : ''}
                    </div>


                    <span className='city'>
                        Where do you live?
                    </span>
                    <input value={this.state.city} className='city-input' placeholder="City"
                           onChange={this.handleCity} />

                    {/*<button className='about-button'>Next</button>*/}

                    <div onClick={this.initiateCallFetch}>
                    <Action action={action}
                            actionButtonData={actionButtonData}
                            classButton='about-button'
                            sendID = {this.state.id}
                    />
                    </div>

                </div>

            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        usersAbout: state.users
    }
}

/*const mapStateToProps = (state, props) => {
    return  {
        user: state.users.find((user) => {
            user.id === id
        })
    };
};*/

export default connect(mapStateToProps)(About);




{/*<p className='paragraphText'>Let's start by filling in some information about you!</p>
                    <div className='borderDiv'>
                        <form className="form__Text" onSubmit={this.handleFormData}>

                            <div className='div__Button'>
                                <span className='span__Text'>
                                Select your gender
                                </span>

                                <span>
                                    <DropdownButton
                                        bsSize="small"
                                        bsStyle={'default'.toLowerCase()}
                                        title={this.state.gender}
                                        key={0}
                                        id={'gender'}

                                        onSelect={this.handleGender}
                                    >
                                    <MenuItem eventKey={0} value="Male">Male</MenuItem>
                                    <MenuItem eventKey={1} value="Female">Female</MenuItem>

                                </DropdownButton>
                                </span>

                            </div>


                                {this.state.genderTrialList.map(this.renderDropdownButton)}

                            <Dropdown title="Select Gender" list={this.state.genderList}/>


                            <div className='div__Button'>
                                <span className='span__Text'>
                                What is your ethnicity?
                                </span>

                                <span>
                                    <DropdownButton
                                    bsSize="small"
                                    bsStyle={'default'.toLowerCase()}
                                    title={this.state.ethnicity}
                                    key={1}
                                    id={'ethnicity'}

                                    onSelect={this.handleEthnicity}
                                    >
                                        <MenuItem eventKey={0} value="Caucasian">Caucasian</MenuItem>
                                        <MenuItem eventKey={1} value="Hispanic">Hispanic (or Latino)</MenuItem>
                                        <MenuItem eventKey={2} value="African">African American</MenuItem>
                                        <MenuItem eventKey={3} value="NativeAmerican">Native American</MenuItem>
                                        <MenuItem eventKey={4} value="MiddleEastern">Middle Eastern</MenuItem>
                                        <MenuItem eventKey={5} value="Asian">Asian</MenuItem>
                                        <MenuItem eventKey={6} value="Other">Other</MenuItem>


                                    </DropdownButton>
                                </span>
                            </div>

                                <input className={inputLeft} placeholder={this.state.ethnicity}
                                        onChange={this.handleEthnicity}/>


                            <div className='div__Button'>
                                <span className='span__Text'>
                                    When is your Birthday?
                                </span>
                                <DatePickerClass date={this.props.data} onChange={this.handleBirthday}/>


                                <button onClick={this.handleDateVisibility}>
                                    {isDateOn ?  'Select date' : 'Show date picker'}
                                </button>


                                <br/>
                                {isDateOn ? <InfiniteCalendar
                                    width={250}
                                    height={200}
                                    selected={this.state.today}
                                    onSelect={this.handleBirthday}
                                /> : ''}


                                {console.log(this.state.today)}

                                <ReactDatePicker
                                    onChange={this.handleBirthday}
                                    range={[2013, 2020]}
                                    value={this.state.birthDate}
                                    disabled={true}
                                />
                            </div>


                            <div className='div__Button'>
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
                            </span>

                            <Action action={action}
                                    actionButtonData={actionButtonData}
                                    classButton={actionButtonClass}
                                    sendID = {this.state.id}
                             />

                            <button className='home-button-down' onClick={this.handleFormData}>Save</button>
                        </form>

                    </div>



                    {console.log(this.props)}*/}

{/*<ButtonToolbar>
                        <DropdownButton
                             bsStyle={'default'.toLowerCase()}
                             title={this.state.gender}
                             key={0}
                             id={'gg'}
                             value={this.state.gender}
                        >
                            <MenuItem eventKey="0">Male</MenuItem>
                            <MenuItem eventKey="1">Female</MenuItem>

                        </DropdownButton>

                        {this.state.genderTrialList.map(this.renderDropdownButton)}
                        </ButtonToolbar>*/}

{/*<ul>

                        {console.log(this.props.users)}

                        {this.props.users.map(user => {
                            return(
                                <li key={user.id}>
                                    {user.gender} {user.ethnicity} {user.birthDate} {user.placeLiving}

                                </li>

                            );
                        })}
                    </ul>
*/}















/*


<DatePicker
                                    selected={this.state.date}
                                    onChange={this.handleBirthday}
                                    /*data={this.state.date}




{user.id===1 ? user.profession : 'Nothing'}


function handleFormData(evt) {
    evt.preventDefault();1

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

