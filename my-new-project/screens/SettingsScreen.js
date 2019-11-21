import React from 'react';
// import { ExpoConfigView } from '@expo/samples';

import {View} from 'react-native';
import Queries from '../components/Queries.js';
import HeaderButton from '../components/SignOutButton.js'


export default function SettingsScreen() {
  /**
   * Go ahead and delete ExpoConfigView and replace it with your content;
   * we just wanted to give you a quick view of your config.
   */
  //return <ExpoConfigView />;

  return (
    <View>
      <Queries/>
    </View>
  );
}

SettingsScreen.navigationOptions = {
  title: 'Add Medication',
  headerStyle: {
     backgroundColor: '#0099ff',
   },
  headerTintColor: '#ccffff',
  headerTitleStyle: {
     fontSize: 25,
   },
   headerLeft: <HeaderButton />
};
