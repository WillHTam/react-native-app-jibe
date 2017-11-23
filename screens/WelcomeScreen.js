import React, { Component } from "react";
import { View, Text } from "react-native";

import Slides from '../components/Slides';

const slideData = [
  { text: 'Use Jobe to find jobe'},
  { text: 'Set Location then Swipe'}
]

class WelcomeScreen extends Component {
  render() {
    return (
      <Slides data={slideData} />
    );
  }
}

export default WelcomeScreen;
