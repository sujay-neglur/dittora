import React from 'react';
import Header from "./Header";
import Action from "./Action";


const ConsentPage = () => {
    console.log('Consent Page!');

    const title = "Consent Form";
    const action1 = "/about";
    const action2 = "/";
    const actionButtonData1 = "I Agree";
    const actionButtonData2 = "Disagree";
    const actionButtonClass1 = "home-button-left";
    const actionButtonClass2 = "home-button-right";
    return(
        <div>
            <Header title={title}/>
                          {
                                    <div className='container'>
                                        <p>All the details of the consent page!</p>

                                        <span>
                        <Action action={action1}
                                actionButtonData={actionButtonData1}
                                classButton={actionButtonClass1}/>
                        <Action action={action2}
                            actionButtonData={actionButtonData2}
                            classButton={actionButtonClass2}/>
                    </span>

                </div>
            }
        </div>
    );
};

export default ConsentPage;

//<Action action={action} actionButtonData={actionButtonData}/>  <NavLink to='/about'>I agree!</NavLink>