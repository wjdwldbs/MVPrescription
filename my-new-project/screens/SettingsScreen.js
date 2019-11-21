import React from 'react';
// import { ExpoConfigView } from '@expo/samples';
import {View} from 'react-native';
import Queries from '../components/Queries.js';
import MedInfo from './MedInfoScreen';


export default function SettingsScreen() {
  /**
   * Go ahead and delete ExpoConfigView and replace it with your content;
   * we just wanted to give you a quick view of your config.
   */
  //return <ExpoConfigView />;

  return (
    <View>
      <MedInfo/> {/* for test purpose */}
      <Queries/>
    </View>
  );
}

SettingsScreen.navigationOptions = {
  title: 'app.json',
};
