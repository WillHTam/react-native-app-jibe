import { combineReducers } from 'redux';
import auth from './auth_reducer';
import jobs from './jobs_reducer';
import likedJobs from './likes_reducer';

// In Redux, must have at least one reducer which cannot return undefined. 
export default combineReducers({
    // es6 allows 'auth' instead of 'auth: auth'
    auth, jobs, likedJobs
});

// auth contains a property called token
    // if token = false, go into facebook login flow
    // if exists, continue onto map screen 