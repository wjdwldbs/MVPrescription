import React from 'react';
import { Modal, View, Text, TextInput, TouchableHighlight } from 'react-native';
import axios from 'axios';

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
      loginEmail: '',
      loginPassword: '',
      signupEmail: '',
      signupPassword: '',
      username: '',
      firstName: '',
      lastName: ''
    }

    this.createNewUser = this.createNewUser.bind(this);
  }

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  createNewUser() {
    console.log('create user attempted');
    axios.post('https://mvprescription.firebaseio.com/users', {
      username: this.state.username,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.signupEmail,
      password: this.state.signupPassword
    })
  }

  render() {
    return (
      <View style={{fontSize: 16}}>
        <Text style={{marginTop: 50}}>Log In with email and password</Text>
        <Text>Email:</Text>
        <TextInput placeholder="email" onChangeText={(text) => this.setState({ loginEmail: text })}/>
  
        <Text>Password:</Text>
        <TextInput placeholder="password" onChangeText={(text) => this.setState({ loginPassword: text })}/>
        <TouchableHighlight onPress={() => console.log('login attempted')}>
          <Text>Log In</Text>
        </TouchableHighlight>
  
        <View>
          <Text>Don't have an account?</Text>
          <TouchableHighlight onPress={() => this.setModalVisible(!this.state.modalVisible)}>
            <Text>Sign up!</Text>
          </TouchableHighlight>

          <Modal
            animationType="slide"
            transparent={false}
            visible={this.state.modalVisible}
          >
            <View>
              <TouchableHighlight
                style={{marginTop: 50}}
                onPress={() => this.setModalVisible(!this.state.modalVisible)}
              >
                <Text>Close</Text>
              </TouchableHighlight>

              <Text>Please fill out the entire form to create an account.</Text>
              <Text>Email</Text>
              <TextInput placeholder="Email" onChangeText={(text) => this.setState({ signupEmail: text })}/>
              <Text>Username</Text>
              <TextInput placeholder="Username" onChangeText={(text) => this.setState({ signupPassword: text })}/>
              <Text>First Name</Text>
              <TextInput placeholder="First Name" onChangeText={(text) => this.setState({ firstName: text })}/>
              <Text>Last Name</Text>
              <TextInput placeholder="Last Name" onChangeText={(text) => this.setState({ lastName: text })}/>

              <TouchableHighlight
                onPress={this.createNewUser}
              >
                <Text>Submit</Text>
              </TouchableHighlight>
            </View>
          </Modal>
        </View>
      </View>
    )

  }
}