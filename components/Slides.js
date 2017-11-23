import React, { Component } from 'react';
import { View, Text, ScrollView, Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width

// just defining horizontal sets it as true, no need for horizontal={true}
class Slides extends Component {
    renderSlides() {
        return this.props.data.map((slide) => {
            return (
                <View key={slide.text} style={[styles.slideStyle, {backgroundColor: slide.color}]}>
                    <Text style={styles.textStyle}>
                        {slide.text}
                    </Text>
                </View>
            )
        })
    }

    render() {
        return (
            <ScrollView horizontal pagingEnabled style={{ flex: 1 }}>
                {this.renderSlides()}
            </ScrollView>
        );
    }
}

const styles = {
    slideStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: screenWidth
    },
    textStyle: {
        fontSize: 30
    }
};

export default Slides;