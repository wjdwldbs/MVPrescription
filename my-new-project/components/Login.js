import React from 'react';
import { Modal, View, Text, TextInput, TouchableHighlight } from 'react-native';
import axios from 'axios';
import Queries from './Queries.js'

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      signupVisible: false,
      passwordHidden: true,
      loginUsername: '',
      loginPassword: '',
      signupUsername: '',
      signupPassword: '',
      email: '',
      firstName: '',
      lastName: ''
    }

    this.createNewUser = this.createNewUser.bind(this);
    this.verifyUser = this.verifyUser.bind(this);
  }

  setModalVisible(visible) {
    this.setState({signupVisible: visible});
  }

  createNewUser() {
    axios.post(`https://us-central1-mvprescription.cloudfunctions.net/api/users`, {
      username: this.state.signupUsername,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      password: this.state.signupPassword
    })
      .then((response) => {
        this.setState({
          loginUsername: this.state.signupUsername,
          loginPassword: this.state.signupPassword,
          loadingVisible: !this.state.loadingVisible
        })
      })
      .then(() => {
        this.props.navigation.navigate('AuthLoading')
      })
      .then(() => {
        this.props.navigation.navigate('Main')
      })
      .catch((err) => {
        console.error(err);
      })
  }

  verifyUser(username, password) {
    axios.get(`https://us-central1-mvprescription.cloudfunctions.net/api/users?username=${username}`)
      .then( async (response) => {
        if (response.data.password === password) {
          await this.props.navigation.navigate('AuthLoading');
          await this.props.navigation.navigate('Main');
        } else {
          alert('Username or password is incorrect. Please try again.')
        }
      })
      .catch((err) => {
        console.error(err)
      })
  }

  render() {
    return (
      <View style={{fontSize: 16}}>
        <Text style={{marginTop: 50}}>Log In with email and password</Text>
        <Text>Username:</Text>
        <TextInput autoCapitalize="none" placeholder="Username" onChangeText={(text) => this.setState({ loginUsername: text })}/>

        <Text>Password:</Text>
        <TextInput secureTextEntry={this.state.passwordHidden} autoCapitalize="none" placeholder="Password" onChangeText={(text) => this.setState({ loginPassword: text })}/>
        <TouchableHighlight onPress={() => this.setState({ passwordHidden: !this.state.passwordHidden })}>
          <Text>{this.state.passwordHidden ? 'Show Password' : 'Hide Password'}</Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => this.verifyUser(this.state.loginUsername, this.state.loginPassword)}>
          <Text>Log In</Text>
        </TouchableHighlight>

        <View>
          <Text>Don't have an account?</Text>
          <TouchableHighlight onPress={() => this.setModalVisible(!this.state.signupVisible)}>
            <Text>Sign up!</Text>
          </TouchableHighlight>

          <Modal
            animationType="slide"
            transparent={false}
            visible={this.state.signupVisible}
          >
            <View>
              <TouchableHighlight
                style={{marginTop: 50}}
                onPress={() => this.setModalVisible(!this.state.signupVisible)}
              >
                <Text>Close</Text>
              </TouchableHighlight>

              <Text>Please fill out the entire form to create an account.</Text>
              <Text>Email</Text>
              <TextInput placeholder="Email" onChangeText={(text) => this.setState({ email: text })}/>
              <Text>Username</Text>
              <TextInput placeholder="Username" onChangeText={(text) => this.setState({ signupUsername: text })}/>
              <Text>Password</Text>
              <TextInput placeholder="Password" onChangeText={(text) => this.setState({ signupPassword: text })}/>
              <TouchableHighlight onPress={() => this.setState({ passwordHidden: !this.state.passwordHidden })}>
                <Text>{this.state.passwordHidden ? 'Show Password' : 'Hide Password'}</Text>
              </TouchableHighlight>
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
