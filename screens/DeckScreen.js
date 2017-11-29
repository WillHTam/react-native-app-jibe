import React, { Component } from "react";
import { View, Text, Platform } from "react-native";
import { connect } from 'react-redux';
import { MapView } from 'expo';
import { Card, Button } from 'react-native-elements'

import Swipe from '../components/Swipe';
import { style } from "expo/src/Font";

class DeckScreen extends Component {
  renderCard(job) {
    const initialRegion = {
      longitude: job.longitude,
      latitude: job.latitude,
      latitudeDelta: 0.045,
      longitudeDelta: 0.02
    }
    
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
  }

  renderNoMoreCards() {
    return (
      <Card>
      </Card>
    );
  }

  render() {
    return (
      <View>
        <Swipe 
          data={this.props.jobs}
          renderCard={this.renderCard}
          renderNoMoreCards={this.renderNoMoreCards}
          keyProp = "jobkey"
        />
      </View>
    );
  }
}

const styles = {
  detailWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10
  }
}

function mapStateToProps({ jobs }) {
  // jobs' results will therefore be referred to as simply 'jobs'
  return { jobs: jobs.results }
}

export default connect(mapStateToProps)(DeckScreen);
