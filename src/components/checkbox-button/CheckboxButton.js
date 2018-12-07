
// @TODO
// make animation conditional, should be able to disable
// allow supply of own SVG components
// allow 'children' prop for label text
import React from 'react';
const { Component, PureComponent } = React;

//import '/GoorooApp/src/styles/components/_checkbox-button.scss';

const maxChoices =  3;

export default class Checkbox extends PureComponent {

    constructor() {
        super();

        this.state = {
            checked: false,
            isAnimating: false,

        };

        this.toggleChecked = this.toggleChecked.bind(this);
        this.ping = this.ping.bind(this);
        this.composeStateClasses = this.composeStateClasses.bind(this);
    }

    //
    toggleChecked() {

       /* console.log(this.props.valueOfChoice);
        if(this.props.selectedFavSubs.length===3){
            console.log("Here");
            if(this.props.selectedFavSubs.includes(this.props.valueOfChoice)){
                this.props.listIsFull = false;

            }

        }*/

        console.log('In CheckBox Lis is Full? '+this.props.listIsFull);

       if(this.props.listIsFull){
           console.log("Here");
           console.log("Length of List: "+this.props.selectedFavSubs.length);
           if(this.props.selectedFavSubs.length===3){
               console.log("Here");
               if(this.props.selectedFavSubs.includes(this.props.valueOfChoice)){
                   //this.props.listIsFull = false;

                   if (this.state.isAnimating) return false;
                   this.setState({
                       checked: !this.state.checked,
                       isAnimating: true,
                   });
               }
           }
       }


        if(!this.props.listIsFull){
            if (this.state.isAnimating) return false;
            this.setState({
                checked: !this.state.checked,
                isAnimating: true,
            });
        }



        console.log('In CheckBox: ' + this.props.listIsFull);

        /*if (this.state.selectedFavSub.length<=3){

            this.setState((prevState) => ({
               selectedFavSub: prevState.selectedFavSub.concat(this.props.valueOfChoice)
            }));
        }
        {console.log(this.state.selectedFavSub)}*/
    }

    //
    ping() {
        this.setState({ isAnimating: false })
    }

    //
    composeStateClasses(core) {
        let result = core;

        if (this.state.checked) { result += ' is-checked'; }
        else { result += ' is-unchecked' }

        if (this.state.isAnimating) { result += ' do-ping'; }
        return result;
    }

    //
    render() {

        const cl = this.composeStateClasses('ui-checkbox-btn');

        return (
            <div
                className={ cl }
                onClick={ this.toggleChecked }
            >




                <input className="ui ui-checkbox" type="checkbox" checked={this.state.checked} />
                {
                    this.state.checked &&
                    <i className="icon">
                        <svg width="24" height="24" viewBox="0 0 24 24">
                            <path d="M21 5q0.43 0 0.715 0.285t0.285 0.715q0 0.422-0.289 0.711l-12 12q-0.289 0.289-0.711 0.289t-0.711-0.289l-6-6q-0.289-0.289-0.289-0.711 0-0.43 0.285-0.715t0.715-0.285q0.422 0 0.711 0.289l5.289 5.297 11.289-11.297q0.289-0.289 0.711-0.289z"></path>
                        </svg>
                    </i>
                }
                {
                    !this.state.checked &&
                    <i className="icon">
                        <svg width="24" height="24" viewBox="0 0 24 24">
                            <path d="M19 4q0.43 0 0.715 0.285t0.285 0.715q0 0.422-0.289 0.711l-6.297 6.289 6.297 6.289q0.289 0.289 0.289 0.711 0 0.43-0.285 0.715t-0.715 0.285q-0.422 0-0.711-0.289l-6.289-6.297-6.289 6.297q-0.289 0.289-0.711 0.289-0.43 0-0.715-0.285t-0.285-0.715q0-0.422 0.289-0.711l6.297-6.289-6.297-6.289q-0.289-0.289-0.289-0.711 0-0.43 0.285-0.715t0.715-0.285q0.422 0 0.711 0.289l6.289 6.297 6.289-6.297q0.289-0.289 0.711-0.289z"></path>
                        </svg>
                    </i>
                }
                <label className="text">{ this.props.children }</label>
                <div className="ui-btn-ping" onTransitionEnd={this.ping}></div>
            </div>
        )
    }
}

/*
ReactDOM.render(
    <div>
        <Checkbox>enabled</Checkbox>
    </div>
    , document.getElementById('mount') );
*/
