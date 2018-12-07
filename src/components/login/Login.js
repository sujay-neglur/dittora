import React from 'react';
import Header from "../Header";
import Action from "../Action";

import {Link, NavLink} from 'react-router-dom';

import uuid from 'uuid';


//import FormInput from "../FormInput";
//import {Dropdown, MenuItem} from "semantic-ui-react";

//import { DropdownMenu, MenuItem} from 'react-bootstrap-dropdown-menu';

//import {ButtonToolbar} from 'reactstrap';

import {connect} from 'react-redux';
//import {addAcademia3, addBig5, addUser} from "../../actions/actions";
//import {addName} from "../actions/actions";

import {addUser} from "../../actions/actions";

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

import LoginBottomImg from '../../images-logos/login/login-bottom-img.svg'

let id = '';


class Login extends React.Component{

    constructor(props) {
        super(props);

        this.handleFormData = this.handleFormData.bind(this);

        this.handleLoginEmail = this.handleLoginEmail.bind(this);
        this.handleLoginPassword = this.handleLoginPassword.bind(this);

        this.callFetch = this.callFetch.bind(this);

        //this.sendToStore = this.sendToStore.bind(this);

        this.setStateCallBack = this.setStateCallBack.bind(this);

        this.handleLoginUser = this.handleLoginUser.bind(this);
        //this.handleChange = this.handleChange.bind(this);

        //this.renderDropdownButton = this.renderDropdownButton.bind(this);



        this.state = {
            //id:uuid(),

            loginEmail: '',

            loginPassword: '',
        };

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
        //console.log(`Ethnicity: ${this.state.gender}`);
        //console.log("Ethnicity1: "+this.state.ethnicity);
        //console.log("Date: "+this.state.date);
        //console.log("City: "+this.state.city);
        /*console.log(dx);

        if (!this.canBeSubmitted()) {
            evt.preventDefault();
            return;
        }
        const { email, password } = this.state;
        alert(`Signed up with email: ${email} password: ${password}`);*/

        //this.callFetch(dx);

        //this.props.dispatch(addUser({id: this.state.id}));

        //console.log(this.props);

        /*this.props.dispatch(addName(this.state.id, {gender:this.state.gender, ethnicity:this.state.ethnicity,
            birthDate: this.state.birthDate, city: this.state.city}));*/

    }

    validate(email, password) {
        // true means invalid, so our conditions got reversed
        return {
            email: email.length === 0,
            password: password.length === 0,
        };
    }

    canBeSubmitted() {
        const errors = this.validate(this.state.loginEmail, this.state.loginPassword);
        const isDisabled = Object.keys(errors).some(x => errors[x]);
        return !isDisabled;
    }


    handleLoginEmail(event) {
        this.setState({loginEmail: event.target.value},
            ()=> {
                this.setStateCallBack();
            })
    }
    handleLoginPassword(event) {
        this.setState({loginPassword: event.target.value},
            ()=> {
                this.setStateCallBack();
            })
    }

    handleLoginUser(){

        let dx = this.state;

        console.log(dx);
        fetch('http://localhost:5000/login', {  /*/login*/ //changed
            method: 'POST',
            //headers: {} <-- You can include some headers if you want
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(dx)
        })
            .then(res => {
                console.log('response :'+res)
                return res.json()
            }).then(
                json => {console.log(json);
                this.props.dispatch(addUser(json._id, {token: json.token, firstName: json.firstName}));
                this.props.history.push(`/about/${json._id}`)}
        ).catch(error=>{
            console.log(error)
        })

    }

    callFetch(dx) {
        console.log("In callFetch");
        console.log(dx);
        /*header('Access-Control-Allow-Origin: *');
        header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
        header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');*/
        //Axios.post('/data', {id: 'id here'})


        //send it on /register

        /*fetch('http://localhost:5000http://192.168.0.133:3000/login', {
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
            });*/

    }





    render(){

        console.log('Login Page!');

        const title = "Log In";
        const action = "/about";
        const actionButtonData = "Next";
        const actionButtonClass = "home-button-down";
        const inputRight = "input__Text__Right";
        const inputLeft = "input__Text__Left";
        const inputLeft2 = "input__Text__Left2";
        const date = '';


        const errors = this.validate(this.state.loginEmail, this.state.loginPassword);
        const isDisabled = Object.keys(errors).some(x => errors[x]);
        return(

            <div>

                <div className='div__Button'>
                    <NavLink className='navBar-contact' to='/home' activeClassName='is-active'>Home</NavLink>
                    <NavLink className='navBar-register' to='/register' activeClassName='is-active'>Register</NavLink>
                    <NavLink className='navBar-login-active' to='/login' activeClassName='is-active'>Login</NavLink>
                </div>

                <Header className='login-div' title={title}/>
                <div className='container'>

                    <br/>
                    {/*onSubmit={this.handleLoginUser}*/}
                    {/*<form className="form__Text" >*/}


                        <div className='div__Button'>
                            <input value={this.state.loginEmail} type="email" name="emailaddress" className='loginEmail-input'
                                   placeholder="Email address"
                            onChange={this.handleLoginEmail}/>
                        </div>

                        <div className='div__Button'>
                            <input value={this.state.loginPassword} type="password" className='loginPassword-input'
                                   placeholder="Password"
                                   onChange={this.handleLoginPassword}/>
                        </div>

                        <div className='div__Button'>
                            <a className='forgotPassword-div' href='#'>
                                Forgot Password?
                            </a>
                        </div>

                        <br/>

                        <button className='login-button' onClick={this.handleLoginUser}>Sign In</button>

                    <img className='login-bottom-img' src={LoginBottomImg} alt='login-bottom-img'/>
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

/*const mapStateToProps = (state, props) => {
    return  {
        user: state.users.find((user) => {
            user.id === id
        })
    };
};*/

export default connect(mapStateToProps)(Login);

/*

{user.id===1 ? user.profession : 'Nothing'}


function handleFormData(evt) {
    evt.preventDefault();1

    console.log(evt.target.elements);
}
*/