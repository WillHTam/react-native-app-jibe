import _ from 'lodash';

import {
    LIKE_JOB,
    CLEAR_LIKED_JOBS
} from '../actions/types';

export default function (state = [], action) {
    switch (action.type) {
        case CLEAR_LIKED_JOBS:
            // will reset list of liked jobs
            return [];
        case LIKE_JOB:
            // add liked jobs to the review scree
            // do not show duplicate jobs on the ReviewScreen
            return _.uniqBy([
                action.payload, ...state
            ], 'jobkey');
            // the jobkey for the liked job will be compared to the array of liked jobs
        default:
            return state;
    }
}