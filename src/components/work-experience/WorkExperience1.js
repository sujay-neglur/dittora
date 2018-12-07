import React from 'react';

import Header from "../Header";
import Action from "../Action";


import DittoraRegularLogo from '../../images-logos/dittora-regular-logo/dittora-regular-logo.svg';
import HandShake from '../../images-logos/work/work-1-handshake.svg';
import WorkFactory1 from '../../images-logos/work/work-factory-1.svg';
import WorkFactory2 from '../../images-logos/work/work-factory-2.svg';

import {addWorkExperience1} from "../../actions/actions";
import {connect} from "react-redux";
import {Link} from "react-router-dom";


class WorkExperience1 extends React.Component{
    constructor(props){
        super(props);


        this.checkIsWorking = this.checkIsWorking.bind(this);

        this.sendToStore = this.sendToStore.bind(this);


        this.state = {id: this.props.match.params.id,
        isWorking: ''};
        //const store = configureStore();
    }

    setStateCallBack() {
        this.sendToStore();
    }

    sendToStore() {
        console.log('Here in Send Function');
        this.props.dispatch(addWorkExperience1(this.state.id, {isWorking:this.state.isWorking}));
        if(this.state.isWorking==="No"){
            this.props.history.push(`/work3/${this.props.usersAbout[0].id}`);
        }else {
            this.props.history.push(`/work2/${this.props.usersAbout[0].id}`);
        }

    }

    checkIsWorking(event) {
        const check = event.target.id;
        console.log("Hey I am here!");
        console.log(check);

        if(check==1){
            this.setState({isWorking: "No"},
                () => {
                    this.setStateCallBack();
                    console.log(this.state.isWorking);
                })
        }else if(check==2){
            this.setState({isWorking: "Part Time"},
                () => {
                    this.setStateCallBack();
                    console.log(this.state.isWorking);
                })
        }
        else if(check==3){
            this.setState({isWorking: "Full Time"},
                () => {
                    this.setStateCallBack();
                    console.log(this.state.isWorking);
                })
        }
    }


    render() {

        console.log('Work Experience Page 1!');

        const title = "Let's talk about your Work Experience";
        const action1 = "/work3";
        const action2 = "/work2";
        const actionButtonData1 = "Nope";
        const actionButtonData2 = "Yep";
        const actionButtonClass1 = "home-button-left-in";
        const actionButtonClass2 = "home-button-right-in";
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

                        <span className='work1-border'></span>

                        <p className='work1-inner-border-header'>Are you currently Working?</p>

                        <div className='work1-button-1-div' id="3" onClick={this.checkIsWorking}>

                            {/*<Link to={`/work3/${this.state.id}`} >*/}
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

                        <div className='work1-button-2-div' id="2" onClick={this.checkIsWorking}>
                            {/*<Link to={`/work2/${this.state.id}`} >*/}
                                <button id="2" className='work1-button-2' >
                                    Yes, I'm working part time

                                </button>
                            {/*</Link>*/}
                            {/*<Action action={action2}
                                actionButtonData={actionButtonData2}
                                classButton='academia1-button-2'
                                sendID={this.state.id}
                        />*/}
                        </div>


                        <div className='work1-button-3-div' id="3" onClick={this.checkIsWorking}>
                            {/*<Link to={`/work2/${this.state.id}`} >*/}
                                <button id="3" className='work1-button-3' >
                                    Yes, I'm working full time

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

export default connect(mapStateToProps)(WorkExperience1);


{/*<div className='borderDiv'>
    <p className='paragraphText'>Are you currently working?</p>

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
const WorkExperience1 = () => {
    console.log('Academia Page 1!');

    const title = "Let's talk about your Work Experience";
    const action1 = "/work3";
    const action2 = "/work2";
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
                        <p className='paragraphText'>Are you currently working?</p>

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

export default WorkExperience1;
*/
