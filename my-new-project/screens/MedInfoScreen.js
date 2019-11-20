import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';

export default class MedInfoScreen extends React.Component{
  constructor(props){
    super(props);
    this.state = {};
  }
  static navigationOptions = {
    title: 'dummy'
  }
  render(){
    return (
      <ScrollView style={styles.container}>
      </ScrollView>
    );
  }
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     paddingTop: 15,
//     backgroundColor: '#fff',
//   },
// });
