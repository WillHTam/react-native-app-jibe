import React, { Component } from "react";
import { View, Text } from "react-native";
import { MapView } from 'expo';

class MapScreen extends Component {
  state = {
    region: {
      longitude: -122,
      latitude: 37,
      longitudeDelta: 0.04,
      latitudeDelta: 0.09
    }
  }

  render() {
    return (
      <View style={{ flex:1 }}>
        <MapView 
          region={this.state.region}
          style={{flex:1}} 
        />
      </View>
    );
  }
}

export default MapScreen;

// Pass in 'region' prop to define where the map should start
  // long/lat are the starting position, deltas are for the zoom level
// Each touch/drag will be accompanied by 'onRegionChangeComplete' activation
// Then the region from there can be passed back to MapView
