import React from 'react';
import { Ionicons } from '@expo/vector-icons';

import Colors from '../constants/Colors';

export default function TabBarIcon(props) {
  return (
    <Ionicons
      name={props.name}
      size={props.focused ? 50 : 40}
      style={{ marginBottom: -3 }}
      color={props.focused ? '#ccffff' : '#00bbee'}
    />
  );
}
