import {combineReducers} from 'redux';
import resourceReducer from './resourceReducer';

export default combineReducers({
    resources: resourceReducer
})
