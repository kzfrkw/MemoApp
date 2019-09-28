import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

class AppBar extends React.Component {
    render() {
        return (
            <View style={styles.appbar}>
                <View>
                    <Text style={styles.appbarText}>MEMO MEMO</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    appbar: {
      position: "absolute",
      top: 0,
      left: 0,
      right:0,
      height: 60,
      paddingTop: 30,
      backgroundColor: '#2380BE',
      justifyContent: 'center',
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 0},
      shadowOpacity: 0.9,
      shadowRadius: 3,
      zIndex: 10,
    },
    appbarText: {
      color: '#fff',
      fontSize: 18,
    }
  });

export default AppBar;

