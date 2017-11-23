import React, { Component } from "react";
import { View, Text, Platform } from "react-native";
import { Button } from 'react-native-elements'

class ReviewScreen extends Component {
  // By adding the keyword static, this property is added to the class itself
    // instead of just an instance of this class
  // React-Navigation will look for the object navigationOptions to customize the 
    // displayed component.
  // title key will set the title defined in the navigator header/tabs
  // header key has customization properties
    // right will put a component on the right side of the header

// Instead of using the react-native-elements button, use the one from react-native
  // Then it will already look native
  static navigationOptions = ({ navigation}) => ({
    title: 'Review Jobs',
    headerRight: <Button title="Settings" onPress={() => { navigation.navigate('settings') }} backgroundColor="rgba(0,0,0,0)" color="rgba(0,122,255,1)" />
  })

  render() {
    return (
      <View>
        <Text>ReviewScreen</Text>
        <Text>ReviewScreen</Text>
        <Text>ReviewScreen</Text>
      </View>
    );
  }
}

export default ReviewScreen;
