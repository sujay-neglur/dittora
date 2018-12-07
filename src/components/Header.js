import React from 'react';
//import goorooLogo from './GoorooLogo.png';

const Header = (props) => (
    <div className='header'>
        <div className='container'>
            <h1 className={props.className}>
                {props.title}
                </h1>
            <h2 className='header__subtitle'>{props.subtitle}</h2>
            <h2 className='header__subtitle2'>{props.subtitle2}</h2>
        </div>
    </div>
);

/*//  <img src={goorooLogo} alt='goorooLogo' />*/
/*
//{props.title}
*/

/*Header.defaultProps = {
    title: 'Gooroo.ai'
};*/

export default Header;