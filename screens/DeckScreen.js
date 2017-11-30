import React, { Component } from "react";
import { View, Text, Platform } from "react-native";
import { connect } from 'react-redux';
import { MapView } from 'expo';
import { Card, Button } from 'react-native-elements';

import Swipe from '../components/Swipe';
import { style } from "expo/src/Font";
import * as actions from '../actions';

class DeckScreen extends Component {
  renderCard(job) {
    const initialRegion = {
      longitude: job.longitude,
      latitude: job.latitude,
      latitudeDelta: 0.045,
      longitudeDelta: 0.02
    };
    
    return(
      <Card title={job.jobtitle}>
        <View style={{ height: 300 }}>
          <MapView
            // disables all interaction, map becomes view-only
            scrollEnabled={false}
            style={{ flex: 1 }}
            // true renders map as an image, false renders as an actual map
              // Android cannot handle multiple maps, so turn on if it is
            cacheEnabled={Platform.OS === 'android' ? true : false}
            // where to center when map is brought up
            initialRegion={initialRegion}
          >
          </MapView>
        </View>
        <View style={styles.detailWrapper}>
          <Text>{job.company}</Text>
          <Text>{job.formattedRelativeTime}</Text>
        </View>
        <Text>
          {job.snippet.replace(/<b>/g, '').replace(/<\/b>/g, '')}
        </Text>
      </Card>
    )
  };

  renderNoMoreCards = () => {
    // Swipe component calls this function, not DeckScreen
    // Swipe does not have access to this.props.navigation
    // To fix, bind renderNoMoreCards to DeckScreen
      // 1) Turn this function into an arrow function (done)
      // 2) Use this.renderNoMoreCards.bind(this)
    return (
      <Card title="Habis">
        <Button 
          title="Back To Map"
          large
          icon={{ name: 'my-location' }}
          backgroundColor="#03A9F4"
          onPress={() => this.props.navigation.navigate('map')}
        />
      </Card>
    );
  }

  render() {
    return (
      <View style={{ marginTop: 10 }}>
        <Swipe 
          data={this.props.jobs}
          renderCard={this.renderCard}
          renderNoMoreCards={this.renderNoMoreCards}
          onSwipeRight = {job => this.props.likeJob(job)}
          keyProp = "jobkey"
        />
      </View>
    );
  }
};

const styles = {
  detailWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10
  }
};

function mapStateToProps({ jobs }) {
  // jobs' results will therefore be referred to as simply 'jobs'
  return { jobs: jobs.results }
};

export default connect(mapStateToProps, actions)(DeckScreen);
