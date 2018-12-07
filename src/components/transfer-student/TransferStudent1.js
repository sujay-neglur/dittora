import React from 'react';

import Header from "../Header";
import Action from "../Action";

import DittoraRegularLogo from '../../images-logos/dittora-regular-logo/dittora-regular-logo.svg';
import UniversityLogo from '../../images-logos/academia/academia1-university.svg';
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {addTransferStudent1} from "../../actions/actions";


class TransferStudent1 extends React.Component{
    constructor(props){
        super(props);


        this.checkIsTransferStudent = this.checkIsTransferStudent.bind(this);

        this.sendToStore = this.sendToStore.bind(this);


        this.state = {id: this.props.match.params.id,
        isTransferStudent: ''};
        //const store = configureStore();
    }

    setStateCallBack() {
        this.sendToStore();
    }

    sendToStore() {
        console.log('Here in Send Function');
        this.props.dispatch(addTransferStudent1(this.state.id, {isTransferStudent:this.state.isTransferStudent}));
        this.props.history.push(`/transfer2/${this.props.usersAbout[0].id}`);
    }

    checkIsTransferStudent(event) {
        const check = event.target.id;
        console.log("Hey I am here!");
        console.log(check);

        if(check==1){
            this.setState({isTransferStudent: false},
                () => {
                    this.setStateCallBack();
                    console.log(this.state.isTransferStudent);
                })
        }else if(check==2){
            this.setState({isTransferStudent: true},
                () => {
                    this.setStateCallBack();
                    console.log(this.state.isTransferStudent);
                })
        }
    }


    render() {

        console.log('Transfer Student Page 1!');

        const title = "Let's talk about your academic status";
        const action1 = "/work1";
        const action2 = "/transfer2";
        const actionButtonData1 = "Nope";
        const actionButtonData2 = "Yep";
        const actionButtonClass1 = "home-button-left-in";
        const actionButtonClass2 = "home-button-right-in";

        return(
            <div>
                {/*<Header title={title}/>*/}
                <img className='dittora-regular-logo' src={DittoraRegularLogo} alt='dittora-regular-logo' />
                <img className='university-logo' src={UniversityLogo} alt='university-logo' />
                <span className="academia1-border-header">Let’s talk about your
                    <span style={{'color':'#DD417C'}}>Academic Status...</span>
                </span>

                    <div className='container'>

                        <span className='transfer-student1-border'></span>

                        <p className='transfer-student1-inner-border-header'>
                            Have you ever changed your program of study?
                        </p>

                        <div className='academia1-button-1-div' id="1" onClick={this.checkIsTransferStudent}>

                            {/*<Link to={`/work1/${this.state.id}`} >*/}
                                <button id="1" className='academia1-button-1' >
                                    Nope

                                </button>
                            {/*</Link>*/}

                            {/*<Action action={action1}
                                actionButtonData={actionButtonData1}
                                classButton='academia1-button-1'

                                sendID={this.state.id}
                        />*/}
                        </div>

                        <div className='academia1-button-2-div' id="2" onClick={this.checkIsTransferStudent}>
                            {/*<Link to={`/transfer2/${this.state.id}`} >*/}
                                <button id="2" className='academia1-button-2' >
                                    Yep

                                </button>
                            {/*</Link>*/}
                            {/*<Action action={action2}
                                actionButtonData={actionButtonData2}
                                classButton='academia1-button-2'
                                sendID={this.state.id}
                        />*/}
                        </div>


                    </div>

            </div>
        );


    }

}

function mapStateToProps(state) {
    return {
        usersAbout: state.users
    }
}

/*const mapStateToProps = (state, props) => {
    return  {
        user: state.users.find((user) => {
            user.id === id
        })
    };
};*/

export default connect(mapStateToProps)(TransferStudent1);



{/*<div className='borderDiv'>
    <p className='paragraphText'>Have you ever changed your program of study?</p>

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



/*const TransferStudent1 = () => {
    console.log('Academia Page 1!');

    const title = "Let's talk about your academic status";
    const action1 = "/work1";
    const action2 = "/transfer2";
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
                        <p className='paragraphText'>Have you ever changed your program of study?</p>

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

export default TransferStudent1;*/
