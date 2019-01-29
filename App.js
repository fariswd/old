import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import OneSignal from 'react-native-onesignal';

export default class App extends React.Component {
  componentDidMount() {
    console.log('-one', OneSignal)
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.asdasjs to start working on your app!</Text>
      </View>
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
