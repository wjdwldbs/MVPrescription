import React from 'react';
import { ScrollView, StyleSheet, Button, TouchableHighlight } from 'react-native';
// import { ExpoLinksView } from '@expo/samples';
import HeaderButton from '../components/SignOutButton.js'
import AlertScreen from '../components/AlertScreen.js';

export default function LinksScreen() {
  return (
    <ScrollView style={styles.container}>
      {/**
       * Go ahead and delete ExpoLinksView and replace it with your content;
       * we just wanted to provide you with some helpful links.
       */}
      {/* <ExpoLinksView /> */}
      <AlertScreen/>
    </ScrollView>
  );
}


LinksScreen.navigationOptions = {
  title: 'Your Reminders',
  headerStyle: {
     backgroundColor: '#0099ff',
   },
   headerTitleStyle: {
      fontSize: 25,
    },
   headerTintColor: '#ccffff',
   headerLeft: <HeaderButton />
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
