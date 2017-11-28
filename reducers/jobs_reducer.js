import {
    FETCH_JOBS
} from '../actions/types';

const INITIAL_STATE = {
    results: []
};

export default function(state = INITIAL_STATE, action) {
    switch (action.type) {
        case FETCH_JOBS:
            // take the results and handle them
            return action.payload;
        default:
            return state;
    }
}