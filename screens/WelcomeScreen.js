import React, { Component } from "react";
import { View, Text, AsyncStorage } from "react-native";
import { AppLoading } from 'expo';
import _ from 'lodash';

import Slides from '../components/Slides';

const slideData = [
  { text: 'Use Jobe to find jobe', color: '#03A8F3'},
  { text: 'Set Location then Swipe', color: '#009688'},
  { text: 'Tinder for jobe', color: '#03A9F4' }
];

class WelcomeScreen extends Component {
  // start with null state for token b/c don't know if it exists yet.
  // true if exists, false otherwise
  // if true, we can not display the WelcomeScreen
    // hide loading from *Async*storage by extending loading screen.
  state = { token: null }

  async componentWillMount() {
    let token = await AsyncStorage.getItem('fb_token');

    if (token) {
      this.props.navigation.navigate('map');
      this.setState({ token });
    } else {
      this.setState({ token: false });
    }
  }

  onSlidesComplete = () => {
    // WelcomeScreen recieved the navigation prop as a result of the initiation of the MainNavigator in the 
      // main App class. ReactNavigation will pass down this prop (this.props.navigation.navigate) to any
      // components that it renders
    this.props.navigation.navigate('auth')
  }

  // if onSlidesComplete were not an arrow function, it would be necessary to use .bind(this) in the prop below
  render() {
    if (_.isNull(this.state.token)) {
      return <AppLoading/>;
    } 

    return (
      <Slides data={slideData} onComplete={this.onSlidesComplete}/>
    );
  }
};

export default WelcomeScreen;
