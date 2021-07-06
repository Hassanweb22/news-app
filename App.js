import React from 'react';

import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import TopBarNavigator from './src/Navigators/TopBarNavigator/TopBarNavigator';

import { Container, Header, Content, Tab, Tabs, Left, Title, Right, Button, Body } from 'native-base';
import Icon from "react-native-vector-icons/FontAwesome"


const App = () => {

  return (
    // <SafeAreaView style={{ flex: 1 }}>
    //   <StatusBar barStyle={'light-content'} backgroundColor="green" />
    // </SafeAreaView>
    <TopBarNavigator />
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
