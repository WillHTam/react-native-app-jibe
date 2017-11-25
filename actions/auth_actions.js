// House all action creators with Facebook here

import { AsyncStorage } from 'react-native';
// Async Storage of React Native allows small snippets of data
    // to persist between executions of the app. A key-value store similar to a browser's local storage
// By default, the entire store is flushed when the app is exited,
    // so we should save the token in the AsyncStorage so that the app remembers
    // the token and thus if the user is logged in 
import { Facebook } from 'expo';

import {
    FACEBOOK_LOGIN_SUCCESS, 
    FACEBOOK_LOGIN_FAIL
} from './types';

// How to use AsyncStorage:
// AsyncStorage.setItem('fb_token' (key), token(value));
// AsyncStorage.getItem('fb_token')
// Async uses promises, not instant

export const facebookLogin = () => async dispatch => {
    let token = await AsyncStorage.getItem('fb_token')
    if (token) {
        // Dispatch an action saying FB login is done
        dispatch({ type: FACEBOOK_LOGIN_SUCCESS, payload: token})
    } else {
        // Start FB Login Process, given dispatch so that it has access to it
        doFacebookLogin(dispatch);
    }
};

const doFacebookLogin = async dispatch => {
    // a helper function for the Facebook login to reduce complexity in facebookLogin
    let {type, token} = await Facebook.logInWithReadPermissionsAsync('133107674065848', {
        permissions: ['public_profile']
    });

    if (type === 'cancel') {
        return dispatch({ type: FACEBOOK_LOGIN_FAIL });
    }

    // use await here 
    await AsyncStorage.setItem('fb_token', token);
    dispatch({ type: FACEBOOK_LOGIN_SUCCESS, payload: token })
};