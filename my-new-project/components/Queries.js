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
const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    textAlign: 'left'
  },
  input: {
    fontSize: 30,
    textAlign: 'center'
  },
  button: {
    height:50,
    width: 250,
    backgroundColor: '#33ccff',
    color: 'white',

  }

})
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
    <View >
      <Text style={styles.text}>Add a Medication</Text>
      <TextInput
      style={styles.input}
        placeholder="Type Here"
        onChangeText={(text) => this.setState({query: text})}
        value={this.state.query}
        inlineImageLeft='search_icon'
        />
      <Text style={styles.text}>Strength</Text>
      <TextInput
      style={styles.input}
        placeholder="Type Here"
        onChangeText={(text) => this.setState({strength: text})}
        />
      <Text style={styles.text}>Add Direction</Text>
      <TextInput
      style={styles.input}
        placeholder="Type Here"
        onChangeText={(text) => this.setState({direction: text})}
        />
      <Text style={styles.text}>Add Notes</Text>
      <TextInput
      style={styles.input}
        placeholder="Type Here"
        onChangeText={(text) => this.setState({note: text})}
        />
  <View style={styles.button}>
  <Button color='white' title="Submit"  onPress={() => this.getMedication(this.state.query)} />
  </View>
    </View>
    );
  }

}
