import React, { Component } from 'react';
import { View, Text, AsyncStorage } from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../actions';

class AuthScreen extends Component {
    componentDidMount() {
        this.props.facebookLogin();
        AsyncStorage.removeItem('fb_token')
    }

    render () {
        return(
            <View>
                <Text>AuthScreen</Text>
                <Text>AuthScreen</Text>
                <Text>AuthScreen</Text>
            </View>
        );
    }
};

// first argument is map state to props, and the second is action creators
export default connect(null, actions)(AuthScreen);
