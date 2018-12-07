import React from 'react';

import Header from "../Header";
import Action from "../Action";

import {DropdownButton, Button, MenuItem,ButtonToolbar} from 'react-bootstrap';
import {connect} from 'react-redux';
import {addName} from "../../actions/actions";
import {addAcademia3} from "../../actions/actions";

let id = '';

class Academia3 extends React.Component{
    constructor(props){
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleOnChange = this.handleOnChange.bind(this);
        this.handleSchoolName = this.handleSchoolName.bind(this);
        this.handleTypeOfProgram = this.handleTypeOfProgram.bind(this);
        this.handleProgramName = this.handleProgramName.bind(this);
        this.handleObtainedMarks = this.handleObtainedMarks.bind(this);
        this.handleTotalMarks = this.handleTotalMarks.bind(this);
        this.handleFormData = this.handleFormData.bind(this);

        this.initiateCallFetch = this.initiateCallFetch.bind(this);
        this.callFetch = this.callFetch.bind(this);

        this.setStateCallBack = this.setStateCallBack.bind(this);

        this.state = {
            id: this.props.match.params.id,
            schoolName: 'School Name',
            typeOfDiploma: 'type of program',
            diplomaName: 'Program Name',
            obtainedMarks: '',
            totalMarks: ''
        };
        id = this.state.id;

    }

    setStateCallBack() {
        this.sendToStore();
    }

    sendToStore(){
        //console.log('Here in Send Function');
        this.props.dispatch(addAcademia3(this.state.id, {schoolName:this.state.schoolName,
            typeOfDiploma:this.state.typeOfDiploma,
            diplomaName: this.state.diplomaName, cgpaInSchool: this.state.obtainedMarks,
            totalCgpaInSchool: this.state.totalMarks}));
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

    handleSchoolName(event) {
        this.setState({schoolName: event.target.value},
            ()=> {
                this.setStateCallBack();
            })
    }

    handleTypeOfProgram(event, eventKey) {
        this.setState({typeOfDiploma: eventKey.target.text},
            ()=> {
                this.setStateCallBack();
            })
    }

    handleProgramName(event) {
        this.setState({diplomaName: event.target.value},
            ()=> {
                this.setStateCallBack();
            })
    }

    handleOnChange(event) {
        this.setState({value: event.target.value},
            ()=> {
                this.setStateCallBack();
            });
    }

    handleObtainedMarks(event) {
        this.setState({obtainedMarks: event.target.value},
            ()=> {
                this.setStateCallBack();
            });
    }

    handleTotalMarks(event) {
        this.setState({totalMarks: event.target.value},
            ()=> {
                this.setStateCallBack();
            });
    }

    handleSubmit(event) {
        alert('Your favorite flavor is: ' + this.state.value);
        event.preventDefault();
    }

    render() {

        console.log('Academia Page 3!');

        const title = "Let's talk about your academic status";
        const action = "/academia5";
        const actionButtonData = "Next";
        const actionButtonClass = "home-button-down";

        return(
            <div>
                <Header title={title}/>
                {
                    <div className='container'>

                        <div className='borderDiv'>
                            <p className='paragraphText'>
                                What school did you attend during your
                                <span className='span__Text__blue'>High School</span>
                                years?
                            </p>

                            <input className="input__Text__default" placeholder={this.state.schoolName}
                                   onChange={this.handleSchoolName}/>

                            <p className='paragraphText'>
                                What is the name of the program you were enrolled in?
                            </p>

                            <span className='span__Container'>
                                <DropdownButton
                                    bsSize="small"
                                    bsStyle={'default'.toLowerCase()}
                                    title={this.state.typeOfDiploma}
                                    key={0}
                                    id={'typeOfProgram'}

                                    onSelect={this.handleTypeOfProgram}
                                >
                                <MenuItem eventKey={0} value="International">
                                    International Baccalaureate
                                </MenuItem>
                                <MenuItem eventKey={1} value="French">French Baccalaureate</MenuItem>
                                <MenuItem eventKey={2} value="Associate">Associate Degree</MenuItem>

                                </DropdownButton>
                                <input className="input__Text__Left" placeholder={this.state.diplomaName}
                                       onChange={this.handleProgramName}/>

                            </span>

                            <br>
                            </br>
                            <br>
                            </br>
                            <p className='paragraphText'>
                                How was overall performance during
                                <span className='span__Text__blue'>High School</span>
                                ?
                            </p>

                            <p className='paragraphText'>My overall performance was
                                <input className="input__Text__Small" placeholder={this.state.obtainedMarks}
                                       onChange={this.handleObtainedMarks}/>
                                    /
                                <input className="input__Text__Small" placeholder={this.state.totalMarks}
                                       onChange={this.handleTotalMarks}/>
                            </p>


                                <Action action={action}
                                        actionButtonData={actionButtonData}
                                        classButton={actionButtonClass}
                                        sendID={this.state.id}/>


                            {/*<button className='home-button-down' onClick={this.handleFormData}>Save</button>*/}

                        </div>


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

export default connect(mapStateToProps)(Academia3);


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
