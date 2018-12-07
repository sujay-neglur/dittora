import React from 'react';

import Header from "../Header";
import Action from "../Action";

import DittoraRegularLogo from '../../images-logos/dittora-regular-logo/dittora-regular-logo.svg';
import UniversityLogo from '../../images-logos/academia/academia1-university.svg';
import {addAcademia1} from "../../actions/actions";
import {connect} from "react-redux";
import {Link} from "react-router-dom";

class ThankYou extends React.Component{
    constructor(props){
        super(props);

        this.checkIsStudent = this.checkIsStudent.bind(this);

        this.callFetch = this.callFetch.bind(this);
        this.initiateCallFetch = this.initiateCallFetch.bind(this);

        this.setStateCallBack = this.setStateCallBack.bind(this);
        this.sendToStore = this.sendToStore.bind(this);
        this.state = {id: this.props.match.params.id,
            isStudent: false,
            //token: this.props.usersAbout[0].token
            };
        //const store = configureStore();
    }

    setStateCallBack() {
        this.sendToStore();
    }

    sendToStore() {
        console.log('Here in Send Function');
        this.props.dispatch(addAcademia1(this.state.id, {isStudent:this.state.isStudent}));

        if(this.state.isStudent){
            this.props.history.push(`/academia2/${this.props.usersAbout[0].id}`);
        }else {
            this.props.history.push(`/academia6/${this.props.usersAbout[0].id}`);
        }

    }

    checkIsStudent(event) {
        const check = event.target.id;
        console.log("Hey I am here!");
        console.log(check);

        if(check==1){
            this.setState({isStudent: false},
                () => {
                    this.setStateCallBack();
                    console.log(this.state.isStudent);
                })
        }else if(check==2){
            console.log(check + 'in else if');
            this.setState({isStudent: true},
                () => {
                    console.log(check + 'in else if');
                    this.setStateCallBack();
                    console.log(this.state.isStudent);
                });
            console.log(this.state.isStudent);
        }
    }

    initiateCallFetch(){
        console.log("About Send Object");
        console.log(this.props.usersAbout[0].addAbout.users);
        let object = this.props.usersAbout[0].addAbout.users;

        object.token = this.state.token;
        this.callFetch(object)
    }



    callFetch(dx) {
        console.log("In callFetch");
        console.log(dx);

        /*header('Access-Control-Allow-Origin: *');
        header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
        header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');*/
        //Axios.post('/data', {id: 'id here'})


        fetch('http://localhost:5000http://192.168.0.133:3000/basicDetails', {
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

    render() {

        console.log('Thank You Page!');

        const title = "Let's talk about your academic status";
        const action1 = "/academia2";
        const action2 = "/academia4";
        const actionButtonData1 = "Nope";
        const actionButtonData2 = "Yep";
        const actionButtonClass1 = "home-button-left-in";
        const actionButtonClass2 = "home-button-right-in";

        //const id = this.props.match.params.id;

        /*this.state = {
            isStudent: '',
            schoolName: '',
            typeOfProgram: '',
            schoolProgramName: '',
            gpaSchool: '',
            totalGpaSchool: ''
        };*/

        return(
            <div>

                <img className='dittora-regular-logo' src={DittoraRegularLogo} alt='dittora-regular-logo' />
                <img className='university-logo' src={UniversityLogo} alt='university-logo' />
                {/*<span className="academia1-border-header">Let’s talk about your {' '}
                    <span style={{'color':'#DD417C'}}>Academic Status...</span>
                </span>*/}
                <div className='container'>

                    <span className='academia1-border'></span>

                    <p className='thank-you-inner-border-header'>Thank You very much for your inputs.</p>







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

export default connect(mapStateToProps)(ThankYou);