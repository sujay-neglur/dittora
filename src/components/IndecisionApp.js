import React from "react";


import Header from './Header';

import Action from './Action';

const HomePage = () => {
    /*constructor(props)
    {


        this.handleAction = this.handleAction.bind(this);
    }*/

   console.log('Home Page!');
    const subtitle = "The data that we collect will be used to guide the future generations into the proper academic and career choice.";
    const subtitle2 = "Your data for a god cause and a better future...";
    const title = "Gooroo.ai";
    const action = "/consentForm";
    const actionButtonData = "Contribute Your Data!";
    const actionButtonClass = "home-button";
   return (

        <div>
            <Header title={title} subtitle={subtitle} subtitle2={subtitle2}/>
            {

                <div className='container'>
                    <Action action={action}
                            actionButtonData={actionButtonData}
                            classButton={actionButtonClass}/>
                </div>


            }
        </div>
   );
};

export default HomePage;

/*
export default class IndecisionApp extends React.Component {





    constructor(props) {
        super(props);

        this.handleFillData = this.handleFillData.bind(this);

        /!*this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleClearSelectedOption = this.handleClearSelectedOption.bind(this);

        this.state = {
            options : [],
            selectedOption: undefined
        };*!/

    }

    handleFillData(){
        console.log('Fill Data!');
    }


    /!*handleDeleteOptions() {
        /!*this.setState(() =>  {
            return {
                options: []
            };
        });*!/
        this.setState(() => ({options: []}));
    }

    handleDeleteOption(openToRemove){
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => openToRemove !== option)
        }));
    }

    handleClearSelectedOption() {
        console.log('handleClearSelectedOption Called');
        this.setState(() => ({

            selectedOption: undefined
        }));
    }

    handlePick() {
        const randomNumber = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNumber];
        //console.log(option);
        this.setState(() => ({
            selectedOption: option
        }));
    }

    handleAddOption(option) {
        /!*e.preventDefault();
        const option = e.target.elements.option.value.trim();*!/

        if(!option) {
            return 'Enter a valid Item to add.';
        } else if(this.state.options.indexOf(option) > -1) {
            return 'This item already exists';
        }

        if(option) {
            //alert(option);
            let newOptions = this.state.options.slice();
            newOptions.push(option);
            /!*this.setState((prevState) => {
               return {
                   options: prevState.options.concat(option)
               };
            });*!/
            this.setState((prevState) => ({options: prevState.options.concat(option)}));
        }
    }*!/

    render() {
        //const title = "Indecision";
        const subtitle = "The data that we collect will be used to guide the future generations into the proper academic and career choice.";
        const subtitle2 = "Your data for a god cause and a better future...";
        return (

            <div>
                <Header subtitle={subtitle} subtitle2={subtitle2}/>
                {

                    <div className='container'>
                        <Action handleFillData={this.handleFillData}/>
                    </div>


                    /!*<div className='container'>
                    <Action
                        hasOption={this.state.options.length > 0}
                        handlePick={this.handlePick}
                    />

                    <Options
                        options={this.state.options}
                        handleDeleteOptions={this.handleDeleteOptions}
                        handleDeleteOption={this.handleDeleteOption}
                    />
                    <AddOption handleAddOption={this.handleAddOption}/>
                    <OptionModal
                        selectedOption={this.state.selectedOption}
                        handleClearSelectedOption={this.handleClearSelectedOption}
                    />
                </div>*!/}
            </div>
        );
    }
}

IndecisionApp.defaultProps = {
    options: []
};*/
