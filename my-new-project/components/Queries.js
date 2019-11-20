import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import axios from 'axios';

import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Button,
  TextInput
} from 'react-native';

export default class Queries extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      query: '',
      medication: '',
      strength: '',
      direction: '',
      note: '',
      sideEffect: ''
    };

    this.getMedication = this.getMedication.bind(this)
  }

  getMedication(query) {
    axios.get(`https://api.fda.gov/drug/label.json?search=description:${query}&limit=1`)
    .then(res => {
      this.setState({
        medication: res.data
      })
    })
    .catch(err => console.log(err))
  }

  addMedication() {
    axios.post('/drug', {
      name: this.state.query,
      strength: this.state.strength,
      direction: this.state.direction,
      note: this.state.note,
      sideEffects: this.state.sideEffect
    })
  }



  render() {
    var dosage = [];
    return (
    <View>
      <Text>Add a Medication</Text>
      <TextInput
        placeholder="Type Here"
        onChangeText={(text) => this.setState({query: text})}
        value={this.state.query}
        inlineImageLeft='search_icon'
        />
      <Text>Strength</Text>
      <TextInput
        placeholder="Type Here"
        onChangeText={(text) => this.setState({strength: text})}
        />
      <Text>Add Direction</Text>
      <TextInput
        placeholder="Type Here"
        onChangeText={(text) => this.setState({direction: text})}
        />
      <Text>Add Notes</Text>
      <TextInput
        placeholder="Type Here"
        onChangeText={(text) => this.setState({note: text})}
        />
  <Button onPress={() => this.getMedication(this.state.query)} title="click"/>
  <Button onPress={() => console.log(this.state)} title="click"/>
    </View>
    );
  }

}