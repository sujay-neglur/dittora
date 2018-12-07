import React from 'react';
import Modal from 'react-modal';

const optional = (props) => {
    return(
        <Modal
        isOpen={!!props.selectedOption}
        onRequestClose={props.handleClearSelectedOption}
        contentLabel='Selected Option'>
            <h3>In Modal</h3>
            {props.selectedOption && <p>{props.selectedOption}</p>}
            <button onClick={props.handleClearSelectedOption}>Okay</button>
        </Modal>
    );
};

export default optional;