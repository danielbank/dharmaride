/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Alert,
  Button,
  Text,
  View
} from 'react-native';

const onButtonPress = () => {
  Alert.alert('Sending an SMS to Keith!');
};

export default class dharmaride extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          dharmaride
        </Text>
        <Button
          onPress={onButtonPress}
          title="SMS Keith"
          color="#DEB887"
          accessibilityLabel="Learn more about purple"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('dharmaride', () => dharmaride);
