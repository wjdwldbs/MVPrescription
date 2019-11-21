import React from 'react';
import { Modal, View, Text, TextInput, TouchableHighlight, StyleSheet } from 'react-native';
// import Load from "react-native-loading-gif";

var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  }
})

export default class AuthLoading extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={{fontSize: 30}}>Loading...</Text>
      </View>
    )
  }
}