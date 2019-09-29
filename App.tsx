import React from 'react';
import { StyleSheet, View } from 'react-native';

import AppBar from './src/components/AppBar';
import SignupScreen from './src/screens/SignupScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <AppBar />
      <SignupScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 60,
  },
});
