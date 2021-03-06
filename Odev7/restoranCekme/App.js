/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import Restoran from './Restoran.js';
const App: () => React$Node = () => {
  return (
    <SafeAreaView>
      <Restoran/>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({

});

export default App;
