import React from 'react';

import Header from "../Header";
import Action from "../Action";

import {DropdownButton, Button, MenuItem,ButtonToolbar, FormControl, FormGroup, Radio, ToggleButton, ToggleButtonGroup}
    from 'react-bootstrap';
import ReactSlider from 'react-slider';

//import {Draggable, Droppable} from 'react-drag-and-drop';

import { Draggable } from 'react-draggable';

import Card from './Card';
const update = require('immutability-helper');

import AppList from './List';
import {addAcademia3, addBig5, addValues} from "../../actions/actions";
import {connect} from "react-redux";

import DittoraRegularLogo from '../../images-logos/dittora-regular-logo/dittora-regular-logo.svg';
import IceCreamLogo from '../../images-logos/values/ice-cream-logo.svg';
import ListNumbers from '../../images-logos/values/list-numbers.svg';
import MoneyBag from '../../images-logos/values/money-bag.svg';
import BoySuperHero from '../../images-logos/values/boy-super-hero.svg';
import ValuesBottomNavBar from '../../images-logos/values/values-bottom-navbar.svg';


const style = {
    width: 400,
}

class Values extends React.Component{
    constructor(props){
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleOnChange = this.handleOnChange.bind(this);
        this.handleJobPosition = this.handleJobPosition.bind(this);
        this.handleChangeValue1 = this.handleChangeValue1.bind(this);
        this.handleChangeValue2 = this.handleChangeValue2.bind(this);
        this.handleChangeValue3 = this.handleChangeValue3.bind(this);
        this.handleChangeValue4 = this.handleChangeValue4.bind(this);
        this.handleChangeValue5 = this.handleChangeValue5.bind(this);

        //this.onDrop = this.onDrop.bind(this);


        this.handleFormData = this.handleFormData.bind(this);

        this.initiateCallFetch = this.initiateCallFetch.bind(this);
        this.callFetch = this.callFetch.bind(this);

        this.handleChangeCards = this.handleChangeCards.bind(this);

        this.sendToStore = this.sendToStore.bind(this);

        this.setStateCallBack = this.setStateCallBack.bind(this);
        //this.moveCard = this.moveCard.bind(this);

        this.state = {
            id: this.props.match.params.id,
            jobPosition: 'old job position',
            jobPositionRelated: '',
            min: 0,
            max: 10,
            value1: 5,
            value2: 5,
            value3: 5,
            value4: 5,
            value5: 5,

            cardList : ['Prestige', 'High Income', 'Immediate Employment', 'Leadership',
                'Independence', 'Stability', 'Leisure', 'Helping Others', 'Diversity', 'Do what I Love'],
            hobbies: this.props.usersAbout[0].addHobbies.users.hobbies,
            favoriteSubjects: this.props.usersAbout[0].addFavSubs.users.selectedFavSubs
        };
    }

    setStateCallBack() {
        this.sendToStore();
    }

    sendToStore(){
        //console.log('Here in Send Function');
        this.props.dispatch(addValues(this.state.id, {workAloneVsWithPeople:this.state.value1,
            practicalLearningVsAcademicEnvironment:this.state.value2,
            doingTheJobVsDirectingOthers: this.state.value3, RiskTakingVsNoRisk: this.state.value4,
            independentContributorVsTeamPlayer: this.state.value5,
            valuesList: this.state.cardList,
            hobbies: this.state.hobbies,
            favoriteSubjects: this.state.favoriteSubjects}));
    }


    handleFormData(event) {
        event.preventDefault();



        let dx = this.state;
        //console.log(dx);
        //this.callFetch(dx);

        /*this.props.dispatch(addValues(this.state.id, {value1:this.state.value1,
            value2:this.state.value2,
            value3: this.state.value3, value4: this.state.value4,
            value5: this.state.value5,
            cardList: this.state.cardList}));*/

    }


    initiateCallFetch(){
        let object = this.props.usersAbout[0].addValues.users;

        object.token = this.props.usersAbout[0].token;

        this.callFetch(object)
    }

    callFetch(object) {
        console.log("In callFetch");

        console.log("Store props: ");
        console.log(object);

        //console.log(dx);
        /*header('Access-Control-Allow-Origin: *');
        header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
        header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');*/
        //Axios.post('/data', {id: 'id here'})


        fetch('http://localhost:5000/values', {
            method: 'POST',
            //headers: {} <-- You can include some headers if you want
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(object)
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
        this.setState({oldJobPosition: event.target.value})
    }


    /*onDrop(data) {
        console.log(data)
        // => banana
    }*/

    handleOnChange(event) {
        console.log("Hey!@");
        console.log(event.target.value);
        this.setState({oldJobPositionRelated: event.target.value});
        console.log(event);
    }


    handleChangeValue1(event) {
        this.setState({value1: event.target.value},
            ()=> {
                this.setStateCallBack();
            });

    }
    handleChangeValue2(event) {
        this.setState({value2: event.target.value},
            ()=> {
                this.setStateCallBack();
            });

    }
    handleChangeValue3(event) {
        this.setState({value3: event.target.value},
            ()=> {
                this.setStateCallBack();
            });

    }
    handleChangeValue4(event) {
        this.setState({value4: event.target.value},
            ()=> {
                this.setStateCallBack();
            });

    }
    handleChangeValue5(event) {
        this.setState({value5: event.target.value},
            ()=> {
                this.setStateCallBack();
            });

    }


    /*moveCard(dragIndex, hoverIndex) {
        const { cards } = this.state.cards;
        const dragCard = cards[dragIndex];

        console.log("MoveCard");

        this.setState(
            update(this.state, {
                cards: {
                    $splice: [[dragIndex, 1], [hoverIndex, 0, dragCard]],
                },
            }),
        )
    }*/


    handleSubmit(event) {
        alert('Your favorite flavor is: ' + this.state.value);
        event.preventDefault();
    }

    handleChangeCards(data){
        console.log('Handle Change Cards!');
        //console.log(data);
        this.setState({
            cardList: data
        },
            ()=> {
                this.setStateCallBack();
            });

    }

    render() {

        console.log('Values Page!');

        const title = "Values";
        const action = "/big5";
        const actionButtonData = "Next";
        const actionButtonClass = "home-button-down";
        const word1 = "I hated it";
        const word2 = "I loved it";

        const cards = this.state.cards;

        //const cardList = ['Prestige', 'High Income', 'Immediate Employment', 'Leadership',
          //  'Independence', 'Stability', 'Leisure', 'Helping Others', 'Diversity', 'Do what I Love'];

        //console.log(cards);

        return(
            <div>
                <img className='dittora-regular-logo' src={DittoraRegularLogo} alt='dittora-regular-logo' />
                <img className='icecream-logo' src={IceCreamLogo} alt='icecream-logo' />
                <span className="values-border-header">Tell us more about your {' '}
                    <span style={{'color':'#DD417C'}}>preferences and values...</span>
                </span>
                {

                    <div className='container'>

                        <span className='values-border'></span>

                        <p className='values-inner-border-header'>
                            Where do you stand on each of the following scales?
                        </p>

                        <span className='values-scale-1-left'>Prefer working alone</span>

                        <span className='values-slider-1'>
                            <input
                                id="typeinp"
                                type="range"
                                min="0" max="10"
                                value={this.state.value1}
                                onChange={this.handleChangeValue1}
                                step="1"/>
                        </span>


                        <span className='values-scale-1-right'>Prefer working with people</span>


                        <span className='values-scale-2-left'>Prefer applied learning</span>

                        <span className='values-slider-2'>
                            <input
                                id="typeinp"
                                type="range"
                                min="0" max="10"
                                value={this.state.value2}
                                onChange={this.handleChangeValue2}
                                step="1"/>
                        </span>

                        <span className='values-scale-2-right'>Prefer theoretical learning</span>


                        <span className='values-scale-3-left'>Prefer doing the job myself</span>

                        <span className='values-slider-3'>
                            <input
                                id="typeinp"
                                type="range"
                                min="0" max="10"
                                value={this.state.value3}
                                onChange={this.handleChangeValue3}
                                step="1"/>
                        </span>

                        <span className='values-scale-3-right'>Prefer ordering others</span>



                        <span className='values-scale-4-left'>Dislike risk-taking</span>

                        <span className='values-slider-4'>
                            <input
                                id="typeinp"
                                type="range"
                                min="0" max="10"
                                value={this.state.value4}
                                onChange={this.handleChangeValue4}
                                step="1"/>
                        </span>

                        <span className='values-scale-4-right'>Enjoy risk-taking</span>


                        <span className='values-scale-5-left'>Prefer working alone</span>

                        <span className='values-slider-5'>
                            <input
                                id="typeinp"
                                type="range"
                                min="0" max="10"
                                value={this.state.value5}
                                onChange={this.handleChangeValue5}
                                step="1"/>
                        </span>

                        <span className='values-scale-5-right'>Prefer working with a team</span>


                        <span className='values-text-above-list'>
                            Rearrange the blocks below according to your Values
                        </span>


                        <img className='values-list-numbers' src={ListNumbers} alt='values-list-numbers' />

                        <span className='values-priority-list'>
                            <AppList cardList={this.state.cardList}
                                     onClick={() => this.handleChangeCards(this.state.cardList)}/>
                        </span>


                        <img className='values-money-bag' src={MoneyBag} alt='values-money-bag' />
                        <img className='values-boy-super-hero' src={BoySuperHero} alt='values-boy-super-hero' />

                        <div onClick={this.initiateCallFetch}>
                        <Action action={action}
                                actionButtonData={actionButtonData}
                                classButton='values-button'
                                sendID={this.state.id}/>
                        </div>

                       <img className='values-bottom-navbar' src={ValuesBottomNavBar} alt='values-bottom-navbar' />

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

export default connect(mapStateToProps)(Values);



{/*<span className='values-scale-3-left'>Prefer doing the job myself</span>

<span className='values-slider-3-new'>
    <input
id="typeinp"
type="range"
min="0" max="10"
value={this.state.value3}
onChange={this.handleChangeValue3}
step="1"/>
    </span>

<span className='values-slider-3-new'>
                            <input
                                id="typeinp"
                                type="range"
                                min="0" max="10"
                                value={this.state.value3}
                                onChange={this.handleChangeValue3}
                                step="1"/>
                        </span>

<span className='values-scale-3-right'>Prefer ordering others</span>*/}









{/*<div className='container__Big'>

    <p className="span__Text2">
        In this section we analyse some of your {' '}
        <span className="span__Text2__Bold">preferences</span>
        {' '} and  {' '}
        <span className="span__Text2__Bold">values</span>
    </p>
    <div className='borderDiv__Big'>



        <div className='span__Container'>
            <div className="div__Button2">

                                <span className="span__Text4">
                                    Prefer working alone
                                </span>
                <div className='span__Container_Left_Right4'>


                    <input
                        id="typeinp"
                        type="range"
                        min="0" max="10"
                        value={this.state.value1}
                        onChange={this.handleChangeValue1}
                        step="1"/>



                </div>
                <span className="span__Text4">
                                    Prefer working with people
                                </span>
            </div>

            <div className="div__Button2">

                                <span className="span__Text4">
                                    Prefer practical learning
                                </span>
                <div className='span__Container_Left_Right4'>


                    <input
                        id="typeinp"
                        type="range"
                        min="0" max="10"
                        value={this.state.value2}
                        onChange={this.handleChangeValue2}
                        step="1"/>



                </div>
                <span className="span__Text4">
                                    Prefer academic environment
                                </span>
            </div>
            <div className="div__Button2">

                                <span className="span__Text4">
                                    Prefer doing the job
                                </span>
                <div className='span__Container_Left_Right4'>


                    <input
                        id="typeinp"
                        type="range"
                        min="0" max="10"
                        value={this.state.value3}
                        onChange={this.handleChangeValue3}
                        step="1"/>



                </div>
                <span className="span__Text4">
                                    Prefer directing others
                                </span>
            </div>


            <div className="div__Button2">

                                <span className="span__Text4">
                                    Like risk taking
                                </span>
                <div className='span__Container_Left_Right4'>


                    <input
                        id="typeinp"
                        type="range"
                        min="0" max="10"
                        value={this.state.value4}
                        onChange={this.handleChangeValue4}
                        step="1"/>



                </div>
                <span className="span__Text4">
                                    Dislike risk taking
                                </span>
            </div>


            <div className="div__Button2">

                                <span className="span__Text4">
                                    Independent Contributor
                                </span>
                <div className='span__Container_Left_Right4'>


                    <input
                        id="typeinp"
                        type="range"
                        min="0" max="10"
                        value={this.state.value5}
                        onChange={this.handleChangeValue5}
                        step="1"/>



                </div>
                <span className="span__Text4">
                                    Team Player
                                </span>
            </div>



        </div>


        <div className='card-container'>
                                Cards go here
                                <div style={style}>
                                    {cards.map((card, i) => (

                                        console.log('here'),
                                        <Card
                                        key={card.id}
                                        index={i}
                                        id={card.id}
                                        text={card.text}
                                        moveCard={this.moveCard}
                                        />

                                        ))}
                                </div>

                            </div>

        <br/>
        <br/>

        {console.log(`In Values: ${this.state.cardList}`)}
        <AppList cardList={this.state.cardList}
                 onClick={() => this.handleChangeCards(this.state.cardList)}/>



        <br/>



        <div onClick={this.initiateCallFetch}>
            <Action action={action}
                    actionButtonData={actionButtonData}
                    classButton={actionButtonClass}
                    sendID={this.state.id}/>
        </div>


        <button className='home-button-down' onClick={this.handleFormData}>Save</button>

    </div>




     <Draggable>
                            <div> hey!</div>
                            <div> You!</div>
                        </Draggable>

    <div>
                            <ul>
                                <Draggable type="fruit" data="banana"><li>Banana</li></Draggable>
                                <Draggable type="fruit" data="apple"><li>Apple</li></Draggable>
                                <Draggable type="metal" data="silver"><li>Silver</li></Draggable>
                            </ul>
                            <Droppable
                                types={['fruit']} // <= allowed drop types
                                onDrop={this.onDrop.bind(this)}>
                            <ul className="Smoothie"></ul>
                            </Droppable>
                        </div>

    <input value=''/>
</div>*/}































{/*<div>
                                <br/>

                                <div className='span__Container__Medium'>


                                    <span className='span__Container'>


                                        <span>Prefer working alone</span>
                                        <br/>
                                        <br/>

                                    </span>
                                    <br/>
                                    <span className='span__Container'>
                                        <span>Prefer Practical Learning</span>
                                        <br/>
                                        <br/>
                                    </span>
                                    <br/>
                                    <span className='span__Container'>
                                        <span>Prefer doing Job</span>
                                        <br/>
                                        <br/>
                                    </span>
                                    <br/>
                                    <span className='span__Container'>
                                        <span>Prefer working alone</span>
                                        <br/>
                                        <br/>
                                    </span>
                                    <br/>
                                    <span className='span__Container'>
                                        <span>Prefer working alone</span>
                                        <br/>
                                        <br/>
                                    </span>
                                </div>

                                <div className='span__Container__Medium'>
                                    <br/>
                                    <br/>
                                    <div className='span__Container_Left_Right3'>


                                    <input
                                        id="typeinp"
                                        type="range"
                                        min="0" max="10"
                                        value={this.state.value1}
                                        onChange={this.handleChangeValue1}
                                        step="1"/>



                                    </div>
                                    <br/>
                                    <br/>
                                    <div className='span__Container_Left_Right3'>


                                    <input
                                        id="typeinp"
                                        type="range"
                                        min="0" max="10"
                                        value={this.state.value2}
                                        onChange={this.handleChangeValue2}
                                        step="1"/>



                                    </div>
                                    <br/>
                                    <br/>
                                    <div className='span__Container_Left_Right3'>


                                        <input
                                            id="typeinp"
                                            type="range"
                                            min="0" max="10"
                                            value={this.state.value3}
                                            onChange={this.handleChangeValue3}
                                            step="1"/>



                                    </div>
                                    <br/>
                                    <br/>
                                    <div className='span__Container_Left_Right3'>


                                        <input
                                            id="typeinp"
                                            type="range"
                                            min="0" max="10"
                                            value={this.state.value4}
                                            onChange={this.handleChangeValue4}
                                            step="1"/>



                                    </div>
                                    <br/>
                                    <br/>
                                    <div className='span__Container_Left_Right3'>


                                        <input
                                            id="typeinp"
                                            type="range"
                                            min="0" max="10"
                                            value={this.state.value5}
                                            onChange={this.handleChangeValue5}
                                            step="1"/>



                                    </div>
                                </div>

                                <div className='span__Container__Medium'>


                                    <span className='span__Container'>


                                        <span>Prefer working with team</span>
                                        <br/>
                                        <br/>

                                    </span>
                                    <br/>
                                    <span className='span__Container'>
                                        <span>Prefer Academic Environment</span>
                                        <br/>
                                        <br/>
                                    </span>
                                    <br/>
                                    <span className='span__Container'>
                                        <span>Prefer directing others</span>
                                        <br/>
                                        <br/>
                                    </span>
                                    <br/>
                                    <span className='span__Container'>
                                        <span>Dislike taking risk</span>
                                        <br/>
                                        <br/>
                                    </span>
                                    <br/>
                                    <span className='span__Container'>
                                        <span>Team Player</span>
                                        <br/>
                                        <br/>
                                    </span>
                                </div>

                            </div>*/}




















{/*<span className='span__Container'>
                                <span>Prefer working alone</span>

                                <div className='span__Container_Left_Right2'>


                                    <input
                                        id="typeinp"
                                        type="range"
                                        min="0" max="10"
                                        value={this.state.value}
                                        onChange={this.handleChange}
                                        step="1"/>



                            </div>

                                <span>Prefer working with Team</span>
                            </span>

                            <br/>
                            <span className='span__Container'>
                                <span>Prefer Practical Learning</span>

                                <div className='span__Container_Left_Right2'>


                                    <input
                                        id="typeinp"
                                        type="range"
                                        min="0" max="10"
                                        value={this.state.value}
                                        onChange={this.handleChange}
                                        step="1"/>



                            </div>

                                <span>Prefer Academic Environment</span>
                            </span>

                            <br/>

                            <span className='span__Container'>
                                <span>Prefer doing Job</span>

                                <div className='span__Container_Left_Right2'>


                                    <input
                                        id="typeinp"
                                        type="range"
                                        min="0" max="10"
                                        value={this.state.value}
                                        onChange={this.handleChange}
                                        step="1"/>



                            </div>

                                <span>Prefer Directing Others</span>
                            </span>

                            <br/>

                            <span className='span__Container'>
                                <span>Like Risk taking</span>

                                <div className='span__Container_Left_Right2'>


                                    <input
                                        id="typeinp"
                                        type="range"
                                        min="0" max="10"
                                        value={this.state.value}
                                        onChange={this.handleChange}
                                        step="1"/>



                            </div>

                                <span>Dislike Risk taking</span>
                            </span>

                            <br/>

                            <span className='span__Container'>
                                <span>Independent Contributor</span>

                                <div className='span__Container_Left_Right2'>


                                    <input
                                        id="typeinp"
                                        type="range"
                                        min="0" max="10"
                                        value={this.state.value}
                                        onChange={this.handleChange}
                                        step="1"/>



                            </div>

                                <span>Team Player</span>
                            </span>*/}







{/*<p className='paragraphText'>
    What was your job position?
</p>

<input className="input__Text__default" placeholder={this.state.oldJobPosition}
onChange={this.handleJobPosition}/>


<p className='paragraphText'>
    Was your job position related to your field of study?
</p>

<div className='span__Container'>
    <FormGroup
value={this.state.oldJobPositionRelated}
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
                            </p >*/}
