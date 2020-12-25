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
  StyleSheet
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import Fetch from './Fetch';

const App: () => React$Node = () => {
  return (
    <>
      <SafeAreaView>
        <Fetch/>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({

});

export default App;
