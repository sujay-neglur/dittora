import React from 'react';
import createClass from 'create-react-class';
import {Dropdown} from 'semantic-ui-react';

/*let genderOptions = [
    {
        text: "male"
    },
    {
        text: "female"
    }
];*/

export default class FormInput extends React.Component {
    constructor (props) {
        super(props);
        this.updateInputValue = this.updateInputValue.bind(this);
        this.state = {
            inputValue: props.inputName,
            inputClassName:props.clsName
        };
    }


    updateInputValue(evt) {
        this.setState(
            {
                inputValue: evt.target.value
            }
        );
    }

    render() {
        return (
             <input
                 placeholder={this.state.inputValue}
                 type='text' className={this.state.inputClassName}
                 onChange={this.updateInputValue}
             />
             /*<Dropdown placeholder={this.state.inputValue} fluid selection options={genderOptions}
                       />*/
        );
    }
}


/*{this.state.error && <p>{this.state.error}</p>}*/


/*<button className='button'>Add Option</button>*/

/*const formInputClass = (props) => createClass({
    getInitialState: function () {
        return {
            inputValue: name
        };
    },

     formInput: function() {
        return (

            <input
                   value={this.state.inputValue}
                   type='text'
                   className={props.clsName}
                   name={props.inputName}
                   onChange={this.updateInputValue}
            />

        );
    },

    updateInputValue: function(evt) {
        this.setState(
            {
                inputValue: evt.target.value
            }
        );
    }

});*/




/*
const formInput = (props) => {
    console.log('Form input used!');
    return(
        <input type='text' className={props.clsName} name={props.inputName} value="gender" onChange={}/>
    );

};

export default formInput;*/
