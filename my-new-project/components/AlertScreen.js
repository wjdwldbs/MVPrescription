import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import AlertDetail from './AlertDetail.js';
import axios from 'axios';
//import dummy from '../dummyData.js';

const styles =StyleSheet.create({
  header: {
    color: '#696969',
    fontWeight: 'bold',
    fontSize: 30,
    textAlign: 'center'
  },
  alert: {
    
  }
})

export default class AlertScreen extends Component {
  constructor(){
    super();
    this.state = {
      username: 'test',
      medList: []
    }
    this.getMedList = this.getMedList.bind(this);
    this.deleteMed = this.deleteMed.bind(this);
  }

  getMedList(username){
    axios.get(`http://localhost:3000/mvp/drugs/${username}`)
    .then((results) => {
      this.setState({
        medList: results.data
      })
    })
    .catch((err) => console.log(`unsuccessful get user med request ${err}`))
  }

  deleteMed(_id){
    axios.delete(`http://localhost:3000/mvp/drugs/${_id}`)
    .then(() => {
      this.getMedList(this.state.username)
      console.log('successfully deleted med')
    })
    .catch((err) => console.log(`unsuccessful delete med request ${err}`))
  }

  componentDidMount(){
    this.getMedList(this.state.username)
  }

  componentDidUpdate(prevProps) {
    if (prevProps.update !== this.props.update){
      this.getMedList(this.state.username)
    }
  }

  render(){
    return(
      <View>
        <Text style={styles.header}>My Medication List</Text>

        <AlertDetail deleteMed={this.deleteMed} data={this.state.medList}/>
      </View>
    );
  }
}
//hello
