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
      patientInfo: '',
      username: ''
    };

    this.getMedication = this.getMedication.bind(this)
    this.getImage = this.getImage.bind(this)
    this.addMedication = this.addMedication.bind(this)
    this.optionalPatientInfo = this.optionalPatientInfo.bind(this)
    this.grabUserName = this.grabUserName.bind(this)
  }

  componentDidMount() {
    this.grabUserName()
  }

  grabUserName() {
    axios.get(`https://us-central1-mvprescription.cloudfunctions.net/api/users?username=test`)
      .then((res) => {
        this.setState({
          username: res.data.username
        })
      })
      .catch(err => console.log(err))
  }

  optionalPatientInfo() {
    if (this.state.medication.results[0].information_for_patients) {
      this.setState({
        patientInfo: this.state.medication.results[0].information_for_patients[0]
      })
    } else if (!this.state.medication.results[0].information_for_patients) {
      this.setState({
        patientInfo: ''
      })
    }
  }


  getMedication(query) {
    axios.get(`https://api.fda.gov/drug/label.json?search=description:${query}&limit=1`)
    .then(res => {
      this.setState({
        medication: res.data,
        sideEffect: res.data.results[0].adverse_reactions[0],
        name: query
      })
    })
    .then(() => this.optionalPatientInfo())
    .then(() => this.getImage(query))
    // .then(() => this.addMedication())
    .catch(err => console.log(err))
  }


  getImage(drugQuery) {
    axios.get(`https://rximage.nlm.nih.gov/api/rximage/1/rxnav?name=${drugQuery}&rLimit=1`)
    .then(res => {
      this.setState({
        image: (res.data.nlmRxImages.length === 0) ? '' : res.data.nlmRxImages[0].imageUrl,
        generic: (res.data.nlmRxImages.length === 0) ? '' : res.data.nlmRxImages[0].name
      })
    })
    .then(() => this.addMedication())
    .catch(() => console.log(err))
  }

  addMedication() {
    axios.post(`http://localhost:3000/mvp/drug`, {
      name: this.state.query,
      generic: this.state.generic,
      imgUrl: this.state.image,
      strength: this.state.strength,
      direction: this.state.direction,
      note: this.state.patientInfo,
      sideEffect: this.state.sideEffect,
      username: this.state.username
    })
    .then(() => console.log('hi'))
    .catch((err) => console.log(err))
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

  <Button onPress={() => this.getMedication(this.state.query)} title="Add Medication"/>
  <Button onPress={() => console.log(this.state.username)} title="Username"/>
    </View>
    );
  }
}

// Alert.alert(
//   'Successfully Added!',
//   [
//     // {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
//     // {
//     //   text: 'Cancel',
//     //   onPress: () => console.log('Cancel Pressed'),
//     //   style: 'cancel',
//     // },
//     {text: 'OK', onPress: () => console.log('OK Pressed')},
//   ],
//   {cancelable: false},
// )