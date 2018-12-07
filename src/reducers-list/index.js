import {combineReducers} from 'redux';
import UserReducers from './reducers-user-data';

const allReducers = combineReducers({
    users: UserReducers
});

export default allReducers;