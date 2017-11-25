import { combineReducers } from 'redux';

// In Redux, must have at least one reducer which cannot return undefined. 
export default combineReducers({
    auth: () => { return {} }
});