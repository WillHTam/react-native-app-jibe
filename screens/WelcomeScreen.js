import React, { Component } from "react";
import { View, Text } from "react-native";

import Slides from '../components/Slides';

const slideData = [
  { text: 'Use Jobe to find jobe', color: '#03A8F3'},
  { text: 'Set Location then Swipe', color: '#009688'},
  { text: 'Tinder for jobe', color: '#03A9F4' }
];

class WelcomeScreen extends Component {
  onSlidesComplete = () => {
    // WelcomeScreen recieved the navigation prop as a result of the initiation of the MainNavigator in the 
      // main App class. ReactNavigation will pass down this prop (this.props.navigation.navigate) to any
      // components that it renders
    this.props.navigation.navigate('auth')
  }

  // if onSlidesComplete were not an arrow function, it would be necessary to use .bind(this) in the prop below
  render() {
    return (
      <Slides data={slideData} onComplete={this.onSlidesComplete}/>
    );
  }
};

export default WelcomeScreen;
