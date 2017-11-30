import React, { Component } from "react";
import { View, Text, Platform } from "react-native";
import { Button } from 'react-native-elements';
import { connect } from 'react-redux';
import * as actions from '../actions';
// could be { clearLikedJobs } from '../actions';

class SettingsScreen extends Component {
  static navigationOptions = {
    header: {
      style: {
        marginTop: Platform.OS === 'android' ? 24 : 0
      }
    }
  }

  render() {
    return (
      <View>
        <Button
          title="Clear Liked Jobs"
          large
          icon={{ name: 'delete-forever' }}
          backgroundColor="#F44336"
          onPress={this.props.clearLikedJobs}
        />
        <Text>
          {'\u2728'}This will clear all your liked Jobs{'\u2728'}
        </Text>
      </View>
    );
  }
}

export default connect(null, actions)(SettingsScreen);
// export default connect(null, {clearLikedJobs})(SettingsScreen)
