import React from 'react';

import Header from "../Header";
import Action from "../Action";

import {DropdownButton, Button, MenuItem,ButtonToolbar, FormControl, FormGroup, Radio, ToggleButton, ToggleButtonGroup}
    from 'react-bootstrap';
import ReactSlider from 'react-slider';

import {Draggable, Droppable} from 'react-drag-and-drop';

import Card from './Card';
const update = require('immutability-helper');


const style = {
    width: 400,
}

export default class Test extends React.Component{
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

        this.onDrop = this.onDrop.bind(this);

        this.handleFormData = this.handleFormData.bind(this);
        this.callFetch = this.callFetch.bind(this);

        this.moveCard = this.moveCard.bind(this);

        this.state = {
            jobPosition: 'old job position',
            jobPositionRelated: '',
            min: 0,
            max: 10,
            value1: 5,
            value2: 5,
            value3: 5,
            value4: 5,
            value5: 5,

            cards: [
                {
                    id: 1,
                    text: 'Write a cool JS library',
                },
                {
                    id: 2,
                    text: 'Make it generic enough',
                },
                {
                    id: 3,
                    text: 'Write README',
                },
                {
                    id: 4,
                    text: 'Create some examples',
                },
                {
                    id: 5,
                    text: 'Spam in Twitter and IRC to promote it',
                },
                {
                    id: 6,
                    text: '???',
                },
                {
                    id: 7,
                    text: 'PROFIT',
                },
            ],
        };
    }


    handleFormData(event) {
        event.preventDefault();



        let dx = this.state;
        console.log(dx);
        this.callFetch(dx);
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

    handleJobPosition(event) {
        this.setState({oldJobPosition: event.target.value})
    }


    onDrop(data) {
        console.log(data)
        // => banana
    }

    handleOnChange(event) {
        console.log("Hey!@");
        console.log(event.target.value);
        this.setState({oldJobPositionRelated: event.target.value});
        console.log(event);
    }


    handleChangeValue1(event) {
        this.setState({value1: event.target.value});
    }
    handleChangeValue2(event) {
        this.setState({value2: event.target.value});
    }
    handleChangeValue3(event) {
        this.setState({value3: event.target.value});
    }
    handleChangeValue4(event) {
        this.setState({value4: event.target.value});
    }
    handleChangeValue5(event) {
        this.setState({value5: event.target.value});
    }


    moveCard(dragIndex, hoverIndex) {
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
    }


    handleSubmit(event) {
        alert('Your favorite flavor is: ' + this.state.value);
        event.preventDefault();
    }

    render() {

        console.log('Values Page!');

        const title = "In this section we analyse some of your preferences and values";
        const action = "/big5";
        const actionButtonData = "Next";
        const actionButtonClass = "home-button-down";
        const word1 = "I hated it";
        const word2 = "I loved it";

        const cards = this.state.cards;

        console.log(cards);

        return(
            <div>
                <Header title={title}/>
                {
                    <div className='container__Big'>

                        <div className='borderDiv__Big'>




                            <div className='card-container'>
                                Cards go here
                                <div style={style}>
                                    {cards.map((card, i) => (

                                        {
                                            i
                                        },
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


                            <Action action={action}
                                    actionButtonData={actionButtonData}
                                    classButton={actionButtonClass}/>

                            <button className='home-button-down' onClick={this.handleFormData}>Save</button>

                        </div>

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
                    </div>


                }
            </div>
        );



    }

}
