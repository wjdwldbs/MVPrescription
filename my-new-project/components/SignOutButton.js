import React from 'react';
import { Platform, Button, TouchableHighlight, Alert } from 'react-native';

import {Ionicons} from '@expo/vector-icons'
import AlertDetail from './AlertDetail';

export default class HeaderButton extends React.Component{
  constructor(props) {
    super(props);

  }

  render() {
    return(
      <TouchableHighlight onPress={() => {
        Alert.alert(
          'Are you sure you want to sign out?',
          '',
          [
            { text: 'Yes', onPress: () => this.props.navigation.navigate('Auth') },
            { text: 'Cancel' }
          ]
        )
      }}>
        <Ionicons
          name={Platform.OS=== 'ios' ? 'ios-log-out' : 'md-log-out'}
          size={35}
          style={{marginLeft: 10}}
          color='#ccffff'
          />
       </TouchableHighlight>
    )    
  }

  }
