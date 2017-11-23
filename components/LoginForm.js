import React, { Component } from 'react';
import { Text } from 'react-native';
import firebase from 'firebase';
import { Button } from 'react-native-elements';
import { Card, CardSection, Input, Spinner } from './common';

class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            error: '',
            loading: false
        };
    }

    onButtonPress = () => {
        const { email, password } = this.state;

        this.setState({ error: '', loading: true });

        firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then(this.onLoginSuccess.bind(this))
            .catch(() => {
                firebase
                    .auth()
                    .createUserWithEmailAndPassword(email, password)
                    .then(this.onLoginSuccess.bind(this))
                    .catch(this.onLoginFail.bind(this));
            });
    };

    onLoginFail() {
        this.setState({ error: 'Authentication Failed', loading: false });
    }

    onLoginSuccess() {
        this.setState({ error: '', loading: false, email: '', password: '' });
    }

    renderButton() {
        if (this.state.loading) {
            return <Spinner size={'small'} />;
        }
        return (
            <Button
                raised
                icon={{ name: 'lock-open' }}
                backgroundColor="#397af8"
                title="Log In"
                buttonStyle={styles.loginButtonStyle}
                onPress={this.onButtonPress}
            />
        );
    }

    render() {
        return (
            <Card>
                <CardSection>
                    <Input
                        placeholder="user@gmail.com"
                        label="Email"
                        value={this.state.email}
                        onChangeText={email => this.setState({ email })}
                    />
                </CardSection>

                <CardSection>
                    <Input
                        placeholder="password"
                        label="Password"
                        value={this.state.password}
                        onChangeText={password => this.setState({ password })}
                        secureTextEntry
                    />
                </CardSection>

                <Text style={styles.errorTextStyle}>{this.state.error}</Text>

                <CardSection style={styles.buttonSection}>{this.renderButton()}</CardSection>
            </Card>
        );
    }
}

const styles = {
    loginButtonStyle: {
        alignSelf: 'center',
        justifyContent: 'center'
    },

    errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    },

    buttonSection: {
        justifyContent: 'center'
    }
};

export default LoginForm;
