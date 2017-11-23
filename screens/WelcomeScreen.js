import React, { Component } from "react";
import { View, Text } from "react-native";

import Slides from '../components/Slides';

const slideData = [
  { text: 'Use Jobe to find jobe', color: '#03A8F3'},
  { text: 'Set Location then Swipe', color: '#009688'},
  { text: 'Tinder for jobe', color: '#03A9F4' }
]

class WelcomeScreen extends Component {
  render() {
    return (
      <Slides data={slideData} />
    );
  }
}

export default WelcomeScreen;
