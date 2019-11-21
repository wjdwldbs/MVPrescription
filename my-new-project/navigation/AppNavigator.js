import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import Login from '../components/Login.js';
import AuthLoading from '../components/AuthLoading.js';

export default createAppContainer(
  createSwitchNavigator({
    // You could add another route here for authentication.
    // Read more at https://reactnavigation.org/docs/en/auth-flow.html
    Main: MainTabNavigator,
    Auth: Login,
    AuthLoading: AuthLoading
  },
  {
    initialRouteName: 'Auth'
  })

);
