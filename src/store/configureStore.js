import {createStore, combineReducers} from 'redux';
import userReducers from '../reducers-list/user-data';
import userAboutReducers from '../reducers-list/user-about';

export default () => {
    const store = createStore(combineReducers({
            users: userReducers,
        //usersAbout:userAboutReducers
        })
    );

    return store;
};

