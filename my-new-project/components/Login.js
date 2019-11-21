import React from 'react';
import { Modal, View, Text, TextInput, TouchableHighlight, StyleSheet } from 'react-native';
import axios from 'axios';
const styles =StyleSheet.create({
    text:{
      fontSize:25,
      textDecorationLine: 'underline',
      paddingLeft:10
    },
    smallText:{
      fontSize:20,
      fontStyle: 'italic',
      color: '#6e6e6e',
      paddingLeft:10
    },
    input:{
      fontSize:22,
      paddingLeft:10
    },
    button: {
      height:35,
      width: 200,
      backgroundColor: '#00aaff',
      borderRadius: 10,
      marginLeft:10
    },
    activetext: {
      marginTop:4,
      textAlignVertical:'center',
      textAlign:'center',
      color: '#ffffff',
      fontSize:20,
      paddingLeft:10
    }
})
export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
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
    this.setState({modalVisible: visible});
  }

  createNewUser() {
    console.log(this.state);
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
          loginPassword: this.state.signupPassword
        })
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
      .then((response) => {
        if (response.data.password === password) {
          this.props.navigation.navigate('Main');
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
      <View >
      <View style={{height:100, backgroundColor: '#00aaff'}}>
        <Text style={{marginTop: 50, fontSize: 25, fontWeight: 'bold', color: '#ffffff', textAlign:'center'}}>Log in</Text>
      </View>
        <Text style={styles.text}>Username:</Text>
        <TextInput style={styles.input} autoCapitalize="none" placeholder="username" onChangeText={(text) => this.setState({ loginUsername: text })}/>

        <Text style={styles.text}>Password:</Text>
        <TextInput style={styles.input} autoCapitalize="none" placeholder="password" onChangeText={(text) => this.setState({ loginPassword: text })}/>
        {/* <TouchableHighlight onPress={() => this.props.navigation.navigate('Main')}> */}
        <TouchableHighlight onPress={() => this.verifyUser(this.state.loginUsername, this.state.loginPassword)} style= {styles.button}>
          <Text style={styles.activetext}>Log In</Text>
        </TouchableHighlight>

        <View>
          <Text style={styles.smallText}>Don't have an account?</Text>
          <TouchableHighlight onPress={() => this.setModalVisible(!this.state.modalVisible)} style= {styles.button}>
            <Text  style={styles.activetext}>Sign up!</Text>
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
              <TextInput placeholder="Email" onChangeText={(text) => this.setState({ email: text })}/>
              <Text>Username</Text>
              <TextInput placeholder="Username" onChangeText={(text) => this.setState({ signupUsername: text })}/>
              <Text>Password</Text>
              <TextInput placeholder="Password" onChangeText={(text) => this.setState({ signupPassword: text })}/>
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
