import React, { Component } from 'react';
import { View, Text, AsyncStorage } from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../actions';

class AuthScreen extends Component {
    componentDidMount() {
        this.props.facebookLogin();
        // line below will clear saved token
        // AsyncStorage.removeItem('fb_token');
        // this onAuthComplete is unlikely to be called because it
            // is waiting for facebookLogin() to be complete
        this.onAuthComplete(this.props);
    }

    // Called whenever a component is about to rerender with props
    componentWillReceiveProps(nextProps) {
        // activated on successful login
        this.onAuthComplete(nextProps);
    }

    // this function will check for a token, and redirect appropriately if it exists
    onAuthComplete(props) {
        if (props.token) {
            this.props.navigation.navigate('map');
        }
    }

    render () {
        return(
            // No need to display anything because this component only displays the 
                // Facebook login modal
            <View />
        );
    }
};

function mapStateToProps({ auth }) {
    return { token: auth.token};
}

// first argument is map state to props, and the second is action creators
export default connect(mapStateToProps, actions)(AuthScreen);
