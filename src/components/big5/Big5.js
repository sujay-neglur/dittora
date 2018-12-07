import React from 'react';

import Header from "../Header";
import Action from "../Action";

import {DropdownButton, Button, MenuItem,ButtonToolbar, ButtonGroup, ToggleButtonGroup, ToggleButton, Radio} from 'react-bootstrap';
import {connect} from 'react-redux';
import {addBig5, addName} from "../../actions/actions";
import {addAcademia3} from "../../actions/actions";

import TypeFormTest from './TypeFormTest';

import DittoraRegularLogo from '../../images-logos/dittora-regular-logo/dittora-regular-logo.svg';
import Big5Logo from '../../images-logos/big5/big5-logo.svg';
import Big5BottomNavBar from '../../images-logos/big5/big5-bottom-navbar.svg';



let id = '';

class Big5 extends React.Component{
    constructor(props){
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleOnChange = this.handleOnChange.bind(this);

        this.handleButton1 = this.handleButton1.bind(this);
        this.handleButton2 = this.handleButton2.bind(this);
        this.handleButton3 = this.handleButton3.bind(this);
        this.handleButton4 = this.handleButton4.bind(this);
        this.handleButton5 = this.handleButton5.bind(this);
        this.handleButton6 = this.handleButton6.bind(this);
        this.handleButton7 = this.handleButton7.bind(this);
        this.handleButton8 = this.handleButton8.bind(this);
        this.handleButton9 = this.handleButton9.bind(this);
        this.handleButton10 = this.handleButton10.bind(this);
        this.handleButton11 = this.handleButton11.bind(this);
        this.handleButton12 = this.handleButton12.bind(this);
        this.handleButton13 = this.handleButton13.bind(this);
        this.handleButton14 = this.handleButton14.bind(this);
        this.handleButton15 = this.handleButton15.bind(this);
        this.handleButton16 = this.handleButton16.bind(this);
        this.handleButton17 = this.handleButton17.bind(this);
        this.handleButton18 = this.handleButton18.bind(this);
        this.handleButton19 = this.handleButton19.bind(this);
        this.handleButton20 = this.handleButton20.bind(this);


        this.handleFormData = this.handleFormData.bind(this);

        this.initiateCallFetch = this.initiateCallFetch.bind(this)
        this.callFetch = this.callFetch.bind(this);

        this.sendToStore = this.sendToStore.bind(this);

        this.setStateCallBack = this.setStateCallBack.bind(this);
        this.state = {
            id: this.props.match.params.id,
            option1:3,
            option2:3,
            option3:3,
            option4:3,
            option5:3,
            option6:3,
            option7:3,
            option8:3,
            option9:3,
            option10:3,
            option11:3,
            option12:3,
            option13:3,
            option14:3,
            option15:3,
            option16:3,
            option17:3,
            option18:3,
            option19:3,
            option20:3,

            bgColor:'white'
        };
        id = this.state.id;

    }


    handleFormData(event) {
        event.preventDefault();



        let dx = this.state;
        console.log(dx);
        //this.callFetch(dx);

        /*this.props.dispatch(addBig5(this.state.id,
            {option1:this.state.option1, option2:this.state.option2,
            option3: this.state.option3, option4: this.state.option4,
            option5: this.state.option5, option6: this.state.option6,
            option7: this.state.option7, option8: this.state.option8,
            option9: this.state.option9, option10: this.state.option10,
            option11: this.state.option11, option12: this.state.option12,
            option13: this.state.option13, option14: this.state.option14,
            option15: this.state.option15, option16: this.state.option16,
            option17: this.state.option17, option18: this.state.option18,
            option19: this.state.option19, option20: this.state.option20,
            }));*/

        console.log("Store props: ");
        //console.log(this.props.usersAbout[0][0]);

    }

    setStateCallBack() {
        this.sendToStore();
    }

    sendToStore(){
        console.log('Here in Send Function');
        this.props.dispatch(addBig5(this.state.id,
            {lifeOfTheParty:this.state.option1, sympatheticToOthers:this.state.option2,
                doChoresRightAway: this.state.option3, frequentMoodSwings: this.state.option4,
                vividImagination: this.state.option5, doNotTalkALot: this.state.option6,
                notInterestedInOthersProblems: this.state.option7,
                forgetToPutThingsBackInPlace: this.state.option8, relaxedMostOfTheTime: this.state.option9,
                notInterestedInAbstractIdeas: this.state.option10, talkToDifferentPeopleAtParties: this.state.option11,
                feelOthersEmotions: this.state.option12, likeOrder: this.state.option13,
                getUpsetEasily: this.state.option14, difficultyUnderstandingAbstractIdeas: this.state.option15,
                keepInBackground: this.state.option16, notInterestedInOthers: this.state.option17,
                makeMessOfThings: this.state.option18, seldomFeelBlue: this.state.option19,
                doNotHaveGoodImagination: this.state.option20
            }));
    }

    initiateCallFetch(){
        let object = this.props.usersAbout[0].addBig5.users;

        object.token = this.props.usersAbout[0].token;

        this.callFetch(object)
    }

    callFetch(dx) {
        console.log("In callFetch");
        //console.log(object);
        /*header('Access-Control-Allow-Origin: *');
        header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
        header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');*/
        //Axios.post('/data', {id: 'id here'})


        fetch('http://localhost:5000/bigFive', {
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

    handleButton1(event) {
        //console.log('In Button 1');
        this.setState({option1: event.target.value,
        },
            ()=> {
                this.setStateCallBack();
            });


    }

    handleButton2(event) {
        this.setState({option2: event.target.value},
            ()=> {
                this.setStateCallBack();
            });

    }
    handleButton3(event) {
        this.setState({option3: event.target.value},
            ()=> {
                this.setStateCallBack();
            });

    }
    handleButton4(event) {
        this.setState({option4: event.target.value},
            ()=> {
                this.setStateCallBack();
            });

    }
    handleButton5(event) {
        this.setState({option5: event.target.value},
            ()=> {
                this.setStateCallBack();
            });

    }
    handleButton6(event) {
        this.setState({option6: event.target.value},
            ()=> {
                this.setStateCallBack();
            });

    }

    handleButton7(event) {
        this.setState({option7: event.target.value},
            ()=> {
                this.setStateCallBack();
            });

    }
    handleButton8(event) {
        this.setState({option8: event.target.value},
            ()=> {
                this.setStateCallBack();
            });

    }

    handleButton9(event) {
        this.setState({option9: event.target.value},
            ()=> {
                this.setStateCallBack();
            });

    }
    handleButton10(event) {
        this.setState({option10: event.target.value},
            ()=> {
                this.setStateCallBack();
            });

    }
    handleButton11(event) {
        this.setState({option11: event.target.value},
            ()=> {
                this.setStateCallBack();
            });

    }
    handleButton12(event) {
        this.setState({option12: event.target.value},
            ()=> {
                this.setStateCallBack();
            });

    }
    handleButton13(event) {
        this.setState({option13: event.target.value},
            ()=> {
                this.setStateCallBack();
            });

    }
    handleButton14(event) {
        this.setState({option14: event.target.value},
            ()=> {
                this.setStateCallBack();
            });

    }
    handleButton15(event) {
        this.setState({option15: event.target.value},
            ()=> {
                this.setStateCallBack();
            });

    }
    handleButton16(event) {
        this.setState({option16: event.target.value},
            ()=> {
                this.setStateCallBack();
            });

    }
    handleButton17(event) {
        this.setState({option17: event.target.value},
            ()=> {
                this.setStateCallBack();
            });

    }
    handleButton18(event) {
        this.setState({option18: event.target.value},
            ()=> {
                this.setStateCallBack();
            });

    }
    handleButton19(event) {
        this.setState({option19: event.target.value},
            ()=> {
                this.setStateCallBack();
            });

    }
    handleButton20(event) {
        this.setState({option20: event.target.value},
            ()=> {
                this.setStateCallBack();
            });

    }

    handleOnChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        alert('Your favorite flavor is: ' + this.state.value);
        event.preventDefault();
    }

    render() {

        console.log('Big5 Page!');

        const title = "Title";
        const action = "/thankyou";
        const actionButtonData = "Next";
        const actionButtonClass = "home-button-down";



        return(
            <div>
                <img className='dittora-regular-logo' src={DittoraRegularLogo} alt='dittora-regular-logo' />
                <img className='big5-logo' src={Big5Logo} alt='big5-logo' />
                {/*<img className='university-logo' src={UniversityLogo} alt='university-logo' />*/}
                <span className="big5-border-header">
                    Now for the last part, we ask you some questions about your personality!
                </span>
                {
                    <div className='container'>

                        <span className='big5-border'></span>


                        <span className='big5-inner-border-header'>
                            How much do you agree with each statement as you generally are now, not as you wish to be in the future?
                        </span>


                        <span>
                            <span className="big5-question1">
                                        1. I am the life of party
                                    </span>


                            <button onClick={this.handleButton1} className="big5-question1-button-1" value={1}>
                            </button>
                            <span className="big5-question1-button-1-text">1</span>

                            <button onClick={this.handleButton1} className="big5-question1-button-2" value={2}>
                            </button>
                            <span className="big5-question1-button-2-text">2</span>

                            <button onClick={this.handleButton1} className="big5-question1-button-3" value={3}>
                            </button>
                            <span className="big5-question1-button-3-text">3</span>

                            <button onClick={this.handleButton1} className="big5-question1-button-4" value={4}>
                            </button>
                            <span className="big5-question1-button-4-text">4</span>

                            <button onClick={this.handleButton1} className="big5-question1-button-5" value={5}>
                            </button>
                            <span className="big5-question1-button-5-text">5</span>

                            <span className="big5-question1-strongly-disagree">Strongly Disagree</span>
                            <span className="big5-question1-neutral">Neutral</span>
                            <span className="big5-question1-strongly-agree">Strongly Agree</span>

                        </span>



                        <span>
                            <span className="big5-question2">
                                        2. I sympathize with others' feelings
                                    </span>


                            <button onClick={this.handleButton2} className="big5-question2-button-1" value={1}>
                            </button>
                            <span className="big5-question2-button-1-text">1</span>

                            <button onClick={this.handleButton2} className="big5-question2-button-2" value={2}>
                            </button>
                            <span className="big5-question2-button-2-text">2</span>

                            <button onClick={this.handleButton2} className="big5-question2-button-3" value={3}>
                            </button>
                            <span className="big5-question2-button-3-text">3</span>

                            <button onClick={this.handleButton2} className="big5-question2-button-4" value={4}>
                            </button>
                            <span className="big5-question2-button-4-text">4</span>

                            <button onClick={this.handleButton2} className="big5-question2-button-5" value={5}>
                            </button>
                            <span className="big5-question2-button-5-text">5</span>

                            <span className="big5-question2-strongly-disagree">Strongly Disagree</span>
                            <span className="big5-question2-neutral">Neutral</span>
                            <span className="big5-question2-strongly-agree">Strongly Agree</span>

                        </span>


                        <span>
                            <span className="big5-question3">
                                        3. I get chores done right away
                                    </span>


                            <button onClick={this.handleButton3} className="big5-question3-button-1" value={1}>
                            </button>
                            <span className="big5-question3-button-1-text">1</span>

                            <button onClick={this.handleButton3} className="big5-question3-button-2" value={2}>
                            </button>
                            <span className="big5-question3-button-2-text">2</span>

                            <button onClick={this.handleButton3} className="big5-question3-button-3" value={3}>
                            </button>
                            <span className="big5-question3-button-3-text">3</span>

                            <button onClick={this.handleButton3} className="big5-question3-button-4" value={4}>
                            </button>
                            <span className="big5-question3-button-4-text">4</span>

                            <button onClick={this.handleButton3} className="big5-question3-button-5" value={5}>
                            </button>
                            <span className="big5-question3-button-5-text">5</span>

                            <span className="big5-question3-strongly-disagree">Strongly Disagree</span>
                            <span className="big5-question3-neutral">Neutral</span>
                            <span className="big5-question3-strongly-agree">Strongly Agree</span>

                        </span>


                        <span>
                            <span className="big5-question4">
                                        4. I have frequent mood swings
                                    </span>


                            <button onClick={this.handleButton4} className="big5-question4-button-1" value={1}>
                            </button>
                            <span className="big5-question4-button-1-text">1</span>

                            <button onClick={this.handleButton4} className="big5-question4-button-2" value={2}>
                            </button>
                            <span className="big5-question4-button-2-text">2</span>

                            <button onClick={this.handleButton4} className="big5-question4-button-3" value={3}>
                            </button>
                            <span className="big5-question4-button-3-text">3</span>

                            <button onClick={this.handleButton4} className="big5-question4-button-4" value={4}>
                            </button>
                            <span className="big5-question4-button-4-text">4</span>

                            <button onClick={this.handleButton4} className="big5-question4-button-5" value={5}>
                            </button>
                            <span className="big5-question4-button-5-text">5</span>

                            <span className="big5-question4-strongly-disagree">Strongly Disagree</span>
                            <span className="big5-question4-neutral">Neutral</span>
                            <span className="big5-question4-strongly-agree">Strongly Agree</span>

                        </span>


                        <span>
                            <span className="big5-question5">
                                        5. I have a vivid imagination
                                    </span>


                            <button onClick={this.handleButton5} className="big5-question5-button-1" value={1}>
                            </button>
                            <span className="big5-question5-button-1-text">1</span>

                            <button onClick={this.handleButton5} className="big5-question5-button-2" value={2}>
                            </button>
                            <span className="big5-question5-button-2-text">2</span>

                            <button onClick={this.handleButton5} className="big5-question5-button-3" value={3}>
                            </button>
                            <span className="big5-question5-button-3-text">3</span>

                            <button onClick={this.handleButton5} className="big5-question5-button-4" value={4}>
                            </button>
                            <span className="big5-question5-button-4-text">4</span>

                            <button onClick={this.handleButton5} className="big5-question5-button-5" value={5}>
                            </button>
                            <span className="big5-question5-button-5-text">5</span>

                            <span className="big5-question5-strongly-disagree">Strongly Disagree</span>
                            <span className="big5-question5-neutral">Neutral</span>
                            <span className="big5-question5-strongly-agree">Strongly Agree</span>

                        </span>


                        <span>
                            <span className="big5-question6">
                                        6. I don't talk a lot
                                    </span>


                            <button onClick={this.handleButton6} className="big5-question6-button-1" value={1}>
                            </button>
                            <span className="big5-question6-button-1-text">1</span>

                            <button onClick={this.handleButton6} className="big5-question6-button-2" value={2}>
                            </button>
                            <span className="big5-question6-button-2-text">2</span>

                            <button onClick={this.handleButton6} className="big5-question6-button-3" value={3}>
                            </button>
                            <span className="big5-question6-button-3-text">3</span>

                            <button onClick={this.handleButton6} className="big5-question6-button-4" value={4}>
                            </button>
                            <span className="big5-question6-button-4-text">4</span>

                            <button onClick={this.handleButton6} className="big5-question6-button-5" value={5}>
                            </button>
                            <span className="big5-question6-button-5-text">5</span>

                            <span className="big5-question6-strongly-disagree">Strongly Disagree</span>
                            <span className="big5-question6-neutral">Neutral</span>
                            <span className="big5-question6-strongly-agree">Strongly Agree</span>

                        </span>




                        <span>
                            <span className="big5-question7">
                                        7. I am not interested in other people's problems
                                    </span>


                            <button onClick={this.handleButton7} className="big5-question7-button-1" value={1}>
                            </button>
                            <span className="big5-question7-button-1-text">1</span>

                            <button onClick={this.handleButton7} className="big5-question7-button-2" value={2}>
                            </button>
                            <span className="big5-question7-button-2-text">2</span>

                            <button onClick={this.handleButton7} className="big5-question7-button-3" value={3}>
                            </button>
                            <span className="big5-question7-button-3-text">3</span>

                            <button onClick={this.handleButton7} className="big5-question7-button-4" value={4}>
                            </button>
                            <span className="big5-question7-button-4-text">4</span>

                            <button onClick={this.handleButton7} className="big5-question7-button-5" value={5}>
                            </button>
                            <span className="big5-question7-button-5-text">5</span>

                            <span className="big5-question7-strongly-disagree">Strongly Disagree</span>
                            <span className="big5-question7-neutral">Neutral</span>
                            <span className="big5-question7-strongly-agree">Strongly Agree</span>

                        </span>



                        <span>
                            <span className="big5-question8">
                                        8. I often forget to put things back in their proper place
                                    </span>


                            <button onClick={this.handleButton8} className="big5-question8-button-1" value={1}>
                            </button>
                            <span className="big5-question8-button-1-text">1</span>

                            <button onClick={this.handleButton8} className="big5-question8-button-2" value={2}>
                            </button>
                            <span className="big5-question8-button-2-text">2</span>

                            <button onClick={this.handleButton8} className="big5-question8-button-3" value={3}>
                            </button>
                            <span className="big5-question8-button-3-text">3</span>

                            <button onClick={this.handleButton8} className="big5-question8-button-4" value={4}>
                            </button>
                            <span className="big5-question8-button-4-text">4</span>

                            <button onClick={this.handleButton8} className="big5-question8-button-5" value={5}>
                            </button>
                            <span className="big5-question8-button-5-text">5</span>

                            <span className="big5-question8-strongly-disagree">Strongly Disagree</span>
                            <span className="big5-question8-neutral">Neutral</span>
                            <span className="big5-question8-strongly-agree">Strongly Agree</span>

                        </span>




                        <span>
                            <span className="big5-question9">
                                        9. I am relaxed most of the time
                                    </span>


                            <button onClick={this.handleButton9} className="big5-question9-button-1" value={1}>
                            </button>
                            <span className="big5-question9-button-1-text">1</span>

                            <button onClick={this.handleButton9} className="big5-question9-button-2" value={2}>
                            </button>
                            <span className="big5-question9-button-2-text">2</span>

                            <button onClick={this.handleButton9} className="big5-question9-button-3" value={3}>
                            </button>
                            <span className="big5-question9-button-3-text">3</span>

                            <button onClick={this.handleButton9} className="big5-question9-button-4" value={4}>
                            </button>
                            <span className="big5-question9-button-4-text">4</span>

                            <button onClick={this.handleButton9} className="big5-question9-button-5" value={5}>
                            </button>
                            <span className="big5-question9-button-5-text">5</span>

                            <span className="big5-question9-strongly-disagree">Strongly Disagree</span>
                            <span className="big5-question9-neutral">Neutral</span>
                            <span className="big5-question9-strongly-agree">Strongly Agree</span>

                        </span>




                        <span>
                            <span className="big5-question10">
                                        10. I am not interested in abstract ideas
                                    </span>


                            <button onClick={this.handleButton10} className="big5-question10-button-1" value={1}>
                            </button>
                            <span className="big5-question10-button-1-text">1</span>

                            <button onClick={this.handleButton10} className="big5-question10-button-2" value={2}>
                            </button>
                            <span className="big5-question10-button-2-text">2</span>

                            <button onClick={this.handleButton10} className="big5-question10-button-3" value={3}>
                            </button>
                            <span className="big5-question10-button-3-text">3</span>

                            <button onClick={this.handleButton10} className="big5-question10-button-4" value={4}>
                            </button>
                            <span className="big5-question10-button-4-text">4</span>

                            <button onClick={this.handleButton10} className="big5-question10-button-5" value={5}>
                            </button>
                            <span className="big5-question10-button-5-text">5</span>

                            <span className="big5-question10-strongly-disagree">Strongly Disagree</span>
                            <span className="big5-question10-neutral">Neutral</span>
                            <span className="big5-question10-strongly-agree">Strongly Agree</span>

                        </span>




                        <span>
                            <span className="big5-question11">
                                        11. I talk to a lot of different people at parties
                                    </span>


                            <button onClick={this.handleButton11} className="big5-question11-button-1" value={1}>
                            </button>
                            <span className="big5-question11-button-1-text">1</span>

                            <button onClick={this.handleButton11} className="big5-question11-button-2" value={2}>
                            </button>
                            <span className="big5-question11-button-2-text">2</span>

                            <button onClick={this.handleButton11} className="big5-question11-button-3" value={3}>
                            </button>
                            <span className="big5-question11-button-3-text">3</span>

                            <button onClick={this.handleButton11} className="big5-question11-button-4" value={4}>
                            </button>
                            <span className="big5-question11-button-4-text">4</span>

                            <button onClick={this.handleButton11} className="big5-question11-button-5" value={5}>
                            </button>
                            <span className="big5-question11-button-5-text">5</span>

                            <span className="big5-question11-strongly-disagree">Strongly Disagree</span>
                            <span className="big5-question11-neutral">Neutral</span>
                            <span className="big5-question11-strongly-agree">Strongly Agree</span>

                        </span>



                        <span>
                            <span className="big5-question12">
                                        12. I feel others' emotions
                                    </span>


                            <button onClick={this.handleButton12} className="big5-question12-button-1" value={1}>
                            </button>
                            <span className="big5-question12-button-1-text">1</span>

                            <button onClick={this.handleButton12} className="big5-question12-button-2" value={2}>
                            </button>
                            <span className="big5-question12-button-2-text">2</span>

                            <button onClick={this.handleButton12} className="big5-question12-button-3" value={3}>
                            </button>
                            <span className="big5-question12-button-3-text">3</span>

                            <button onClick={this.handleButton12} className="big5-question12-button-4" value={4}>
                            </button>
                            <span className="big5-question12-button-4-text">4</span>

                            <button onClick={this.handleButton12} className="big5-question12-button-5" value={5}>
                            </button>
                            <span className="big5-question12-button-5-text">5</span>

                            <span className="big5-question12-strongly-disagree">Strongly Disagree</span>
                            <span className="big5-question12-neutral">Neutral</span>
                            <span className="big5-question12-strongly-agree">Strongly Agree</span>

                        </span>




                        <span>
                            <span className="big5-question13">
                                        13. I like order
                                    </span>


                            <button onClick={this.handleButton13} className="big5-question13-button-1" value={1}>
                            </button>
                            <span className="big5-question13-button-1-text">1</span>

                            <button onClick={this.handleButton13} className="big5-question13-button-2" value={2}>
                            </button>
                            <span className="big5-question13-button-2-text">2</span>

                            <button onClick={this.handleButton13} className="big5-question13-button-3" value={3}>
                            </button>
                            <span className="big5-question13-button-3-text">3</span>

                            <button onClick={this.handleButton13} className="big5-question13-button-4" value={4}>
                            </button>
                            <span className="big5-question13-button-4-text">4</span>

                            <button onClick={this.handleButton13} className="big5-question13-button-5" value={5}>
                            </button>
                            <span className="big5-question13-button-5-text">5</span>

                            <span className="big5-question13-strongly-disagree">Strongly Disagree</span>
                            <span className="big5-question13-neutral">Neutral</span>
                            <span className="big5-question13-strongly-agree">Strongly Agree</span>

                        </span>





                        <span>
                            <span className="big5-question14">
                                        14. I get upset easily
                                    </span>


                            <button onClick={this.handleButton14} className="big5-question14-button-1" value={1}>
                            </button>
                            <span className="big5-question14-button-1-text">1</span>

                            <button onClick={this.handleButton14} className="big5-question14-button-2" value={2}>
                            </button>
                            <span className="big5-question14-button-2-text">2</span>

                            <button onClick={this.handleButton14} className="big5-question14-button-3" value={3}>
                            </button>
                            <span className="big5-question14-button-3-text">3</span>

                            <button onClick={this.handleButton14} className="big5-question14-button-4" value={4}>
                            </button>
                            <span className="big5-question14-button-4-text">4</span>

                            <button onClick={this.handleButton14} className="big5-question14-button-5" value={5}>
                            </button>
                            <span className="big5-question14-button-5-text">5</span>

                            <span className="big5-question14-strongly-disagree">Strongly Disagree</span>
                            <span className="big5-question14-neutral">Neutral</span>
                            <span className="big5-question14-strongly-agree">Strongly Agree</span>

                        </span>







                        <span>
                            <span className="big5-question15">
                                        15. I have difficulties understanding abstract ideas
                                    </span>


                            <button onClick={this.handleButton15} className="big5-question15-button-1" value={1}>
                            </button>
                            <span className="big5-question15-button-1-text">1</span>

                            <button onClick={this.handleButton15} className="big5-question15-button-2" value={2}>
                            </button>
                            <span className="big5-question15-button-2-text">2</span>

                            <button onClick={this.handleButton15} className="big5-question15-button-3" value={3}>
                            </button>
                            <span className="big5-question15-button-3-text">3</span>

                            <button onClick={this.handleButton15} className="big5-question15-button-4" value={4}>
                            </button>
                            <span className="big5-question15-button-4-text">4</span>

                            <button onClick={this.handleButton15} className="big5-question15-button-5" value={5}>
                            </button>
                            <span className="big5-question15-button-5-text">5</span>

                            <span className="big5-question15-strongly-disagree">Strongly Disagree</span>
                            <span className="big5-question15-neutral">Neutral</span>
                            <span className="big5-question15-strongly-agree">Strongly Agree</span>

                        </span>




























                        <span>
                            <span className="big5-question16">
                                        16. I keep in the background
                                    </span>


                            <button onClick={this.handleButton16} className="big5-question16-button-1" value={1}>
                            </button>
                            <span className="big5-question16-button-1-text">1</span>

                            <button onClick={this.handleButton16} className="big5-question16-button-2" value={2}>
                            </button>
                            <span className="big5-question16-button-2-text">2</span>

                            <button onClick={this.handleButton16} className="big5-question16-button-3" value={3}>
                            </button>
                            <span className="big5-question16-button-3-text">3</span>

                            <button onClick={this.handleButton16} className="big5-question16-button-4" value={4}>
                            </button>
                            <span className="big5-question16-button-4-text">4</span>

                            <button onClick={this.handleButton16} className="big5-question16-button-5" value={5}>
                            </button>
                            <span className="big5-question16-button-5-text">5</span>

                            <span className="big5-question16-strongly-disagree">Strongly Disagree</span>
                            <span className="big5-question16-neutral">Neutral</span>
                            <span className="big5-question16-strongly-agree">Strongly Agree</span>

                        </span>




                        <span>
                            <span className="big5-question17">
                                        17. I am not really interested in others
                                    </span>


                            <button onClick={this.handleButton17} className="big5-question17-button-1" value={1}>
                            </button>
                            <span className="big5-question17-button-1-text">1</span>

                            <button onClick={this.handleButton17} className="big5-question17-button-2" value={2}>
                            </button>
                            <span className="big5-question17-button-2-text">2</span>

                            <button onClick={this.handleButton17} className="big5-question17-button-3" value={3}>
                            </button>
                            <span className="big5-question17-button-3-text">3</span>

                            <button onClick={this.handleButton17} className="big5-question17-button-4" value={4}>
                            </button>
                            <span className="big5-question17-button-4-text">4</span>

                            <button onClick={this.handleButton17} className="big5-question17-button-5" value={5}>
                            </button>
                            <span className="big5-question17-button-5-text">5</span>

                            <span className="big5-question17-strongly-disagree">Strongly Disagree</span>
                            <span className="big5-question17-neutral">Neutral</span>
                            <span className="big5-question17-strongly-agree">Strongly Agree</span>

                        </span>




                        <span>
                            <span className="big5-question18">
                                        18. I make a mess of things
                                    </span>


                            <button onClick={this.handleButton18} className="big5-question18-button-1" value={1}>
                            </button>
                            <span className="big5-question18-button-1-text">1</span>

                            <button onClick={this.handleButton18} className="big5-question18-button-2" value={2}>
                            </button>
                            <span className="big5-question18-button-2-text">2</span>

                            <button onClick={this.handleButton18} className="big5-question18-button-3" value={3}>
                            </button>
                            <span className="big5-question18-button-3-text">3</span>

                            <button onClick={this.handleButton18} className="big5-question18-button-4" value={4}>
                            </button>
                            <span className="big5-question18-button-4-text">4</span>

                            <button onClick={this.handleButton18} className="big5-question18-button-5" value={5}>
                            </button>
                            <span className="big5-question18-button-5-text">5</span>

                            <span className="big5-question18-strongly-disagree">Strongly Disagree</span>
                            <span className="big5-question18-neutral">Neutral</span>
                            <span className="big5-question18-strongly-agree">Strongly Agree</span>

                        </span>



                        <span>
                            <span className="big5-question19">
                                        19. I seldom feel blue
                                    </span>


                            <button onClick={this.handleButton19} className="big5-question19-button-1" value={1}>
                            </button>
                            <span className="big5-question19-button-1-text">1</span>

                            <button onClick={this.handleButton19} className="big5-question19-button-2" value={2}>
                            </button>
                            <span className="big5-question19-button-2-text">2</span>

                            <button onClick={this.handleButton19} className="big5-question19-button-3" value={3}>
                            </button>
                            <span className="big5-question19-button-3-text">3</span>

                            <button onClick={this.handleButton19} className="big5-question19-button-4" value={4}>
                            </button>
                            <span className="big5-question19-button-4-text">4</span>

                            <button onClick={this.handleButton19} className="big5-question19-button-5" value={5}>
                            </button>
                            <span className="big5-question19-button-5-text">5</span>

                            <span className="big5-question19-strongly-disagree">Strongly Disagree</span>
                            <span className="big5-question19-neutral">Neutral</span>
                            <span className="big5-question19-strongly-agree">Strongly Agree</span>

                        </span>



                        <span>
                            <span className="big5-question20">
                                        20. I do not have a good imagination
                                    </span>


                            <button onClick={this.handleButton20} className="big5-question20-button-1" value={1}>
                            </button>
                            <span className="big5-question20-button-1-text">1</span>

                            <button onClick={this.handleButton20} className="big5-question20-button-2" value={2}>
                            </button>
                            <span className="big5-question20-button-2-text">2</span>

                            <button onClick={this.handleButton20} className="big5-question20-button-3" value={3}>
                            </button>
                            <span className="big5-question20-button-3-text">3</span>

                            <button onClick={this.handleButton20} className="big5-question20-button-4" value={4}>
                            </button>
                            <span className="big5-question20-button-4-text">4</span>

                            <button onClick={this.handleButton20} className="big5-question20-button-5" value={5}>
                            </button>
                            <span className="big5-question20-button-5-text">5</span>

                            <span className="big5-question20-strongly-disagree">Strongly Disagree</span>
                            <span className="big5-question20-neutral">Neutral</span>
                            <span className="big5-question20-strongly-agree">Strongly Agree</span>

                        </span>


                        <div onClick={this.initiateCallFetch}>
                        <Action action={action}
                                actionButtonData="Submit"
                                classButton='big5-button'
                                sendID={this.state.id}/>
                        </div>

                        <img className='big5-bottom-navbar' src={Big5BottomNavBar} alt='big5-bottom-navbar' />

                        {/*<button className='big5-button' onClick={this.handleFormData}>Next</button>*/}

                        {/*<TypeFormTest/>*/}

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

export default connect(mapStateToProps)(Big5);





{/*
<div className='container__Big'>

    <p className="span__Text2__Bold">
        How much do you agree with each statement about you as you generally are now,
        not as you wish to be in future?
    </p>
    <div className='borderDiv__Big'>


        <div className='span__Container'>

            <div className="div__Button2">

                                    <span className="span__Text__Big5">
                                        I am the life of party
                                    </span>
                <div className='span__Container_Left_Right4'>


                    <button onClick={this.handleButton1} className="big5-button" value={1}>1</button>
                    <button onClick={this.handleButton1} className="big5-button" value={2}>2</button>
                    <button onClick={this.handleButton1} className="big5-button" value={3}>3</button>
                    <button onClick={this.handleButton1} className="big5-button" value={4}>4</button>
                    <button onClick={this.handleButton1} className="big5-button" value={5}>5</button>



                </div>
                <p className="big5__Text">Strongly Disagree &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    Neutral
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Strongly Agree</p>
            </div>

        </div>


        <div className='span__Container'>

            <div className="div__Button2">

                                <span className="span__Text__Big5">
                                    I sympathize with others' feelings
                                </span>
                <div className='span__Container_Left_Right4'>

                    <ButtonToolbar>
                                            <ToggleButtonGroup type="radio" name="options">
                                                <button onClick={this.handleButton1} className="big5-button"
                                                              style={{backgroundColor:this.state.bgColor}}
                                                              value={1}>Radio 1</button>
                                                <button onClick={this.handleButton1} className="big5-button"
                                                              style={{backgroundColor:this.state.bgColor}}
                                                              value={2}>Radio 2</button>
                                                <button onClick={this.handleButton1} className="big5-button"
                                                              style={{backgroundColor:this.state.bgColor}}
                                                              value={3}>Radio 3</button>
                                            </ToggleButtonGroup>
                                        </ButtonToolbar>
                    <button onClick={this.handleButton2} className="big5-button" value={1}>1</button>
                    <button onClick={this.handleButton2} className="big5-button" value={2}>2</button>
                    <button onClick={this.handleButton2} className="big5-button" value={3}>3</button>
                    <button onClick={this.handleButton2} className="big5-button" value={4}>4</button>
                    <button onClick={this.handleButton2} className="big5-button" value={5}>5</button>



                </div>
                <p className="big5__Text">Strongly Disagree &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    Neutral
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Strongly Agree</p>
            </div>

        </div>




        <div className='span__Container'>

            <div className="div__Button2">

                                <span className="span__Text__Big5">
                                    I get chores done right way
                                </span>
                <div className='span__Container_Left_Right4'>


                    <button onClick={this.handleButton3} className="big5-button" value={1}>1</button>
                    <button onClick={this.handleButton3} className="big5-button" value={2}>2</button>
                    <button onClick={this.handleButton3} className="big5-button" value={3}>3</button>
                    <button onClick={this.handleButton3} className="big5-button" value={4}>4</button>
                    <button onClick={this.handleButton3} className="big5-button" value={5}>5</button>



                </div>
                <p className="big5__Text">Strongly Disagree &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    Neutral
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Strongly Agree</p>

            </div>

        </div>





        <div className='span__Container'>

            <div className="div__Button2">

                                <span className="span__Text__Big5">
                                    I have frequent mood swings
                                </span>
                <div className='span__Container_Left_Right4'>


                    <button onClick={this.handleButton4} className="big5-button" value={1}>1</button>
                    <button onClick={this.handleButton4} className="big5-button" value={2}>2</button>
                    <button onClick={this.handleButton4} className="big5-button" value={3}>3</button>
                    <button onClick={this.handleButton4} className="big5-button" value={4}>4</button>
                    <button onClick={this.handleButton4} className="big5-button" value={5}>5</button>



                </div>
                <p className="big5__Text">Strongly Disagree &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    Neutral
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Strongly Agree</p>

            </div>

        </div>




        <div className='span__Container'>

            <div className="div__Button2">

                                <span className="span__Text__Big5">
                                    I have a vivid imagination
                                </span>
                <div className='span__Container_Left_Right4'>


                    <button onClick={this.handleButton5} className="big5-button" value={1}>1</button>
                    <button onClick={this.handleButton5} className="big5-button" value={2}>2</button>
                    <button onClick={this.handleButton5} className="big5-button" value={3}>3</button>
                    <button onClick={this.handleButton5} className="big5-button" value={4}>4</button>
                    <button onClick={this.handleButton5} className="big5-button" value={5}>5</button>



                </div>
                <p className="big5__Text">Strongly Disagree &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    Neutral
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Strongly Agree</p>

            </div>

        </div>


        <div className='span__Container'>

            <div className="div__Button2">

                                <span className="span__Text__Big5">
                                    I don't talk a lot
                                </span>
                <div className='span__Container_Left_Right4'>


                    <button onClick={this.handleButton6} className="big5-button" value={1}>1</button>
                    <button onClick={this.handleButton6} className="big5-button" value={2}>2</button>
                    <button onClick={this.handleButton6} className="big5-button" value={3}>3</button>
                    <button onClick={this.handleButton6} className="big5-button" value={4}>4</button>
                    <button onClick={this.handleButton6} className="big5-button" value={5}>5</button>



                </div>
                <p className="big5__Text">Strongly Disagree &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    Neutral
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Strongly Agree</p>

            </div>

        </div>

        <div className='span__Container'>

            <div className="div__Button2">

                                <span className="span__Text__Big5">
                                    I am not interested in other people's problems
                                </span>
                <div className='span__Container_Left_Right4'>


                    <button onClick={this.handleButton7} className="big5-button" value={1}>1</button>
                    <button onClick={this.handleButton7} className="big5-button" value={2}>2</button>
                    <button onClick={this.handleButton7} className="big5-button" value={3}>3</button>
                    <button onClick={this.handleButton7} className="big5-button" value={4}>4</button>
                    <button onClick={this.handleButton7} className="big5-button" value={5}>5</button>



                </div>
                <p className="big5__Text">Strongly Disagree &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    Neutral
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Strongly Agree</p>

            </div>

        </div>


        <div className='span__Container'>

            <div className="div__Button2">

                                <span className="span__Text__Big5">
                                    I often forget to put things back in their proper place
                                </span>
                <div className='span__Container_Left_Right4'>


                    <button onClick={this.handleButton8} className="big5-button" value={1}>1</button>
                    <button onClick={this.handleButton8} className="big5-button" value={2}>2</button>
                    <button onClick={this.handleButton8} className="big5-button" value={3}>3</button>
                    <button onClick={this.handleButton8} className="big5-button" value={4}>4</button>
                    <button onClick={this.handleButton8} className="big5-button" value={5}>5</button>



                </div>
                <p className="big5__Text">Strongly Disagree &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    Neutral
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Strongly Agree</p>

            </div>

        </div>


        <div className='span__Container'>

            <div className="div__Button2">

                                <span className="span__Text__Big5">
                                    I am relaxed most of the time
                                </span>
                <div className='span__Container_Left_Right4'>


                    <button onClick={this.handleButton9} className="big5-button" value={1}>1</button>
                    <button onClick={this.handleButton9} className="big5-button" value={2}>2</button>
                    <button onClick={this.handleButton9} className="big5-button" value={3}>3</button>
                    <button onClick={this.handleButton9} className="big5-button" value={4}>4</button>
                    <button onClick={this.handleButton9} className="big5-button" value={5}>5</button>



                </div>
                <p className="big5__Text">Strongly Disagree &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    Neutral
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Strongly Agree</p>

            </div>

        </div>

        <div className='span__Container'>

            <div className="div__Button2">

                                <span className="span__Text__Big5">
                                    I am not interested in the abstract ideas
                                </span>
                <div className='span__Container_Left_Right4'>


                    <button onClick={this.handleButton10} className="big5-button" value={1}>1</button>
                    <button onClick={this.handleButton10} className="big5-button" value={2}>2</button>
                    <button onClick={this.handleButton10} className="big5-button" value={3}>3</button>
                    <button onClick={this.handleButton10} className="big5-button" value={4}>4</button>
                    <button onClick={this.handleButton10} className="big5-button" value={5}>5</button>



                </div>
                <p className="big5__Text">Strongly Disagree &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    Neutral
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Strongly Agree</p>

            </div>

        </div>

        <div className='span__Container'>

            <div className="div__Button2">

                                <span className="span__Text__Big5">
                                    I talk to a lot of different people at parties
                                </span>
                <div className='span__Container_Left_Right4'>


                    <button onClick={this.handleButton11} className="big5-button" value={1}>1</button>
                    <button onClick={this.handleButton11} className="big5-button" value={2}>2</button>
                    <button onClick={this.handleButton11} className="big5-button" value={3}>3</button>
                    <button onClick={this.handleButton11} className="big5-button" value={4}>4</button>
                    <button onClick={this.handleButton11} className="big5-button" value={5}>5</button>



                </div>
                <p className="big5__Text">Strongly Disagree &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    Neutral
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Strongly Agree</p>

            </div>

        </div>

        <div className='span__Container'>

            <div className="div__Button2">

                                <span className="span__Text__Big5">
                                    I feel others' emotions
                                </span>
                <div className='span__Container_Left_Right4'>


                    <button onClick={this.handleButton12} className="big5-button" value={1}>1</button>
                    <button onClick={this.handleButton12} className="big5-button" value={2}>2</button>
                    <button onClick={this.handleButton12} className="big5-button" value={3}>3</button>
                    <button onClick={this.handleButton12} className="big5-button" value={4}>4</button>
                    <button onClick={this.handleButton12} className="big5-button" value={5}>5</button>



                </div>
                <p className="big5__Text">Strongly Disagree &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    Neutral
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Strongly Agree</p>

            </div>

        </div>

        <div className='span__Container'>

            <div className="div__Button2">

                                <span className="span__Text__Big5">
                                    I like order
                                </span>
                <div className='span__Container_Left_Right4'>


                    <button onClick={this.handleButton13} className="big5-button" value={1}>1</button>
                    <button onClick={this.handleButton13} className="big5-button" value={2}>2</button>
                    <button onClick={this.handleButton13} className="big5-button" value={3}>3</button>
                    <button onClick={this.handleButton13} className="big5-button" value={4}>4</button>
                    <button onClick={this.handleButton13} className="big5-button" value={5}>5</button>



                </div>
                <p className="big5__Text">Strongly Disagree &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    Neutral
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Strongly Agree</p>

            </div>

        </div>


        <div className='span__Container'>

            <div className="div__Button2">

                                <span className="span__Text__Big5">
                                    I get upset easily
                                </span>
                <div className='span__Container_Left_Right4'>


                    <button onClick={this.handleButton14} className="big5-button" value={1}>1</button>
                    <button onClick={this.handleButton14} className="big5-button" value={2}>2</button>
                    <button onClick={this.handleButton14} className="big5-button" value={3}>3</button>
                    <button onClick={this.handleButton14} className="big5-button" value={4}>4</button>
                    <button onClick={this.handleButton14} className="big5-button" value={5}>5</button>



                </div>
                <p className="big5__Text">Strongly Disagree &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    Neutral
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Strongly Agree</p>

            </div>

        </div>

        <div className='span__Container'>

            <div className="div__Button2">

                                <span className="span__Text__Big5">
                                    I have difficulty understanding abstract ideas
                                </span>
                <div className='span__Container_Left_Right4'>


                    <button onClick={this.handleButton15} className="big5-button" value={1}>1</button>
                    <button onClick={this.handleButton15} className="big5-button" value={2}>2</button>
                    <button onClick={this.handleButton15} className="big5-button" value={3}>3</button>
                    <button onClick={this.handleButton15} className="big5-button" value={4}>4</button>
                    <button onClick={this.handleButton15} className="big5-button" value={5}>5</button>



                </div>
                <p className="big5__Text">Strongly Disagree &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    Neutral
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Strongly Agree</p>

            </div>

        </div>

        <div className='span__Container'>

            <div className="div__Button2">

                                <span className="span__Text__Big5">
                                    I keep in the background
                                </span>
                <div className='span__Container_Left_Right4'>


                    <button onClick={this.handleButton16} className="big5-button" value={1}>1</button>
                    <button onClick={this.handleButton16} className="big5-button" value={2}>2</button>
                    <button onClick={this.handleButton16} className="big5-button" value={3}>3</button>
                    <button onClick={this.handleButton16} className="big5-button" value={4}>4</button>
                    <button onClick={this.handleButton16} className="big5-button" value={5}>5</button>



                </div>
                <p className="big5__Text">Strongly Disagree &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    Neutral
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Strongly Agree</p>

            </div>

        </div>

        <div className='span__Container'>

            <div className="div__Button2">

                                <span className="span__Text__Big5">
                                    I am not really interested in others
                                </span>
                <div className='span__Container_Left_Right4'>


                    <button onClick={this.handleButton17} className="big5-button" value={1}>1</button>
                    <button onClick={this.handleButton17} className="big5-button" value={2}>2</button>
                    <button onClick={this.handleButton17} className="big5-button" value={3}>3</button>
                    <button onClick={this.handleButton17} className="big5-button" value={4}>4</button>
                    <button onClick={this.handleButton17} className="big5-button" value={5}>5</button>



                </div>
                <p className="big5__Text">Strongly Disagree &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    Neutral
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Strongly Agree</p>

            </div>

        </div>

        <div className='span__Container'>

            <div className="div__Button2">

                                <span className="span__Text__Big5">
                                    I make a mess of things
                                </span>
                <div className='span__Container_Left_Right4'>


                    <button onClick={this.handleButton18} className="big5-button" value={1}>1</button>
                    <button onClick={this.handleButton18} className="big5-button" value={2}>2</button>
                    <button onClick={this.handleButton18} className="big5-button" value={3}>3</button>
                    <button onClick={this.handleButton18} className="big5-button" value={4}>4</button>
                    <button onClick={this.handleButton18} className="big5-button" value={5}>5</button>



                </div>
                <p className="big5__Text">Strongly Disagree &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    Neutral
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Strongly Agree</p>

            </div>

        </div>

        <div className='span__Container'>

            <div className="div__Button2">

                                <span className="span__Text__Big5">
                                    I seldom feel blue
                                </span>
                <div className='span__Container_Left_Right4'>


                    <button onClick={this.handleButton19} className="big5-button" value={1}>1</button>
                    <button onClick={this.handleButton19} className="big5-button" value={2}>2</button>
                    <button onClick={this.handleButton19} className="big5-button" value={3}>3</button>
                    <button onClick={this.handleButton19} className="big5-button" value={4}>4</button>
                    <button onClick={this.handleButton19} className="big5-button" value={5}>5</button>



                </div>
                <p className="big5__Text">Strongly Disagree &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    Neutral
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Strongly Agree</p>

            </div>

        </div>

        <div className='span__Container'>

            <div className="div__Button2">

                                <span className="span__Text__Big5">
                                    I do not have a good imagination
                                </span>
                <div className='span__Container_Left_Right4'>


                    <button onClick={this.handleButton20} className="big5-button" value={1}>1</button>
                    <button onClick={this.handleButton20} className="big5-button" value={2}>2</button>
                    <button onClick={this.handleButton20} className="big5-button" value={3}>3</button>
                    <button onClick={this.handleButton20} className="big5-button" value={4}>4</button>
                    <button onClick={this.handleButton20} className="big5-button" value={5}>5</button>



                </div>
                <p className="big5__Text">Strongly Disagree &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    Neutral
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Strongly Agree</p>

            </div>

        </div>


        <button className='home-button-down' onClick={this.handleFormData}>Save</button>

    </div>


    {console.log(this.state.id)}

</div>*/}
