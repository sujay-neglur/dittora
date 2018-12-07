import React from 'react';

import Header from "../Header";
import Action from "../Action";

import {DropdownButton, Button, MenuItem,ButtonToolbar} from 'react-bootstrap';
import {connect} from 'react-redux';
import {addHobbies} from "../../actions/actions";
import {addAcademia3} from "../../actions/actions";

import DittoraRegularLogo from '../../images-logos/dittora-regular-logo/dittora-regular-logo.svg';
import PaperPlane from '../../images-logos/hobbies/paper-plane.svg';
import BookLogo from '../../images-logos/hobbies/book.svg';
import HockeyLogo from '../../images-logos/hobbies/hockey-logo.svg';
import AmericanFootballLogo from '../../images-logos/hobbies/american-football.svg';
import VideoGameLogo from '../../images-logos/hobbies/video-game.svg';
import StampsLogo from '../../images-logos/hobbies/stamps.svg';
import ChessLogo from '../../images-logos/hobbies/chess-logo.svg';

import Observational from '../../images-logos/hobbies/observational.svg';
import Creative from '../../images-logos/hobbies/creative.svg';
import Sports from '../../images-logos/hobbies/sports.svg';
import Technology from '../../images-logos/hobbies/technology.svg';
import Health from '../../images-logos/hobbies/health.svg';
import Outdoor from '../../images-logos/hobbies/outdoor.svg';
import Collection from '../../images-logos/hobbies/collection.svg';
import Indoor from '../../images-logos/hobbies/indoor.svg';

import HobbiesBottomNavBar from '../../images-logos/hobbies/hobbies-bottom-navbar.svg';

let id = '';

class Hobbies extends React.Component{
    constructor(props){
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
        //this.handleObservational = this.handleObservational.bind(this);
        //this.handleCreative = this.handleCreative.bind(this);

        this.handleFormData = this.handleFormData.bind(this);

        this.handleHobby = this.handleHobby.bind(this);

        //this.Get1Component = this.Get1Component.bind(this);
        //this.checkAllHobbies = this.checkAllHobbies.bind(this);

        this.initiateCallFetch = this.initiateCallFetch.bind(this);
        this.callFetch = this.callFetch.bind(this);

        this.setStateCallBack = this.setStateCallBack.bind(this);

        this.state = {
            id: this.props.match.params.id,
            is1Empty: true,
            is2Empty: true,
            is3Empty: true,
            isObservational: false,
            isCreative: false,
            isSports: false,
            isTechnology: false,
            isHealth: false,
            isOutdoor: false,
            isCollection: false,
            isIndoor: false,

            boxesMapping : {
                0: undefined,
                1: undefined,
                2: undefined,
                3: undefined,
                4: undefined,
                5: undefined,
                6: undefined,
                7: undefined
            },

            hobbiesMapping: {
                0: 'Observational',
                1: 'Creative',
                2: 'Sports',
                3: 'Technology',
                4: 'Health',
                5: 'Outdoor',
                6: 'Collection',
                7: 'Indoor'
            },

            selectedHobbies: [],
            isSelectedHobbiesListFull: false
        };
        //id = this.state.id;

    }

    setStateCallBack() {
        this.sendToStore();
    }

    sendToStore(){
        //console.log('Here in Send Function');
        this.props.dispatch(addHobbies(this.state.id, {hobbies: this.state.selectedHobbies}));

        //console.log("in Hobbies and object is:");
        //console.log(this.props.usersAbout[0].addHobbies);
    }

    handleFormData(event) {
        event.preventDefault();



        let dx = this.state;
        //console.log(dx);
        //this.callFetch(dx);

        /*this.props.dispatch(addAcademia3(this.state.id, {schoolName:this.state.schoolName,
            typeOfProgram:this.state.typeOfProgram,
            programName: this.state.programName, cgpaInSchool: this.state.obtainedMarks,
            totalCgpaInSchool: this.state.totalMarks}));*/

        console.log("Store props: ");
        //console.log(this.props.usersAbout[0][0]);

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

    /*checkAllHobbies(state) {
        return (
            <div>
                {(function() {
                    switch(state) {
                        case state.isObservational==true:
                            return <div className='' />;
                        case 'warning':
                            return <Warning text={text} />;
                        case 'error':
                            return <Error text={text} />;
                        default:
                            return null;
                    }
                })()}
            </div>
        );
    }*/



    updateEmptyFlags(emptyFlag) {

        this.setState({
                [emptyFlag]: !this.state[emptyFlag]},
            ()=> {
                console.log("Empty Flags updated!");
            });
    }

    removeFromBox(element) {

        const box = this.state.boxesMapping[element];



        if(box==="box1"){
            this.setState(prevState => ({
                    boxesMapping: {
                        ...prevState.boxesMapping,
                        [element]:undefined} }),
                () => {
                    this.updateEmptyFlags("is1Empty");
                    this.updateSelectedHobbiesList(element, "remove");
                    this.setStateCallBack();
                });

        }else if(box==="box2"){
            this.setState(prevState => ({
                    boxesMapping: {
                        ...prevState.boxesMapping,
                        [element]:undefined} }),
                () => {
                    this.updateEmptyFlags("is2Empty");
                    this.updateSelectedHobbiesList(element, "remove");
                    this.setStateCallBack();
                });

        }else if(box==="box3"){
            this.setState(prevState => ({
                    boxesMapping: {
                        ...prevState.boxesMapping,
                        [element]:undefined} }),
                () => {
                    this.updateEmptyFlags("is3Empty");
                    this.updateSelectedHobbiesList(element, "remove");
                    this.setStateCallBack();
                });

        }

        /*this.setState({boxMapping:{[element]: undefined}},
            ()=> {
                this.updateSelectedHobbiesList(element, "remove");
                this.setStateCallBack();
            });*/
    }

    handleHobby(event) {

        const element = event.target.id;
        if(this.state.selectedHobbies.length<=2){


            if(!this.state.isSelectedHobbiesListFull){

                if(!this.state.selectedHobbies.includes(element)){
                    console.log(!this.state.isObservational);
                    this.setState({isObservational: !this.state.isObservational,
                            /*isObservational: !this.state.isObservational,*/
                            /*is1Empty: !this.state.is1Empty*/},
                        ()=> {


                            this.updateSelectedHobbiesList(element, "add");

                            if(this.state.is1Empty){
                                this.setState(prevState => ({
                                        boxesMapping: {
                                            ...prevState.boxesMapping,
                                            [element]:"box1"} }),
                                    ()=> {
                                        this.updateEmptyFlags("is1Empty");
                                    });

                            }else if(this.state.is2Empty){
                                this.setState(prevState => ({
                                        boxesMapping: {
                                            ...prevState.boxesMapping,
                                            [element]:"box2"} }),
                                    ()=> {
                                        this.updateEmptyFlags("is2Empty");
                                    });

                            }else if(this.state.is3Empty){
                                this.setState(prevState => ({
                                        boxesMapping: {
                                            ...prevState.boxesMapping,
                                            [element]:"box3"} }),
                                    ()=> {
                                        this.updateEmptyFlags("is3Empty");
                                    });

                            }




                        });
                }else {
                    this.removeFromBox(element);
                }
            }else {
                this.removeFromBox(element);
            }
        }else {
            this.removeFromBox(element);
        }


    }




    /*handleCreative(event) {
        /!*console.log(!this.state.isCreative);
        this.setState({creative: !this.state.isCreative},
            ()=> {
                this.updateSelectedHobbiesList(1);
                this.setState({
                        is1Empty: !this.state.is1Empty},
                    ()=> {
                        this.setStateCallBack();
                    });
            });*!/



        if(!this.state.isSelectedHobbiesListFull){

            if(!this.state.selectedHobbies.includes(1)){
                console.log(!this.state.isCreative);
                this.setState({creative: !this.state.isCreative},

                    ()=> {

                        this.updateSelectedHobbiesList(1);

                        if(this.state.is1Empty){
                            this.updateEmptyFlags("is1Empty")
                        }else if(this.state.is2Empty){
                            this.updateEmptyFlags("is2Empty")
                        }else if(this.state.is3Empty){
                            this.updateEmptyFlags("is3Empty")
                        }




                    });
            }
        }
    }*/



    handleSubmit(event) {
        alert('Your favorite flavor is: ' + this.state.value);
        event.preventDefault();
    }

    updateSelectedHobbiesList(hobby, option) {

        if(option==="add"){
            this.setState({selectedHobbies: this.state.selectedHobbies.concat(hobby)},
                ()=> {
                    console.log('List updated!');
                    this.setStateCallBack();
                });
        }else if(option==="remove"){
            this.setState(prevState => ({
                    selectedHobbies: prevState.selectedHobbies.filter(element => element != hobby )
                }),
                ()=> {
                    console.log('List updated!');
                    this.setStateCallBack();
                })
        }

    }



    render() {


        function Get1Component(props) {
            //console.log(props);
            console.log("In Render!");
            console.log(props.state.boxesMapping);
            //const component = props.state.boxesMapping.filter(element => { boxesMapping[element]==="box1"});
            let component = '';
            for(const key in props.state.boxesMapping){
                if(props.state.boxesMapping[key]==="box1"){
                    component = key;
                }
            }

            console.log("Component :" + component);

            const componentName = props.state.hobbiesMapping[component];

            return <p>{componentName}</p>;
        }

        function Get2Component(props) {
            //console.log(props);
            console.log("In Render!");
            console.log(props.state.boxesMapping);
            //const component = props.state.selectedHobbies[1];

            let component = '';
            for(const key in props.state.boxesMapping){
                if(props.state.boxesMapping[key]==="box2"){
                    component = key;
                }
            }

            const componentName = props.state.hobbiesMapping[component];

            return <p>{componentName}</p>;
        }

        function Get3Component(props) {
            //console.log(props);
            console.log("In Render!");
            console.log(props.state.boxesMapping);
            //const component = props.state.selectedHobbies[2];

            let component = '';
            for(const key in props.state.boxesMapping){
                if(props.state.boxesMapping[key]==="box3"){
                    component = key;
                }
            }

            const componentName = props.state.hobbiesMapping[component];

            return <p>{componentName}</p>;
        }

        console.log('Academia Page 3!');

        const title = "Let's talk about your academic status";
        const action = "/values";
        const actionButtonData = "Next";
        const actionButtonClass = "home-button-down";

        //const component1 = <Get1Component />;

        return(
            <div className='main-div'>
                {/*<Header title={title}/>*/}

                <div>
                    <img className='dittora-regular-logo' src={DittoraRegularLogo} alt='dittora-regular-logo' />
                    <img className='paper-plane' src={PaperPlane} alt='paper-logo' />
                </div>
                {
                    <div className='container'>

                        <span className='hobbies-header'>
                            Now for the {' '}
                            <span style={{'color':'#0CE8D4'}}>
                                fun</span> {' '}
                            part! Time to talk about your {' '}
                            <span style={{'color':'#DD417C'}}>interests and hobbies...</span>
                        </span>

                        <img className='book-logo' src={BookLogo} alt='book-logo' />
                        <img className='hockey-logo' src={HockeyLogo} alt='hockey-logo' />
                        <img className='american-football-logo' src={AmericanFootballLogo} alt='american-football-logo' />
                        <img className='video-game-logo' src={VideoGameLogo} alt='video-game-logo' />
                        <img className='stamps-logo' src={StampsLogo} alt='stamps-logo' />
                        <img className='chess-logo' src={ChessLogo} alt='chess-logo' />



                        <img className='observational' src={Observational} alt='observational'
                             onClick={this.handleHobby} id="0"/>
                        <img className='creative' src={Creative} alt='creative'
                             onClick={this.handleHobby} id="1"/>
                        <img className='sports' src={Sports} alt='sports'
                             onClick={this.handleHobby} id="2"/>

                        <img className='technology' src={Technology} alt='technology'
                             onClick={this.handleHobby} id="3"/>
                        <span className='technology-text'>Technology</span>

                        <img className='health' src={Health} alt='health'
                             onClick={this.handleHobby} id="4"/>

                        <img className='outdoor' src={Outdoor} alt='outdoor'
                             onClick={this.handleHobby} id="5"/>
                        <span className='outdoor-text'>Outdoor</span>

                        <img className='collection' src={Collection} alt='collection'
                             onClick={this.handleHobby} id="6"/>
                        <img className='indoor' src={Indoor} alt='indoor'
                             onClick={this.handleHobby} id="7"/>



                        {/*{console.log(this.state.selectedHobbies)}
                        {console.log(this.state.boxesMapping)}*/}
                        {console.log("in Hobbies and object is:")}
                        {/*{console.log(this.props.usersAbout[0].addHobbies)}*/}

                        <div className='answer-border'>
                            <p className='answer-border-header'>
                                Choose 3 of your favorite type of hobbies
                            </p>

                        </div>
                        {/*<div onClick={this.checkAllHobbies}>

                        </div>*/}
                        {/*<div className='hobbies-input1'></div>
                        <div className='hobbies-input2'></div>
                        <div className='hobbies-input3'></div>*/}

                        {this.state.is1Empty ? <div className='hobbies-input1'></div> :
                        <div className='hobbies-input1-green'>

                            <span className='hobbies-text-1'>
                            <Get1Component state={this.state}/>
                            </span>
                            {/*<p>{this.get1Component}</p>*/}
                        </div>}
                        {this.state.is2Empty ? <div className='hobbies-input2'></div> :
                            <div className='hobbies-input2-green'>

                                <span className='hobbies-text-1'>
                                <Get2Component state={this.state}/>
                                </span>
                                {/*<p>{this.get1Component}</p>*/}
                            </div>}
                        {this.state.is3Empty ? <div className='hobbies-input3'></div> :
                            <div className='hobbies-input3-green'>

                                <span className='hobbies-text-1'>
                                <Get3Component state={this.state}/>
                                </span>
                                {/*<p>{this.get1Component}</p>*/}
                            </div>}


                        <Action action={action}
                                actionButtonData="Next"
                                classButton='hobbies-button'
                                sendID={this.state.id}/>

                        <img className='hobbies-bottom-navbar' src={HobbiesBottomNavBar} alt='hobbies-bottom-navbar'/>

                        {/*<button className='hobbies-button'>Next</button>*/}


                        {/*{console.log(this.state.id)}*/}

                    </div>
                }
            </div>
        );

    }

}

/*const mapStateToProps = (state, props) => {
  return  {
      user: state.users.find((user) => {
          user.id === id
      })
  };
};*/

function mapStateToProps(state) {
    return {
        usersAbout: state.users
    }
}

export default connect(mapStateToProps)(Hobbies);


