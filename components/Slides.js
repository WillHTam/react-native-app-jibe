import React, { Component } from 'react';
import { View, Text, ScrollView, Dimensions } from 'react-native';
import { Button } from 'react-native-elements'

const screenWidth = Dimensions.get('window').width;

// just defining horizontal sets it as true, no need for horizontal={true}
class Slides extends Component {
    renderLastSlide(index) {
        if (index === this.props.data.length - 1) {
            return (
                <Button style={styles.buttonStyle} title="Get Dat Paper" raised />
            )
        }
    }

    renderSlides() {
        return this.props.data.map((slide, index) => {
            return (
                <View key={slide.text} style={[styles.slideStyle, {backgroundColor: slide.color}]}>
                    <Text style={styles.textStyle}>
                        {slide.text}
                    </Text>
                    { this.renderLastSlide(index) }
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
        fontSize: 30,
        color: 'white'
    },
    buttonStyle: {
        marginTop: 5
    }
};

export default Slides;