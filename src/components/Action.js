import React from 'react';

import {Link, NavLink} from 'react-router-dom';



const Action = (props) => (

        <Link to={`${props.action}/${props.sendID}`} >
        <button className={props.classButton} >
            {props.actionButtonData}
            {/*{
                console.log('In Action: ' + props.sendID)
            }*/}
        </button>
        </Link>


);

export default Action;