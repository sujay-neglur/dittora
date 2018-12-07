import React from 'react';

import Header from "../Header";
import Action from "../Action";

import {DropdownButton, Button, MenuItem,ButtonToolbar, FormControl, FormGroup, Radio, ToggleButton, ToggleButtonGroup}
from 'react-bootstrap';
import {connect} from "react-redux";
import {addTransferStudent1, addTransferStudent2} from "../../actions/actions";

import DittoraRegularLogo from '../../images-logos/dittora-regular-logo/dittora-regular-logo.svg';
import UniversityLogo from '../../images-logos/academia/academia1-university.svg';
import {Link} from "react-router-dom";


class TransferStudent2 extends React.Component{
    constructor(props){
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleOnChange = this.handleOnChange.bind(this);
        this.handlePastProgramName = this.handlePastProgramName.bind(this);

        this.handleFormData = this.handleFormData.bind(this);
        this.callFetch = this.callFetch.bind(this);
        this.initiateCallFetch = this.initiateCallFetch.bind(this);

        this.sendToStore = this.sendToStore.bind(this);

        this.state = {
            id: this.props.match.params.id,
            pastProgramName: 'Past Program',
            reason: ''
        };
    }

    setStateCallBack() {
        this.sendToStore();
    }

    sendToStore() {
        console.log('Here in Send Function');
        this.props.dispatch(addTransferStudent2(this.state.id, {pastProgramName:this.state.pastProgramName,
            reasonToLeave: this.state.reason
        }));
        //this.props.history.push(`/work1/${this.props.usersAbout[0].id}`);
    }


    handleFormData(event) {
        event.preventDefault();



        let dx = this.state;
        //console.log(dx);

        //this.callFetch(dx);
        this.props.dispatch(addTransferStudent2(this.state.id, {pastProgramName:this.state.pastProgramName,
            reasonToLeave: this.state.reason
            }));

    }

    initiateCallFetch(){
        console.log("Academia4 Send Object");
        //console.log(this.props.usersAbout[0].addAcademia1.users);

        //let completeObject = {};
        let objectTransferStudent1 = this.props.usersAbout[0].addTransferStudent1.users;
        let objectTransferStudent2 = this.props.usersAbout[0].addTransferStudent2.users;



        let object = Object.assign(objectTransferStudent1, objectTransferStudent2);

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


        fetch('http://localhost:5000/transfer', {
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

    handlePastProgramName(event) {
        this.setState({pastProgramName: event.target.value},
            () => {
                this.setStateCallBack();
                console.log(this.state.pastProgramName);
            })
    }



    handleOnChange(event) {
        console.log("Hey!@");
        console.log(event.target.value);
        this.setState({reason: event.target.value},
            () => {
                this.setStateCallBack();
                console.log(this.state.reason);
            });
        console.log(event);
    }



    handleSubmit(event) {
        alert('Your favorite flavor is: ' + this.state.value);
        event.preventDefault();
    }

    render() {

        console.log('Transfer 2 Page!');

        const title = "Let's talk about your academic status";
        const action = "/work1";
        const actionButtonData = "Next";
        const actionButtonClass = "home-button-down";

        return(
            <div>
                {/*<Header title={title}/>*/}
                <img className='dittora-regular-logo' src={DittoraRegularLogo} alt='dittora-regular-logo' />
                <img className='university-logo' src={UniversityLogo} alt='university-logo' />
                <span className="academia1-border-header">Let’s talk about your
                    <span style={{'color':'#DD417C'}}>Academic Status...</span>
                </span>

                {
                    <div className='container'>

                        <span className='transfer-student2-border'></span>

                        <p className='transfer-student2-inner-border-header'>
                            What’s the name of the program you were enrolled in?
                        </p>

                        <input className='transfer-student2-input-1' placeholder={this.state.pastProgramName}
                               onChange={this.handlePastProgramName}/>

                        <p className='transfer-student2-inner-border-header-2'>
                            Why did you transfer from your previous program?
                        </p>

                        <FormGroup
                            value={this.state.reason}
                            onChange={this.handleOnChange}
                            className='transfer-student2-form-group'
                        >
                            <Radio name="radioGroup" value={1}>
                                Program too difficult
                            </Radio>{' '}
                            <Radio name="radioGroup" value={2}>
                                Program not interesting
                            </Radio>{' '}
                            <Radio name="radioGroup" value={3}>
                                Changed opinion on future
                            </Radio>{' '}
                            <Radio name="radioGroup" value={4}>
                                other
                            </Radio>
                        </FormGroup>


                        <div onClick={this.initiateCallFetch}>
                        <Action action={action}
                                actionButtonData={actionButtonData}
                                classButton='transfer-student2-button'
                                sendID = {this.state.id}
                        />
                        </div>

                    </div>
                }
            </div>
        );














        //return (





        {/*<form onSubmit={this.handleSubmit}>
                <label>
                    Pick your favorite flavor:
                    <select value={this.state.value} onChange={this.handleOnChange}>
                        <option value="grapefruit">Grapefruit</option>
                        <option value="lime">Lime</option>
                        <option value="coconut">Coconut</option>
                        <option value="mango">Mango</option>
                    </select>
                </label>
                <input type="submit" value="Submit" />
            </form>*/}
        //);
    }

}

function mapStateToProps(state) {
    return {
        usersAbout: state.users
    }
}

export default connect(mapStateToProps)(TransferStudent2);




{/*<div className='borderDiv'>
    <p className='paragraphText'>
        What's the name of the program you were enrolled in?
    </p>

    <input className="input__Text__default" placeholder={this.state.pastProgramName}
           onChange={this.handlePastProgramName}/>


    <p className='paragraphText'>
        Why did you transfer from your previous program?
    </p>

    <div className='span__Container'>
        <FormGroup
            value={this.state.reason}
            onChange={this.handleOnChange}
        >
            <Radio name="radioGroup" value={1}>
                Program too difficult
            </Radio>{' '}
            <Radio name="radioGroup" value={2}>
                Program not interesting
            </Radio>{' '}
            <Radio name="radioGroup" value={3}>
                Changed opinion on future
            </Radio>{' '}
            <Radio name="radioGroup" value={4}>
                other
            </Radio>
        </FormGroup>
    </div>

    <div className='span__Container'>
                                <ButtonToolbar>
                                    <ToggleButtonGroup
                                        type="radio" name="options"
                                        defaultValue={this.state.reason}
                                        bsSize="sm"
                                        onChange={this.handleOnChange}
                                    >
                                        <ToggleButton value={1}>.</ToggleButton>Program not interesting
                                        <br/>
                                        <br/>
                                        <ToggleButton value={2}>.</ToggleButton>
                                        <br/>
                                        <ToggleButton value={3}>.</ToggleButton>
                                        <br/>
                                        <ToggleButton value={4}>.</ToggleButton>
                                    </ToggleButtonGroup>
                                </ButtonToolbar>
                            </div>



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
