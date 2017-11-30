import React, { Component } from "react";
import { View, Text, Platform, ScrollView, Linking } from "react-native";
import { Button, Card, Icon } from 'react-native-elements';
import { MapView } from 'expo';
import { connect } from 'react-redux';

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
// Could not use this.props.navigation.navigate here because only instances of the class recieve the prop
  // Class-level property vs instance-level property 
  static navigationOptions = ({ navigation}) => ({
    title: 'Review Jobs',
    tabBarIcon: ({ tintColor }) => {
        return <Icon name="favorite" size={30} color={tintColor} />;
    },
    headerRight: <Button 
                    title="Settings" 
                    onPress={() => { navigation.navigate('settings') }} 
                    backgroundColor="rgba(0,0,0,0)" 
                    color="rgba(0,122,255,1)" 
                 />
  })

  renderLikedJobs() {
    return this.props.likedJobs.map(job => {
      // destructure job so that it doesn't have to be constantly called
        // i.e. no job.company and so forth
      const { company, formattedRelativeTime, url, longitude, latitude, jobkey, jobtitle } = job;
      const initialRegion = {
        longitude,
        latitude,
        latitudeDelta: 0.0045,
        longitudeDelta: 0.02
      };

      return (
        <Card title={jobtitle} key={jobkey}>
          <View style={{ height: 200 }}>
            <MapView 
              style={{ flex: 1 }}
              cacheEnabled={Platform.OS === 'android'}
              scrollEnabled={false}
              initialRegion={initialRegion}
            />
            <View style={styles.detailWrapper}>
              <Text style={styles.italics}>{company}</Text>
              <Text style={styles.italics}>{formattedRelativeTime}</Text>
            </View>
            <Button 
              title="Apply Here"
              backgroundColor="#03A9F4"
              onPress={() => Linking.openURL(url)}
            />
          </View>
        </Card>
      );
    });
  }

  render() {
    return (
      <ScrollView>
        {this.renderLikedJobs()}
      </ScrollView>
    );
  }
}

const styles = {
  detailWrapper: {
    marginTop: 10,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  italics: {
    fontStyle: 'italic'
  }
}

function mapStateToProps(state) {
  return { likedJobs: state.likedJobs };
}

export default connect(mapStateToProps)(ReviewScreen);
