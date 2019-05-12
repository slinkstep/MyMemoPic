import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Home from './src/screens/home/containers/home'

export default class App extends Component {
  render() {
    return (
      // <View style={styles.container}>
      //   <Text>Open hi up App.js to start working on your app!</Text>
      // </View>

      <Home></Home>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
