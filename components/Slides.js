import React, { Component } from 'react';
import { View, Text, ScrollView, Dimensions } from 'react-native';
import { Button } from 'react-native-elements'

const screenWidth = Dimensions.get('window').width;

// just defining horizontal sets it as true, no need for horizontal={true}
class Slides extends Component {
    renderLastSlide(index) {
        if (index === this.props.data.length - 1) {
            return (
                // Button from RNE does not accept style, instead only specific prop names like buttonStyle and textStyle
                // onComplete has not parentheses because otherwise it would be called when the button is rendered
                <Button buttonStyle={styles.buttonStyle} title="Get Dat Paper" raised onPress={this.props.onComplete} />
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
        color: 'white',
        textAlign: 'center'
    },
    buttonStyle: {
        marginTop: 5,
        backgroundColor: '#0288D1'
    }
};

export default Slides;