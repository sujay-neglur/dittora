import React from 'react';

import Header from "../Header";
import Action from "../Action";
import {connect} from "react-redux";
import {Link} from "react-router-dom";

import DittoraRegularLogo from '../../images-logos/dittora-regular-logo/dittora-regular-logo.svg';
import HandShake from '../../images-logos/work/work-1-handshake.svg';
import WorkFactory1 from '../../images-logos/work/work-factory-1.svg';
import WorkFactory2 from '../../images-logos/work/work-factory-2.svg';

import {addWorkExperience3} from "../../actions/actions";


class WorkExperience3 extends React.Component{
    constructor(props){
        super(props);


        this.checkHasWorked = this.checkHasWorked.bind(this);

        this.state = {id: this.props.match.params.id,
        hasWorked: ''};
        //const store = configureStore();
    }


    setStateCallBack() {
        this.sendToStore();
    }

    sendToStore() {
        console.log('Here in Send Function');
        this.props.dispatch(addWorkExperience3(this.state.id, {hasWorked:this.state.hasWorked}));
        if(this.state.hasWorked==="No"){
            this.props.history.push(`/favSub/${this.props.usersAbout[0].id}`);
        }else {
            this.props.history.push(`/work4/${this.props.usersAbout[0].id}`);
        }
    }

    checkHasWorked(event) {
        const check = event.target.id;
        console.log("Hey I am here!");
        console.log(check);

        if(check==1){
            this.setState({hasWorked: "No"},
                () => {
                    this.setStateCallBack();
                    console.log(this.state.hasWorked);
                })
        }else if(check==2){
            this.setState({hasWorked: "Part Time"},
                () => {
                    this.setStateCallBack();
                    console.log(this.state.hasWorked);
                })
        }
        else if(check==3){
            this.setState({hasWorked: "Full Time"},
                () => {
                    this.setStateCallBack();
                    console.log(this.state.hasWorked);
                })
        }
    }

    render() {

        console.log('WorkExperience 3!');

        const title = "Let's talk about your Work Experience";
        const action1 = "/favSub";
        const action2 = "/work4";
        const actionButtonData1 = "Nope";
        const actionButtonData2 = "Yep";
        const actionButtonClass1 = "home-button-left-in";
        const actionButtonClass2 = "home-button-right-in";
        return(
            <div>
                <img className='dittora-regular-logo' src={DittoraRegularLogo} alt='dittora-regular-logo' />
                <img className='work1-handshake' src={HandShake} alt='work1-handshake-logo' />
                <span className="academia1-border-header">Let’s talk about your {' '}
                    <span style={{'color':'#DD417C'}}>Work Experience...</span>
                </span>
                {
                    <div className='container'>

                        <span className='work1-border'></span>

                        <p className='work3-inner-border-header'>Have you ever worked in the past?</p>


                        <div className='work1-button-1-div' id="1" onClick={this.checkHasWorked}>

                            {/*<Link to={`/favSub/${this.state.id}`} >*/}
                                <button id="1" className='work1-button-1' >
                                    Nope

                                </button>
                            {/*</Link>*/}

                            {/*<Action action={action1}
                                actionButtonData={actionButtonData1}
                                classButton='academia1-button-1'

                                sendID={this.state.id}
                        />*/}
                        </div>

                        <div className='work1-button-2-div' id="2" onClick={this.checkHasWorked}>
                            {/*<Link to={`/work4/${this.state.id}`} >*/}
                                <button id="2" className='work1-button-2' >
                                    Yes, I've worked part time

                                </button>
                            {/*</Link>*/}
                            {/*<Action action={action2}
                                actionButtonData={actionButtonData2}
                                classButton='academia1-button-2'
                                sendID={this.state.id}
                        />*/}
                        </div>


                        <div className='work1-button-3-div' id="3" onClick={this.checkHasWorked}>
                            {/*<Link to={`/work4/${this.state.id}`} >*/}
                                <button id="3" className='work1-button-3' >
                                    Yes, I've worked full time

                                </button>
                            {/*</Link>*/}
                            {/*<Action action={action2}
                                actionButtonData={actionButtonData2}
                                classButton='academia1-button-2'
                                sendID={this.state.id}
                        />*/}
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

export default connect(mapStateToProps)(WorkExperience3);



{/*<div className='borderDiv'>
    <p className='paragraphText'>Have you ever worked in the past?</p>

    <span className='border-span-buttons'>
                            <Action action={action1}
                                    actionButtonData={actionButtonData1}
                                    classButton={actionButtonClass1}
                                    sendID={this.state.id}/>
                            <Action action={action2}
                                    actionButtonData={actionButtonData2}
                                    classButton={actionButtonClass2}
                                    sendID={this.state.id}/>
                        </span>
</div>*/}

/*
const WorkExperience3 = () => {
    console.log('WorkExperience 3!');

    const title = "Let's talk about your Work Experience";
    const action1 = "/favSub";
    const action2 = "/work4";
    const actionButtonData1 = "Nope";
    const actionButtonData2 = "Yep";
    const actionButtonClass1 = "home-button-left-in";
    const actionButtonClass2 = "home-button-right-in";
    return(
        <div>
            <Header title={title}/>
            {
                <div className='container'>

                    <div className='borderDiv'>
                        <p className='paragraphText'>Have you ever worked in the past?</p>

                        <span className='border-span-buttons'>
                            <Action action={action1}
                                    actionButtonData={actionButtonData1}
                                    classButton={actionButtonClass1}
                                    sendID={this.state.id}/>
                            <Action action={action2}
                                    actionButtonData={actionButtonData2}
                                    classButton={actionButtonClass2}
                                    sendID={this.state.id}/>
                        </span>
                    </div>


                </div>
            }
        </div>
    );
};

export default WorkExperience3;
*/