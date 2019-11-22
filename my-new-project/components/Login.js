import React from 'react';
import { Modal, View, Text, TextInput, TouchableHighlight, StyleSheet } from 'react-native';
import axios from 'axios';
import Queries from './Queries.js'

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
      paddingLeft:10,
      marginBottom:5
    },
    button: {
      height:35,
      width: 200,
      backgroundColor: '#00aaff',
      borderRadius: 10,
      marginLeft:10,
      marginTop:10
    },
    activetext: {
      marginTop:4,
      textAlignVertical:'center',
      textAlign:'center',
      color: '#ffffff',
      fontSize:20,
      paddingLeft:10
    },
    toggle: {
      width: 150,
      height: 25,
      backgroundColor: '#bbbbbb',
      borderRadius: 10,
      marginLeft:10
    },
    toggleText: {
      paddingLeft: 10,
      fontStyle: 'italic',
      fontSize:18,
      color:'#ffffff'
    },
    body:{
      alignItems: 'center',
      flexDirection:'column'
    }
})




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
    if (!username || !password) {
      alert('Please fill out both username and password forms.');
    } else {
      axios.get('https://us-central1-mvprescription.cloudfunctions.net/api/users/all')
        .then((response) => {
          for (var i = 0; i < response.data.length; i++) {
            if (response.data[i].username === username) {
              axios.get(`https://us-central1-mvprescription.cloudfunctions.net/api/users?username=${username}`)
                .then( async (response) => {
                  if (response.data.username === username && response.data.password === password) {
                    await this.props.navigation.navigate('AuthLoading');
                    await this.props.navigation.navigate('Main');
                  } else {
                    alert('Password is incorrect. Please try again.');
                  }
                })
                .catch((err) => {
                  console.error(err)
                })
              return;
            } else {
              alert('Username does not exist. Please sign up or try again.');
              break;
            }
          }
        })
        .catch((err) => {
          console.error(err);
        })
    }
  }

  render() {
    return (
      <View>
      <View style={{ height:100, backgroundColor: '#00aaff'}}>

        <Text style={{marginTop: 50, fontSize: 25, fontWeight: 'bold', color: '#ffffff', textAlign:'center'}}>Log in</Text>
      </View>
      <View style={styles.body}>
        <Text style={styles.text}>Username:</Text>
        <TextInput style={styles.input} autoCapitalize="none" placeholder="Username" onChangeText={(text) => this.setState({ loginUsername: text })}/>

        <Text style={styles.text}>Password:</Text>
        <TextInput style={styles.input} secureTextEntry={this.state.passwordHidden} autoCapitalize="none" placeholder="Password" onChangeText={(text) => this.setState({ loginPassword: text })}/>
        <TouchableHighlight onPress={() => this.setState({ passwordHidden: !this.state.passwordHidden })} style= {styles.toggle}>
          <Text style={styles.toggleText}>{this.state.passwordHidden ? 'Show Password' : 'Hide Password'}</Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => this.verifyUser(this.state.loginUsername, this.state.loginPassword)} style= {styles.button}>
          <Text style={styles.activetext}>Log In</Text>
        </TouchableHighlight>

        <View>
          <Text style={styles.smallText}>Don't have an account?</Text>
          <TouchableHighlight onPress={() => this.setModalVisible(!this.state.modalVisible)} style= {styles.button}>
            <Text style={styles.activetext}>Sign up!</Text>
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

              <Text style={styles.text}>Please fill out the entire form to create an account.{'\n'}</Text>
              <Text style={styles.text}>Email</Text>
              <TextInput style={styles.input} placeholder="Email" onChangeText={(text) => this.setState({ email: text })}/>
              <Text style={styles.text}>Username</Text>
              <TextInput style={styles.input} placeholder="Username" onChangeText={(text) => this.setState({ signupUsername: text })}/>
              <Text style={styles.text}>Password</Text>
              <TextInput style={styles.input} placeholder="Password" onChangeText={(text) => this.setState({ signupPassword: text })}/>
              <TouchableHighlight style={styles.toggle} onPress={() => this.setState({ passwordHidden: !this.state.passwordHidden })}>
                <Text style={styles.toggleText} >{this.state.passwordHidden ? 'Show Password' : 'Hide Password'}</Text>
              </TouchableHighlight>
              <Text style={styles.text}>First Name</Text>
              <TextInput style={styles.input} placeholder="First Name" onChangeText={(text) => this.setState({ firstName: text })}/>
              <Text style={styles.text}>Last Name</Text>
              <TextInput style={styles.input} placeholder="Last Name" onChangeText={(text) => this.setState({ lastName: text })}/>

              <TouchableHighlight
                onPress={this.createNewUser}
                style= {styles.button}
              >
                <Text style={styles.activetext} >Submit</Text>
              </TouchableHighlight>
            </View>
          </Modal>
        </View>
        </View>
      </View>
    )

  }
}
