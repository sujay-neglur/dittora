import React from 'react';

import Header from "../Header";
import Action from "../Action";

import {DropdownButton, Button, MenuItem,ButtonToolbar, FormControl, FormGroup, Radio, ToggleButton, ToggleButtonGroup}
    from 'react-bootstrap';
import ReactSlider from 'react-slider';
import {connect} from "react-redux";
import {addWorkExperience2} from "../../actions/actions";


import DittoraRegularLogo from '../../images-logos/dittora-regular-logo/dittora-regular-logo.svg';
import HandShake from '../../images-logos/work/work-1-handshake.svg';
import WorkFactory1 from '../../images-logos/work/work-factory-1.svg';
import WorkFactory2 from '../../images-logos/work/work-factory-2.svg';

class WorkExperience2 extends React.Component{
    constructor(props){
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleOnChange = this.handleOnChange.bind(this);
        this.handleJobPosition = this.handleJobPosition.bind(this);
        this.handleChange = this.handleChange.bind(this);

        this.handleIsJobRelated = this.handleIsJobRelated.bind(this);

        this.handleFormData = this.handleFormData.bind(this);
        this.callFetch = this.callFetch.bind(this);
        this.initiateCallFetch = this.initiateCallFetch.bind(this);

        this.sendToStore = this.sendToStore.bind(this);

        this.setStateCallBack = this.setStateCallBack.bind(this);

        this.state = {
            id: this.props.match.params.id,
            jobPosition: 'current job position',
            jobPositionRelated: '',
            min: 0,
            max: 10,
            workValue2: 5
        };
    }

    setStateCallBack() {
        this.sendToStore();
    }

    sendToStore(){
        //console.log('Here in Send Function');
        this.props.dispatch(addWorkExperience2(this.state.id, {jobPosition:this.state.jobPosition,
            jobPositionRelated:this.state.jobPositionRelated,
            currentJobLikingMeter: this.state.workValue2}));
    }

    handleFormData(event) {
        event.preventDefault();



        let dx = this.state;
        console.log(dx);
        //this.callFetch(dx);
        /*this.props.dispatch(addWorkExperience2(this.state.id, {jobPosition:this.state.jobPosition,
            jobPositionRelated:this.state.jobPositionRelated,
            workValue2: this.state.workValue2}));*/
    }

    initiateCallFetch(){
        console.log("WorkEx2 Send Object");
        //console.log(this.props.usersAbout[0].addAcademia1.users);

        //let completeObject = {};
        let objectWorkExperience1 = this.props.usersAbout[0].addWorkExperience1.users;
        let objectWorkExperience2 = this.props.usersAbout[0].addWorkExperience2.users;




        let object = Object.assign(objectWorkExperience1, objectWorkExperience2);

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


        fetch('http://localhost:5000/currentWork', {
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

    handleJobPosition(event) {
        this.setState({jobPosition: event.target.value},
            ()=> {
                this.setStateCallBack();
            })
    }



    handleOnChange(event) {
        //console.log("Hey!@");
        console.log(event.target.value);
        this.setState({jobPositionRelated: event.target.value},
            ()=> {
                this.setStateCallBack();
            });
        console.log(event);
    }


    handleIsJobRelated(event) {
        const check = event.target.id;
        console.log("Hey I am here!");
        console.log(check);

        if(check==1){
            this.setState({jobPositionRelated: false},
                () => {
                    this.setStateCallBack();
                    console.log(this.state.jobPositionRelated);
                })
        }else if(check==2){
            this.setState({jobPositionRelated: true},
                () => {
                    this.setStateCallBack();
                    console.log(this.state.jobPositionRelated);
                })
        }
    }


    handleChange(event) {
        this.setState({workValue2: event.target.value},
            ()=> {
                this.setStateCallBack();
            });
    }


    handleSubmit(event) {
        alert('Your favorite flavor is: ' + this.state.value);
        event.preventDefault();
    }

    render() {

        console.log('WorkExperience 2!');

        const title = "Let's talk about your Work Experience";
        const action = "/favSub";
        const actionButtonData = "Next";
        const actionButtonClass = "home-button-down";
        const word1 = "I hate it";
        const word2 = "I love it";

        return(
            <div>
                {/*<Header title={title}/>*/}
                <img className='dittora-regular-logo' src={DittoraRegularLogo} alt='dittora-regular-logo' />
                <img className='work1-handshake' src={HandShake} alt='work1-handshake-logo' />
                <span className="academia1-border-header">Let’s talk about your {' '}
                    <span style={{'color':'#DD417C'}}>Work Experience...</span>
                </span>
                {
                    <div className='container'>


                        <span className='work2-border'></span>

                        <p className='work2-inner-border-header'>What is your current job position?</p>

                        <input className='work2-input-1' placeholder={this.state.jobPosition}
                               onChange={this.handleJobPosition}/>

                        <span className='work2-inner-border-header-2'>
                            Is your job position related to your field of study?
                        </span>

                        <button id="1" className='work2-button-1' onClick={this.handleIsJobRelated}>
                            Nope
                        </button>

                        <button id="2" className='work2-button-2' onClick={this.handleIsJobRelated}>
                            Yep
                        </button>

                        <p className='work2-inner-border-header-3'>How much do you like your job?</p>


                        <span className='work2-slider'>
                        <input

                            id="typeinp"
                            type="range"
                            min="0" max="10"
                            value={this.state.workValue2}
                            onChange={this.handleChange}
                            step="1"/>
                        </span>

                        <div onClick={this.initiateCallFetch}>
                        <Action action={action}
                                actionButtonData={actionButtonData}
                                classButton='work2-button'
                                sendID={this.state.id}/>
                        </div>

                        <img className='work-factory-1' src={WorkFactory1} alt='work-factory-1' />
                        <img className='work-factory-2' src={WorkFactory2} alt='work-factory-2' />

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

export default connect(mapStateToProps)(WorkExperience2);


{/*<div className='borderDiv'>
    <p className='paragraphText'>
        What's your current job position?
    </p>

    <input className="input__Text__default" placeholder={this.state.jobPosition}
           onChange={this.handleJobPosition}/>


    <p className='paragraphText'>
        Is your job position related to your field of study?
    </p>

    <div className='span__Container'>
        <FormGroup
            value={this.state.jobPositionRelated}
            onChange={this.handleOnChange}
        >
            <Radio name="radioGroup" value={1}>
                Nope
            </Radio>{' '}
            <Radio name="radioGroup" value={2}>
                Yep
            </Radio>
        </FormGroup>
    </div>

    <p className='paragraphText'>
        How much do you like your job?
    </p>

    <ReactSlider defaultValue={5}
                                    min={this.state.min} max={this.state.max}

                            />


    <p id='slider'>
                                <span>{word1}</span> <span>{word2}</span>
                            </p >

    <span className='span__Container'>
                                <span>{word1}</span>

                                <div className='span__Container_Left_Right2'>


                                    <input
                                        id="typeinp"
                                        type="range"
                                        min="0" max="10"
                                        value={this.state.workValue2}
                                        onChange={this.handleChange}
                                        step="1"/>



                            </div>

                                <span>{word2}</span>
                            </span>






    <Action action={action}
            actionButtonData={actionButtonData}
            classButton={actionButtonClass}
            sendID={this.state.id}/>

    <button className='home-button-down' onClick={this.handleFormData}>Save</button>

</div>*/}



/*const AcademiaPage2 = () => {
    console.log('Academia Page 2!');

    const title = "Let's talk about your academic status";
    const action1 = "/academia2";
    const action2 = "/academia3";
    const actionButtonData1 = "High School";
    const actionButtonData2 = "CEGEP";
    const actionButtonClass = "home-button-default-in";
    //const

    const actionButtonClass1 = "home-button-left-in";
    const actionButtonClass2 = "home-button-right-in";
    return(
        <div>
            <Header title={title}/>
            {
                <div className='container'>

                    <div className='borderDiv'>
                        <p className='paragaphText'>
                            What is your <strong>Highest Academic Achievement?</strong>
                        </p>

                        <span className='border-span-buttons-2'>
                            <Action action={action1}
                                    actionButtonData={actionButtonData1}
                                    classButton={actionButtonClass}/>
                            <Action action={action2}
                                    actionButtonData={actionButtonData2}
                                    classButton={actionButtonClass}/>
                            <Action action={action2}
                                    actionButtonData={actionButtonData2}
                                    classButton={actionButtonClass}/>
                        </span>


                        <form onSubmit={}>
                            <label>
                                Pick your favorite flavor:
                                <select value={} onChange={}>
                                    <option value="grapefruit">Grapefruit</option>
                                    <option value="lime">Lime</option>
                                    <option value="coconut">Coconut</option>
                                    <option value="mango">Mango</option>
                                </select>
                            </label>
                            <input type="submit" value="Submit" />
                        </form>

                    </div>


                </div>
            }
        </div>
    );
};

export default AcademiaPage2;*/
