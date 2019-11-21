import React from 'react';
import { Platform, Button, TouchableHighlight } from 'react-native';

import {Ionicons} from '@expo/vector-icons'

export default function HeaderButton(){
    return(
      <TouchableHighlight onPress={() => alert('This is a button!')}>
        <Ionicons
          name={Platform.OS=== 'ios' ? 'ios-log-out' : 'md-log-out'}
          size={25}
          style={{marginLeft: 10}}
          color='#000000'
          />
       </TouchableHighlight>
    )
  }
