//import {add, square} from'./utils.js';

/*import isSenior, {isAdult, canDrink} from './person.js';

console.log('src/app.js is running!');

/!*
console.log(square(4));
console.log(add(4, 6));*!/

console.log(isAdult(19));
console.log(canDrink(19));
console.log(isSenior(64));*/

/*import validator from 'validator';

console.log(validator.isEmail('test@gmail.com'));*/

/*
const template = <p>This is Secret!</p>
ReactDOM.render(template, document.getElementById('app'));*/

import React from 'react';
import ReactDOM from 'react-dom';
//import IndecisionApp from './components/IndecisionApp';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
//import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import AppRouter from './routers/AppRouter';

import { Provider } from  'react-redux';
import {createStore} from 'redux';
//import allReducers from './reducers-list';

import configureStore from './store/configureStore';
import { addName } from './actions/actions';
import { addProfession } from './actions/actions';

console.log('src/playground/app.js is running');


//const store = createStore(allReducers);

const store = configureStore();

console.log('State In App.js: ');
console.log(store.getState());
//store.dispatch(addName({ gender: '', last: 'Sundaram' }));
//store.dispatch(addName({ first: 'Antoine', last: 'Riachi' }));
//store.dispatch(addName({ first: 'Mohamed', last: 'Hamid' }));

//store.dispatch(addProfession(1, { profession: 'CS'}));
/*const storeProvider = {
     <Provider store={store}>
         <AppRouter />
     </Provider>
};*/

const appRoot = document.getElementById('app');

ReactDOM.render(<Provider store={store}>
    <AppRouter />
</Provider>, appRoot);


/*class Header extends React.Component {
    render() {cd
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtitle}</h2>
            </div>
        );
    }
}*/



/*class Action extends React.Component {

    render() {
        return (
            <div>

                <button
                    disabled={!this.props.hasOption}
                    onClick={this.props.handlePick}
                >
                    What should I do?
                </button>
            </div>
        );
    }
}*/



/*class Options extends React.Component {

    render() {
        return (
            <div>

                {this.props.options.map((option) => <Option key={option} optionText={option}/>)}
                <button onClick={this.props.handleDeleteOptions}>Remove All</button>
            </div>
        );
    }
}*/



/*class Option extends React.Component {
    render() {
        return (
            <div>
                Option: {this.props.optionText}
            </div>
        );
    }
}*/



/*const jsx = (
    <div>
        <Header />
        <Action />
        <Options />
        <AddOption />
    </div>
);*/



//stateless React Component











