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
      image: '',
      name: '',
      generic: '',
      query: '',
      medication: '',
      strength: '',
      direction: '',
      note: '',
      sideEffect: '',
      patientInfo: ''
    };

    this.getMedication = this.getMedication.bind(this)
    this.getImage = this.getImage.bind(this)
    this.addMedication = this.addMedication.bind(this)
  }

  getMedication(query) {
    axios.get(`https://api.fda.gov/drug/label.json?search=description:${query}&limit=1`)
    .then(res => {
      this.setState({
        //medication: res.data,
        sideEffect: res.data.results[0].adverse_reactions[0],
        patientInfo: res.data.results[0].information_for_patients[0],
        name: query
      })
    })
    .then(() => this.getImage(query))
    .catch(err => console.log(err))
  }

  getImage(drugQuery) {
    axios.get(`https://rximage.nlm.nih.gov/api/rximage/1/rxnav?name=${drugQuery}&rLimit=1`)
    .then(res => {
      this.setState({
        image: res.data.nlmRxImages[0].imageUrl,
        generic: res.data.nlmRxImages[0].name
      })
    })
  }

  addMedication() {
    axios.post(`http://localhost:3000/mvp/drug`, {
      name: this.state.query,
      generic: this.state.generic,
      imgUrl: this.state.image,
      strength: this.state.strength,
      direction: this.state.direction,
      note: this.state.note,
      sideEffects: this.state.sideEffect
    })
  }



  render() {

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
  <Button onPress={() => this.getMedication(this.state.query)} title="click"/>
  <Button onPress={() => console.log(this.state)} title="click"/>
  <Button onPress={() => this.addMedication()} title="click"/>
    </View>
    );
  }
}
