//var PushNotification = require("react-native-push-notification");
import React, { Component } from 'react';
import { View, Text, Picker} from 'react-native';

const SetAlerts = (props) => (
    <Picker
  selectedValue="English"
  style={{height: 50, width: 50}}>
  <Picker.Item label="Java" value="java" />
  <Picker.Item label="JavaScript" value="js" />
</Picker>
);

export default SetAlerts;

// onValueChange={(itemValue, itemIndex) =>
//   this.setState({language: itemValue})
// }