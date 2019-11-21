import React from 'react';
import { Platform , Button} from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';

const config = Platform.select({
  web: { headerMode: 'float' },
  default: {},
});

const LinksStack = createStackNavigator(
  {
    Links: LinksScreen,
  },
  config
);

LinksStack.navigationOptions = {
  tabBarLabel: 'Alerts',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-notifications-outline' : 'md-notifications'} />
  ),

};

LinksStack.path = '';

const SettingsStack = createStackNavigator(
  {
    Settings: SettingsScreen,
  },
  config
);

SettingsStack.navigationOptions = {
  tabBarLabel: 'Add Meds',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-medkit' : 'md-medkit'}/>
  ),
};

SettingsStack.path = '';


const tabNavigator = createBottomTabNavigator({
  // HomeStack,
  LinksStack,
  SettingsStack
}, {tabBarOptions: {
   activeTintColor: '#ccffff',
  inactiveTintColor: '#00bbee',
  inactiveBackgroundColor: '#e6ffff',
  activeBackgroundColor: '#0099ff',
  labelStyle: {
    fontSize: 25,
  },
  allowFontScaling:true,
  style:{
    height:100
  }
}});



tabNavigator.path = '';

export default tabNavigator;
