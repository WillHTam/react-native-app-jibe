// House all action creators with Facebook here

import { AsyncStorage } from 'react-native'
// Async Storage of React Native allows small snippets of data
    // to persist between executions of the app. A key-value store similar to a browser's local storage
// By default, the entire store is flushed when the app is exited,
    // so we should save the token in the AsyncStorage so that the app remembers
    // the token and thus if the user is logged in 

import {
    FACEBOOK_LOGIN_SUCCESS
} from './types';

// How to use AsyncStorage:
// AsyncStorage.setItem('fb_token' (key), token(value));
// AsyncStorage.getItem('fb_token')
// Async uses promises, not instant

export const facebookLogin = () => async dispatch => {
        let token = await AsyncStorage.getItem('fb_token')
        if (token) {
            // Dispatch an action saying FB login is done
        
        } else {
            // Start FB Login Process
        }
    }
