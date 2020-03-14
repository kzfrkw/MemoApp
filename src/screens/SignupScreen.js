import React from 'react';
import { StyleSheet, View, Text, TextInput, TouchableHighlight } from 'react-native';

class SignupScreen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>メンバー登録</Text>
                <TextInput style={styles.input} value="Email Address" />
                <TextInput style={styles.input} value="Password" />
                <TouchableHighlight style={styles.button} onPress={() => {}} underlayColor='#c70f66'>
                    <Text style={styles.buttonTitle}>送信する</Text>
                </TouchableHighlight>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        padding: 24,
        backgroundColor: '#fff'
    },
    input: {
        backgroundColor: '#ddd',
        height: 40,
        marginBottom: 16,
        borderWidth: 1,
        borderColor: '#ddd',
        paddingTop: 8,
    },
    title: {
        fontSize: 28,
        alignSelf: 'center',
        paddingBottom: 16,
    },
    button: {
        backgroundColor: '#E31676',
        height: 48,
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center',
        width: '70%',
        alignSelf: 'center'
    },
    buttonTitle: {
        color: '#fff',
        fontSize: 16,
    }
});

export default SignupScreen;