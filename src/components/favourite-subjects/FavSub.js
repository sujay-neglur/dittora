import React from 'react';

import Header from "../Header";
import Action from "../Action";

import {DropdownButton, Button, MenuItem,ButtonToolbar, FormControl, FormGroup, Radio, ToggleButton, ToggleButtonGroup}
    from 'react-bootstrap';


import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

import 'react-bootstrap/dist/react-bootstrap.js';
import 'react-bootstrap/dist/react-bootstrap.min.js';
import CheckboxButton from "../checkbox-button/CheckboxButton";
import {addBig5, addFavSubs} from "../../actions/actions";
import {connect} from "react-redux";

import DittoraRegularLogo from '../../images-logos/dittora-regular-logo/dittora-regular-logo.svg';
import PaperPlane from '../../images-logos/hobbies/paper-plane.svg';
import ScienceDude from '../../images-logos/favsub/science-dude.svg';
import PaintUtility from '../../images-logos/favsub/paint-utility.svg';


const maxChoices = 3;

class FavSub extends React.Component{
    constructor(props){
        super(props);

        this.handleFormData = this.handleFormData.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleOnChange = this.handleOnChange.bind(this);
        this.handleCheckBox = this.handleCheckBox.bind(this);

        this.sendToStore = this.sendToStore.bind(this);
        this.setStateCallBack = this.setStateCallBack.bind(this);

        this.initiateCallFetch = this.initiateCallFetch.bind(this)
        this.callFetch = this.callFetch.bind(this);

        this.state = {
            id: this.props.match.params.id,
            value: 'coconut',
        selectedFavSubs: [],
        listIsFull: false,
        toggledChoicesList: {
            1: false,
            2: false,
            3: false,
            4: false,
            five: false,
            six: false,
            seven: false
        }};

    }

    setStateCallBack() {
        this.sendToStore();
    }

    sendToStore(){
        console.log('Here in Send Function');
        this.props.dispatch(addFavSubs(this.state.id, {selectedFavSubs: this.state.selectedFavSubs}));
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
        //console.log(dx);
        //this.callFetch(dx);


        //this.props.dispatch(addFavSubs(this.state.id, {selectedFavSubs: this.state.selectedFavSubs}));

        console.log("Store props: ");
        console.log(this.props.usersAbout[0][0]);
    }

    handleOnChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        alert('Your favorite flavor is: ' + this.state.value);
        event.preventDefault();
    }

    handleCheckBox(event) {
        console.log('Checked');
        console.log(event.currentTarget.dataset.id);

        const valueToAdd = event.currentTarget.dataset.id;

        if(this.state.selectedFavSubs.length===2){
            this.setState((prevState) => ({
                listIsFull: !prevState.listIsFull
            }),
                ()=> {
                    this.setStateCallBack();
                });
            console.log('List is Full:');
            console.log(this.state.listIsFull);
        }

        if(this.state.selectedFavSubs.includes(valueToAdd)){

            const index = this.state.selectedFavSubs.indexOf(valueToAdd);

            if(index > -1){

                this.state.selectedFavSubs.splice(index, 1);
                this.setState((prevState) => ({

                    selectedFavSubs: this.state.selectedFavSubs,
                    listIsFull: false,
                    //toggleChoicesList: !prevState.toggleChoicesList.valueToAdd
                }),
                ()=> {
                    this.setStateCallBack();
                });
            }

            /*this.setState((prevState) => ({

                selectedFavSubs: prevState.selectedFavSubs.de
            }));*/

            console.log('After Removal: ');
            console.log(this.state.selectedFavSubs);
            console.log(this.state.listIsFull);
        }

        else if (this.state.selectedFavSubs.length<3){

            this.setState((prevState) => ({
                selectedFavSubs: prevState.selectedFavSubs.concat(valueToAdd),

            }),
                ()=> {
                    this.setStateCallBack();
                });

            /*this.setState({
                ...this.state.toggleChoicesList,
                valueToAdd: true,

            });*/


        }

        //this.sendToStore();

    }


    initiateCallFetch(){
        let object = this.props.usersAbout[0][0].addValues;

        this.callFetch(object)
    }

    callFetch(object) {
        console.log("In callFetch");
        //console.log(object);
        /*header('Access-Control-Allow-Origin: *');
        header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
        header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');*/
        //Axios.post('http://localhost:5000/data', {id: 'id here'})


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


    render() {

        console.log('FavSub Page!');

        const title = "Now for the fun part! Time to talk about your Interests and Hobbies";
        const action = "/hobbies";
        const actionButtonData = "Next";
        const actionButtonClass = "home-button-down";


        const actionButtonClass1 = "home-button-left-in";
        const actionButtonClass2 = "home-button-right-in";
        return(
            <div>
                {/*<Header title={title}/>*/}

                <img className='dittora-regular-logo' src={DittoraRegularLogo} alt='dittora-regular-logo' />
                <img className='paper-plane' src={PaperPlane} alt='paper-logo' />
                <span className='hobbies-header'>
                            Now for the {' '}
                            <span style={{'color':'#0CE8D4'}}>
                                fun</span> {' '}
                    part! Time to talk about your {' '}
                            <span style={{'color':'#DD417C'}}>interests and hobbies...</span>
                </span>

                {
                    <div className='container__Big'>


                        <span className='favsub-border'></span>

                        <p className='favsub-inner-border-header'>
                            Choose 3 of your favorite type of hobbies
                        </p>



                        <span className='favsub-button-1' onClick={ this.handleCheckBox } data-id={1}>
                                    <CheckboxButton  listIsFull={this.state.listIsFull}
                                                     selectedFavSubs={this.state.selectedFavSubs}
                                                     valueOfChoice={"1"}>Mathematics</CheckboxButton>
                                </span>


                        <span className='favsub-button-2' onClick={this.handleCheckBox} data-id={2} >
                                    <CheckboxButton listIsFull={this.state.listIsFull}
                                                    selectedFavSubs={this.state.selectedFavSubs}
                                                    valueOfChoice={"2"}>Physics</CheckboxButton>
                                </span>



                        <span className='favsub-button-3' onClick={this.handleCheckBox} data-id={3}>
                                    <CheckboxButton listIsFull={this.state.listIsFull}
                                                    selectedFavSubs={this.state.selectedFavSubs}
                                                    valueOfChoice={"3"}>Chemistry</CheckboxButton>
                                </span>



                        <span className='favsub-button-4' onClick={this.handleCheckBox} data-id={4}>
                                    <CheckboxButton listIsFull={this.state.listIsFull}
                                                    selectedFavSubs={this.state.selectedFavSubs}
                                                    valueOfChoice={"4"}>Biology</CheckboxButton>
                                </span>

                        <span className='favsub-button-5' onClick={this.handleCheckBox} data-id={5}>
                                    <CheckboxButton listIsFull={this.state.listIsFull}
                                                    selectedFavSubs={this.state.selectedFavSubs}
                                                    valueOfChoice={"5"}>Sports</CheckboxButton>
                                </span>


                        <span className='favsub-button-6' onClick={this.handleCheckBox} data-id={6}>
                                    <CheckboxButton listIsFull={this.state.listIsFull}
                                                    selectedFavSubs={this.state.selectedFavSubs}
                                                    valueOfChoice={"6"}>Technology</CheckboxButton>
                                </span>


                        <span className='favsub-button-7' onClick={this.handleCheckBox} data-id={7}>
                                    <CheckboxButton listIsFull={this.state.listIsFull}
                                                    selectedFavSubs={this.state.selectedFavSubs}
                                                    valueOfChoice={"7"}>History</CheckboxButton>
                                </span>


                        <span className='favsub-button-8' onClick={this.handleCheckBox} data-id={8}>
                                    <CheckboxButton listIsFull={this.state.listIsFull}
                                                    selectedFavSubs={this.state.selectedFavSubs}
                                                    valueOfChoice={"8"}>Geography</CheckboxButton>
                                </span>



                        <span className='favsub-button-9' onClick={this.handleCheckBox} data-id={9}>
                                    <CheckboxButton listIsFull={this.state.listIsFull}
                                                    selectedFavSubs={this.state.selectedFavSubs}
                                                    valueOfChoice={"9"}>Religion</CheckboxButton>
                                </span>


                        <span className='favsub-button-10' onClick={this.handleCheckBox} data-id={10}>
                                    <CheckboxButton listIsFull={this.state.listIsFull}
                                                    selectedFavSubs={this.state.selectedFavSubs}
                                                    valueOfChoice={"10"}>Languages</CheckboxButton>
                                </span>

                        <span className='favsub-button-11' onClick={this.handleCheckBox} data-id={11}>
                                    <CheckboxButton listIsFull={this.state.listIsFull}
                                                    selectedFavSubs={this.state.selectedFavSubs}
                                                    valueOfChoice={"11"}>Philosophy</CheckboxButton>
                                </span>


                        <span className='favsub-button-12' onClick={this.handleCheckBox} data-id={12}>
                                    <CheckboxButton listIsFull={this.state.listIsFull}
                                                    selectedFavSubs={this.state.selectedFavSubs}
                                                    valueOfChoice={"12"}>Sociology</CheckboxButton>
                                </span>


                        <span className='favsub-button-13' onClick={this.handleCheckBox} data-id={13}>
                                    <CheckboxButton listIsFull={this.state.listIsFull}
                                                    selectedFavSubs={this.state.selectedFavSubs}
                                                    valueOfChoice={"13"}>Economics</CheckboxButton>
                                </span>


                        <span className='favsub-button-14' onClick={this.handleCheckBox} data-id={14}>
                                    <CheckboxButton listIsFull={this.state.listIsFull}
                                                    selectedFavSubs={this.state.selectedFavSubs}
                                                    valueOfChoice={"14"}>Arts</CheckboxButton>
                                </span>


                        <img className='science-dude' src={ScienceDude} alt='science-dude' />
                        <img className='paint-utility' src={PaintUtility} alt='paint-utility' />


                            <Action action={action}
                                    actionButtonData={actionButtonData}
                                    classButton='favsub-button'
                                    sendID={this.state.id}/>


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

export default connect(mapStateToProps)(FavSub);


{/*
<div className='borderDiv__Medium'>
    <p className='paragraphText'>
        Choose 3 of your favourite school subjects
    </p>

    {console.log(this.state.selectedFavSubs)}
    {console.log('List is Full:')}
    {console.log(this.state.listIsFull)}


    <span className='span__buttons1'>
                                <span onClick={ this.handleCheckBox } data-id={1}>
                                    <CheckboxButton  listIsFull={this.state.listIsFull}
                                                     selectedFavSubs={this.state.selectedFavSubs}
                                                     valueOfChoice={"1"}>Math</CheckboxButton>
                                </span>

        {'   '}{'   '}

        <span onClick={this.handleCheckBox} data-id={2} >
                                    <CheckboxButton listIsFull={this.state.listIsFull}
                                                    selectedFavSubs={this.state.selectedFavSubs}
                                                    valueOfChoice={"2"}>Physics</CheckboxButton>
                                </span>

        {'   '}{'   '}
        <span onClick={this.handleCheckBox} data-id={3}>
                                    <CheckboxButton listIsFull={this.state.listIsFull}
                                                    selectedFavSubs={this.state.selectedFavSubs}
                                                    valueOfChoice={"3"}>Chemistry</CheckboxButton>
                                </span>

        {'   '}
        <span onClick={this.handleCheckBox} data-id={4}>
                                    <CheckboxButton listIsFull={this.state.listIsFull}
                                                    selectedFavSubs={this.state.selectedFavSubs}
                                                    valueOfChoice={"4"}>Biology</CheckboxButton>
                                </span>

                            </span>
    <br/>
    <span className='span__buttons2'>
                                <span onClick={this.handleCheckBox} data-id={5}>
                                    <CheckboxButton listIsFull={this.state.listIsFull}
                                                    selectedFavSubs={this.state.selectedFavSubs}
                                                    valueOfChoice={"5"}>Sports</CheckboxButton>
                                </span>

        {'   '}{'   '}
        <span onClick={this.handleCheckBox} data-id={6}>
                                    <CheckboxButton listIsFull={this.state.listIsFull}
                                                    selectedFavSubs={this.state.selectedFavSubs}
                                                    valueOfChoice={"6"}>Technology</CheckboxButton>
                                </span>

        {'   '}{'   '}
        <span onClick={this.handleCheckBox} data-id={7}>
                                    <CheckboxButton listIsFull={this.state.listIsFull}
                                                    selectedFavSubs={this.state.selectedFavSubs}
                                                    valueOfChoice={"7"}>History</CheckboxButton>
                                </span>

                            </span>

    <span className='span__buttons1'>
                                <span onClick={this.handleCheckBox} data-id={8}>
                                    <CheckboxButton listIsFull={this.state.listIsFull}
                                                    selectedFavSubs={this.state.selectedFavSubs}
                                                    valueOfChoice={"8"}>Geography</CheckboxButton>
                                </span>

        {'   '}{'   '}
        <span onClick={this.handleCheckBox} data-id={9}>
                                    <CheckboxButton listIsFull={this.state.listIsFull}
                                                    selectedFavSubs={this.state.selectedFavSubs}
                                                    valueOfChoice={"9"}>Religion</CheckboxButton>
                                </span>

        {'   '}{'   '}
        <span onClick={this.handleCheckBox} data-id={10}>
                                    <CheckboxButton listIsFull={this.state.listIsFull}
                                                    selectedFavSubs={this.state.selectedFavSubs}
                                                    valueOfChoice={"10"}>Languages</CheckboxButton>
                                </span>


                            </span>


    <span className='span__buttons2'>
                                <span onClick={this.handleCheckBox} data-id={11}>
                                    <CheckboxButton listIsFull={this.state.listIsFull}
                                                    selectedFavSubs={this.state.selectedFavSubs}
                                                    valueOfChoice={"11"}>Philosophy</CheckboxButton>
                                </span>

        {'   '}{'   '}
        <span onClick={this.handleCheckBox} data-id={12}>
                                    <CheckboxButton listIsFull={this.state.listIsFull}
                                                    selectedFavSubs={this.state.selectedFavSubs}
                                                    valueOfChoice={"12"}>Sociology</CheckboxButton>
                                </span>

        {'   '}{'   '}
        <span onClick={this.handleCheckBox} data-id={13}>
                                    <CheckboxButton listIsFull={this.state.listIsFull}
                                                    selectedFavSubs={this.state.selectedFavSubs}
                                                    valueOfChoice={"13"}>Economics</CheckboxButton>
                                </span>

                            </span>


    <span className='span__buttons1'>
                                <span onClick={this.handleCheckBox} data-id={14}>
                                    <CheckboxButton listIsFull={this.state.listIsFull}
                                                    selectedFavSubs={this.state.selectedFavSubs}
                                                    valueOfChoice={"14"}>Arts</CheckboxButton>
                                </span>

                            </span>

    <br/>

    <div onClick={this.initiateCallFetch}>
        <Action action={action}
                actionButtonData={actionButtonData}
                classButton={actionButtonClass}
                sendID={this.state.id}/>
    </div>

    <button className='home-button-down' onClick={this.handleFormData}>Save</button>

</div>*/}
