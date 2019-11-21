import React from 'react';
import { Modal, View, Text, TextInput, TouchableHighlight, StyleSheet } from 'react-native';
// import Load from "react-native-loading-gif";

var styles = StyleSheet.create({
  container: {
    fontSize: 25,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  }
})

export default class AuthLoading extends React.Component {
  render() {
    return (
      <View>
        <Text style={styles.container}>Loading...</Text>
      </View>
    )
  }
}