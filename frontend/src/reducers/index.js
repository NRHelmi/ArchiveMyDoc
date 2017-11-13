import { combineReducers } from 'redux';
import { SET_FOLDERS, SET_FILES } from '../actions';

function folders(state = [], action){
    switch(action.type){
        case SET_FOLDERS:
            return action.folders;
        default:
             return state;
    }
}

function files(state = [], action){
    switch(action.type) {
        case SET_FILES:
            return action.files;
        default:
            return state;
    }
}
const rootReducer = combineReducers({ folders, files });
export default rootReducer;