import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';
// Provider is a React Component that accepts a Redux store as a prop
    // So all its children components will get access, so Provider will be the absolute master of the props
import { Provider } from 'react-redux';

// the main file is named index.js, so it automatically knows to look there
import store from './store';

import WelcomeScreen from './screens/WelcomeScreen';
import AuthScreen from './screens/AuthScreen';
import MapScreen from './screens/MapScreen';
import DeckScreen from './screens/DeckScreen';
import SettingsScreen from './screens/SettingsScreen';
import ReviewScreen from './screens/ReviewScreen';

class App extends React.Component {
    render() {
        const MainNavigator = TabNavigator({
            welcome: { screen: WelcomeScreen },
            auth: { screen: AuthScreen },
            main: {
                screen: TabNavigator({
                    map: { screen: MapScreen },
                    deck: { screen: DeckScreen },
                    review: { 
                        screen: StackNavigator({
                            review: { screen: ReviewScreen },
                            settings: {screen: SettingsScreen }
                        })
                    }
                })
            }
        }, {
            navigationOptions: {
                tabBarVisible: false
            },
            lazy: true
        });

        return (
            <Provider store={store}>
                <View style={styles.container}>
                    <MainNavigator />
                </View>
            </Provider>
        ); 
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center'
    }
});

export default App;