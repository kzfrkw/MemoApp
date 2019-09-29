import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import * as Font from 'expo-font';
import FontAwsome from '../../assets/fonts/fa-solid-900.ttf';

class CircleButton extends React.Component {
    state = {
        fontLoaded: false,
    }
    async componentDidMount() {
        await Font.loadAsync({
            'FontAwsome': FontAwsome,
        })

        this.setState({ fontLoaded: true});
    }

    render() {
        const { style, color } = this.props;
        let bgColor = '#E31676';
        let textColor = '#fff';

        if (color === 'white') {
            bgColor = '#fff';
            textColor = '#E31676'
        }
        return (
            <View style={[styles.circleButton, style, { backgroundColor: bgColor}]}>
                {
                    this.state.fontLoaded ? (
                        <Text style={[styles.circleButtonText, { color: textColor}]}>
                            {this.props.children}
                        </Text>
                    ) : null
                }
            </View>
        );
    }
}

const styles = StyleSheet.create({
    circleButton: {
        position: "absolute",
        bottom: 32,
        right: 32,
        width: 48,
        height: 48,
        borderRadius: 50,
        justifyContent: "center",
        alignItems: "center",
        shadowOffset: { width: 0, height: 2},
        shadowOpacity: 0.2,
        shadowRadius: 3,
        zIndex: 10,
      },
      circleButtonText: {
        fontFamily: 'FontAwsome',
        fontSize: 24,
        lineHeight: 32,
      }
})

export default CircleButton;