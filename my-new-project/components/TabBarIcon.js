import React from 'react';
import { Ionicons } from '@expo/vector-icons';

import Colors from '../constants/Colors';

export default function TabBarIcon(props) {
  return (
    <Ionicons
      name={props.name}
      size={50}
      style={{ marginBottom: -3 }}
      color={props.focused ? '#00bbee' : '#ccffff'}
    />
  );
}
