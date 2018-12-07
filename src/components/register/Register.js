import React from 'react';
import Header from "../Header";
import Action from "../Action";

import Login from "../login/Login";

import {Link, NavLink, Redirect} from 'react-router-dom';
//import { browser } from 'react-router';
import uuid from 'uuid';


//import FormInput from "../FormInput";
//import {Dropdown, MenuItem} from "semantic-ui-react";

//import { DropdownMenu, MenuItem} from 'react-bootstrap-dropdown-menu';

//import {ButtonToolbar} from 'reactstrap';

import {connect} from 'react-redux';
import {addBig5, addUser} from "../../actions/actions";
//import {addName} from "../actions/actions";



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


import RegisterBottom from '../../images-logos/register/register-bottom.svg'


let id = '';


class Register extends React.Component{

    constructor(props) {
        super(props);

        this.handleFormData = this.handleFormData.bind(this);
        this.handleFirstName = this.handleFirstName.bind(this);
        this.handleLastName = this.handleLastName.bind(this);
        this.handleEmail = this.handleEmail.bind(this);
        this.handleConfirmEmail = this.handleConfirmEmail.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
        this.handleConfirmPassword = this.handleConfirmPassword.bind(this);

        this.callFetch = this.callFetch.bind(this);

        //this.sendToStore = this.sendToStore.bind(this);

        this.setStateCallBack = this.setStateCallBack.bind(this);

        this.checkValidation = this.checkValidation.bind(this);
        this.handleRegisterUser = this.handleRegisterUser.bind(this);
        //this.handleChange = this.handleChange.bind(this);

        //this.renderDropdownButton = this.renderDropdownButton.bind(this);



        this.state = {
            //id:uuid(),
            firstName: '',
            lastName: '',
            email: '',
            confirmEmail: '',
            password: '',
            confirmPassword: '',

            validated: false,
            consent: true
        };

        //this.props.dispatch(addUser({id: this.state.id}));

        id = this.state.id;
    }

    setStateCallBack() {
        this.sendToStore();
    }

    sendToStore(){
        console.log('Here in Send Function');
        /*this.props.dispatch(addName(this.state.id, {gender:this.state.gender, ethnicity:this.state.ethnicity,
            birthDate: this.state.birthDate, placeLiving: this.state.city}));*/
    }

    handleFormData(evt) {
        evt.preventDefault();

        //console.log("Handled Form!-------------");
        //console.log("Gender: "+evt.target[0].value);

        let dx = this.state;

        const pass = this.state.password;
        const confirmPass = this.state.confirmPassword;

        //const disabled=pass.equals(confirmPass) == ;

        console.log(pass);
        console.log(confirmPass);

        if(pass.valueOf().trim()==confirmPass.valueOf().trim()){
            console.log("Password Matches!");
        }else{

            alert("Password doesn't match!");
            evt.preventDefault();
        }


        //console.log(dx);
        //this.callFetch(dx);

       // this.props.dispatch(addUser({id: this.state.id}));

        //console.log(this.props);

        /*this.props.dispatch(addName(this.state.id, {gender:this.state.gender, ethnicity:this.state.ethnicity,
            birthDate: this.state.birthDate, city: this.state.city}));*/

    }


    checkValidation(evt) {
        evt.preventDefault();

        //console.log("Handled Form!-------------");
        //console.log("Gender: "+evt.target[0].value);

        let dx = this.state;

        const pass = this.state.password;
        const confirmPass = this.state.confirmPassword;

        //const disabled=pass.equals(confirmPass) == ;

        console.log(pass);
        console.log(confirmPass);

        if(pass.valueOf().trim()==confirmPass.valueOf().trim()){
            console.log("Password Matches!");
            this.state.validated = true;
        }else{

            alert("Password doesn't match!");
            evt.preventDefault();
            this.state.validated = false;
        }


    }

    handleFirstName(event) {
        this.setState({firstName: event.target.value},
            ()=> {
                this.setStateCallBack();
            })
    }
    handleLastName(event) {
        this.setState({lastName: event.target.value},
            ()=> {
                this.setStateCallBack();
            })
    }
    handleEmail(event) {
        this.setState({email: event.target.value},
            ()=> {
                this.setStateCallBack();
            })
    }
    handleConfirmEmail(event) {
        this.setState({confirmEmail: event.target.value},
            ()=> {
                this.setStateCallBack();
            })
    }
    handlePassword(event) {
        this.setState({password: event.target.value},
            ()=> {
                this.setStateCallBack();
            })
    }
    handleConfirmPassword(event) {
        this.setState({confirmPassword: event.target.value},
            ()=> {
                this.setStateCallBack();
            })
    }

    handleRegisterUser() {

        let dx = this.state;

        fetch('http://localhost:5000/register', {  /*/register*/
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
                console.log("Going to Login: ");
                if(res.status==200){
                    console.log("Got status 200 ");
                    alert('You are being successfully registered. Login to find a match!')
                    this.props.history.push('/login');
                   // return <Redirect to="/login" />
                    //browserHistory.push('/login');
                    //this.context.router.push('/login');
                }
            })
            // .then(users => {
            //     console.log(users);
            //     this.setState({ users })
            // });


    }

    callFetch(dx) {
        console.log("In callFetch");
        console.log(dx);
        /*header('Access-Control-Allow-Origin: *');
        header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
        header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');*/
        //Axios.post('/data', {id: 'id here'})

        //send it on /register

        /*fetch('http://localhost:5000http://192.168.0.133:3000/register', {
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
                return res.header("x-auth")
            })
            .then(users => {
                console.log(users);
                this.setState({ users })
            });*/

    }





    render(){

        console.log('Register Page!');

        const title = "Registration!";
        const action = "/login";
        const actionButtonData = "Next";
        const actionButtonClass = "home-button-down";
        const inputRight = "input__Text__Right";
        const inputLeft = "input__Text__Left";
        const inputLeft2 = "input__Text__Left2";
        const date = '';
        //const validated = false;
        return(

            <div>

                <div className='div__Button'>
                    <NavLink className='navBar-contact' to='/home' activeClassName='is-active'>Home</NavLink>
                    <NavLink className='navBar-register-active' to='/register' activeClassName='is-active'>Register</NavLink>
                    <NavLink className='navBar-login' to='/login' activeClassName='is-active'>Login</NavLink>
                </div>


                <Header className='registration-div' title={title}/>
                <div className='container'>
                    {/*<p className='paragraphText'>Let's start by filling in some information about you!</p>*/}

                    {/*<div className='div__Button'>
                        <input className='first-name-input' placeholder={'Suyash'}/>
                    </div>

                    onSubmit={this.handleFormData}
                    */}

                    <br/>
                       {/* <form className="form__Text" >*/}

                            <div className='div__Button'>
                                <input value={this.state.firstName} className='first-name-input' placeholder="First name"
                                onChange={this.handleFirstName}/>
                            </div>

                            <div className='div__Button'>
                                <input value={this.state.lastName} className='last-name-input' placeholder="Last name"
                                       onChange={this.handleLastName}/>
                            </div>

                            <div className='div__Button'>
                                <input value={this.state.email} className='email-input' placeholder="Email address"
                                       onChange={this.handleEmail}/>
                            </div>

                            <div className='div__Button'>
                                <input value={this.state.confirmEmail} className='confirmEmail-input' placeholder="Confirm email address"
                                       onChange={this.handleConfirmEmail}/>
                            </div>

                            <div className='div__Button'>
                                <input value={this.state.password} type="password" className='password-input' placeholder="Password"
                                       onChange={this.handlePassword}/>
                            </div>

                            <div className='div__Button'>
                                <input value={this.state.confirmPassword} type="password" className='confirmPassword-input' placeholder="Confirm password"
                                       onChange={this.handleConfirmPassword}/>
                            </div>

                            {/*<div className='div__Button'>
                                <input className='email-input' placeholder={this.state.email}/>
                            </div>*/}

                            <br/>

                            <button className='register-button' onClick={this.handleRegisterUser}>Let's go!</button>

                    <img className='register-bottom-img' src={RegisterBottom} alt='register-bottom-img'/>

                            {/*<div onClick={this.checkValidation}>
                                {this.state.validated ? <Action action={action}
                                                                actionButtonData="Let's goNe!"
                                                                classButton='home-button-down'
                                                                sendID={this.state.id}/> :
                                    <button className='home-button-down' onClick={this.checkValidation}>Let's goNed!</button>}

                            </div>*/}
                        {/*</form>*/}

                </div>

            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        usersAbout: state.users
    }
}

/*
Register.contextTypes = {
    router: React.PropTypes.object.isRequired
};
*/

/*const mapStateToProps = (state, props) => {
    return  {
        user: state.users.find((user) => {
            user.id === id
        })
    };
};*/

export default connect(mapStateToProps)(Register);

/*

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

