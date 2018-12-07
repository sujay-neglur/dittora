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

//import concordiaLogo from '../../images-logos/concordia.png';

import DittoraHomeLogo from '../../images-logos/dittora-home-logo.svg';
import BigBubble from '../../images-logos/big-bubble.svg';
import MyGosh from '../../images-logos/my-gosh.svg';
import PenguinLogos from'../../images-logos/panguin-logos.svg';

import DittoraBigLogo from '../../images-logos/home-page-2/ditto-shadow.png';
import Step1Logo from '../../images-logos/home-page-2/step-1.svg';
import AddUserLogo from '../../images-logos/home-page-2/add-user.png';
import CreateAccount from '../../images-logos/home-page-2/create-account.svg';
import FirstArrow from '../../images-logos/home-page-2/first-arrow.svg';
import Step2Logo from '../../images-logos/home-page-2/step-2.svg';
import MenuBox from '../../images-logos/home-page-2/menu-box-p2.svg';
import InnerMenuBox from '../../images-logos/home-page-2/inner-menu-box.svg';
import SecondArrow from '../../images-logos/home-page-2/second-arrow.svg';
import Step3Logo from '../../images-logos/home-page-2/step-3.svg';
import Menu2Box from '../../images-logos/home-page-2/menu-2-box-p2.svg';
import ThirdArrow from '../../images-logos/home-page-2/arrow-3.png';
import Step4Logo from '../../images-logos/home-page-2/step-4.svg';
import MirrorImage from '../../images-logos/home-page-2/mirror-image.svg';
import VisualizeText from '../../images-logos/home-page-2/visualize-text.svg';
import CompleteQuestionnaireText from '../../images-logos/home-page-2/complete-text.svg';
import ConnectText from '../../images-logos/home-page-2/connect-text.svg';



import ConcordiaLogo from '../../images-logos/concordia-logo.svg';
import McGillLogo from '../../images-logos/mcgill-logo.svg';
import UdemLogo from '../../images-logos/udem-logo.svg';
import UqamLogo from '../../images-logos/uqam-logo.svg';
import EtsLogo from '../../images-logos/ets-logo.svg';
import AubLogo from '../../images-logos/aub-logo.svg';
import BigBear from '../../images-logos/big-bear.svg';
import SignUp from '../../images-logos/sign-up.svg';

import MailLogo from '../../images-logos/home-page-2/mail.png';

let id = '';


class Home extends React.Component{

    constructor(props) {
        super(props);

        this.handleFormData = this.handleFormData.bind(this);

        this.handleContactFullName = this.handleContactFullName.bind(this);
        this.handleContactEmail = this.handleContactEmail.bind(this);
        this.handleContactMessage = this.handleContactMessage.bind(this);

        this.handleSendEmail = this.handleSendEmail.bind(this);

        this.callFetch = this.callFetch.bind(this);

        this.sendToStore = this.sendToStore.bind(this);



        this.state = {
            //id:uuid(),

            contactFullName: 'Full name',

            contactEmail: 'Email address',
            contactMessage: 'Type your message here..',

            contactQuerySent: -1
        };

        //this.props.dispatch(addUser({id: this.state.id}));

        //id = this.state.id;
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
        //console.log(dx);
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

    handleContactFullName(event) {
        this.setState({contactFullName: event.target.value},
            ()=> {
                this.setStateCallBack();
            })
    }

    handleContactEmail(event) {
        this.setState({contactEmail: event.target.value},
            ()=> {
                this.setStateCallBack();
            })
    }
    handleContactMessage(event) {
        this.setState({contactMessage: event.target.value},
            ()=> {
                this.setStateCallBack();
            })
    }

// This is a test comment
    handleSendEmail(evt){
        evt.preventDefault();

        let dx = this.state;
        console.log(dx);
        fetch('http://localhost:5000/email', {
            method: 'POST',
            //headers: {} <-- You can include some headers if you want  Hreretreeret
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(dx)
        })
            .then(res => {
                if(res.status==200){
                    alert('Your request is received. Please check your email for further details.')
                }
                /*this.setState({contactQuery: res.status},
                    () => {console.log(this.state.contactQuerySent)});*/
                // return res
            })
            /*.then(users => {
                console.log(users);
                // this.setState({ users })
            });*/
    }


    callFetch(dx) {
        console.log("In callFetch");
        console.log(dx);
        /*header('Access-Control-Allow-Origin: *');
        header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
        header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');*/
        //Axios.post('/data', {id: 'id here'})


        /*fetch('http://localhost:5000http://192.168.0.133:3000/data', {
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

        console.log('Home Page!');

        const title = "";
        const action = "/register";
        const actionButtonData = "Next";
        const actionButtonClass = "home-button-down";
        const inputRight = "input__Text__Right";
        const inputLeft = "input__Text__Left";
        const inputLeft2 = "input__Text__Left2";
        const date = '';
        return(



            <div className='main-div'>
                <div className='div__Button'>
                    <img className='dittora-home-logo' src={DittoraHomeLogo} alt='dittora-home-logo' />
                    <a className='navBar-home' href='#p'>Home</a>
                    <a className='navBar-about' href='#p2'>About</a>
                    <a className='navBar-contact' href='#p4'>Contact</a>
                    <NavLink className='navBar-register' to='/register' activeClassName='is-active'>Register</NavLink>
                    <NavLink className='navBar-login' to='/login' activeClassName='is-active'>Login</NavLink>
                </div>
                {/*//<div className='navBar-home'>Home</div>*/}
                {/*<Header className='login-div' title={title}/>*/}
                <div className='container'>

                    <div className='div__Button'>
                        <p className='text1-p' id="p">
                            Get matched with students who share the same personality as you!
                        </p>
                        <span className='text2-p'>
                            <span style={{'color':'#DD417C'}}>Dittora</span> is a free platform that links students who have the same interests, hobbies, aspirations, values and personality.
                        </span>

                        {/*<img className='vector64' src={BigBubble} alt='big-bubble' />
                        <img className='my-gosh-text' src={MyGosh} alt='my-gosh-text' />*/}
                        <img className='penguin-logos' src={PenguinLogos} alt='penguin-logos' />

                    </div>


                    <Link to={action} className='home-button-1'>
                        GET STARTED
                    </Link>



                    {/*<button className='home-button-1' onClick={this.handleFormData}>Get Started</button>*/}

                    {/*<Action action={action}
                            actionButtonData='Get Started'
                            classButton='home-button-1'
                            sendID = {this.state.id}
                    />*/}

                    <p className='home-line-1'>
                    </p>

                    <div className='div__Button'>
                        <p className='text1-p2' id="p2">
                            How does it Works?
                        </p>
                        <img className='dittora-big-logo' src={DittoraBigLogo} alt='dittora-big-logo' />
                        <img className='step1-logo' src={Step1Logo} alt='step-1-logo' />
                        <img className='sign-up-logo-p2' src={AddUserLogo} alt='sign-up-logo-p2' />
                        <img className='first-arrow' src={FirstArrow} alt='first-arrow' />
                        <a href="/register">
                        <img className='create-account' src={CreateAccount} alt='create-account' />
                        </a>
                        <img className='step2-logo' src={Step2Logo} alt='step2-logo' />
                        <img className='menu-box' src={MenuBox} alt='menu-box' />
                        <img className='inner-menu-box' src={InnerMenuBox} alt='inner-menu-box' />
                        <img className='second-arrow' src={SecondArrow} alt='second-arrow' />
                        <img className='step3-logo' src={Step3Logo} alt='step3-logo' />
                        <img className='menu-2-box-p2' src={Menu2Box} alt='menu-2-box-p2' />
                        <img className='third-arrow' src={ThirdArrow} alt='third-arrow' />
                        <img className='step4-logo' src={Step4Logo} alt='step4-logo' />
                        <img className='mirror-image' src={MirrorImage} alt='mirror-image' />
                        <img className='visualize-text' src={VisualizeText} alt='visualize-text' />
                        <img className='complete-questionnaire-text' src={CompleteQuestionnaireText}
                             alt='complete-questionnaire-text' />
                        <img className='connect-text' src={ConnectText} alt='connect-text' />
                    </div>


                    <p className='home-line-2'>
                    </p>


                    <div className='div__Button'>
                        <p className='text1-p3'>
                            On this platform, we have students from..
                        </p>

                        {/*<div className='concordia-logo'>
                            <img src={concordiaLogo}/>
                        </div>*/}

                        <img className='concordia-logo' src={ConcordiaLogo} alt='concordia-logo' />
                        <img className='mcgill-logo' src={McGillLogo} alt='mcgill-logo' />
                        <img className='udem-logo' src={UdemLogo} alt='udem-logo' />
                        <img className='uqam-logo' src={UqamLogo} alt='uqam-logo' />
                        <img className='ets-logo' src={EtsLogo} alt='ets-logo' />
                        <img className='aub-logo' src={AubLogo} alt='aub-logo' />


                    </div>


                    <p className='home-line-3'>
                    </p>


                    <div >
                        <div className='div__Button'>
                            <p className='text1-p4' id="p4">
                                Contact us
                            </p>

                            <img className='mail-logo-p4' src={MailLogo}    //require('../../images-logos/home-page-2/mail.png')
                                 alt='mail-logo-p4' />

                            <input className='home-fullName-input' onChange={this.handleContactFullName}
                                   placeholder='Full name'/>

                            <input className='home-email-input' onChange={this.handleContactEmail}
                                   placeholder='Email Address'/>

                            {/*<div className='home-message-input'>*/}
                                <textarea className='home-message-input' onChange={this.handleContactMessage}
                                       placeholder='Type your message here..'>
                                </textarea>

                            {/*</div>*/}


                            <button className='home-button-2' onClick={this.handleSendEmail}>LET'S TALK!</button>

                            {console.log(this.state.contactQuerySent)}

                            {this.state.contactQuerySent==200 ? <p className='home-email-sent'> Email has been Sent!</p> : ''}

                        </div>

                        <span className='horizontal-line-p4'>

                        </span>


                        <div className='div__Button'>
                            <p className='text2-p4'>
                                Address
                            </p>

                            <p className='text3-p4'>
                                1250 Guy St Suite #600, Montreal, QC <br/> H3H 2L3
                            </p>
                            <br/>
                            <p className='text4-p4'>
                                <strong>E-mail:</strong> info@dittora.com
                            </p>

                            <img className='sign-up' src={SignUp} alt='sign-up' />
                            <img className='big-bear' src={BigBear} alt='big-bear' />

                        </div>


                        <div className='div-product-owned'>
                            <span className='product-owned'>
                                Product owned by Tesseract Technologies Inc.
                            </span>


                        </div>
                    </div>




                    {/*<form className="form__Text" onSubmit={this.handleFormData}>


                        <div className='div__Button'>
                            <input className='loginEmail-input' placeholder={this.state.loginEmail}/>
                        </div>

                        <div className='div__Button'>
                            <input className='loginPassword-input' placeholder={this.state.loginPassword}/>
                        </div>

                        <div className='div__Button'>
                            <a className='forgotPassword-div' href='#'>
                                Forgot Password?
                            </a>
                        </div>

                        <br/>

                        <button className='home-button-down' onClick={this.handleFormData}>Sign In</button>
                    </form>*/}

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

export default connect(mapStateToProps)(Home);

/*

{user.id===1 ? user.profession : 'Nothing'}


function handleFormData(evt) {
    evt.preventDefault();1

    console.log(evt.target.elements);
}
*/