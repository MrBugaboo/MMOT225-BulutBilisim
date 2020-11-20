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
  TextInput,
  Button,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.safearea}>
      <View style={styles.body}>

        <View style={styles.girdi}>
          <View style={styles.sol}><Text style={styles.text}>Ad:</Text></View>
          <View style={styles.sag}><TextInput style={styles.inputlar}></TextInput></View>
        </View>


        <View style={styles.girdi}>
          <View style={styles.sol}><Text style={styles.text}>Soyad:</Text></View>
          <View style={styles.sag}><TextInput style={styles.inputlar}></TextInput></View>
        </View>


        <View style={styles.girdi}>
          <View style={styles.sol}><Text style={styles.text}>Yaş:</Text></View>
          <View style={styles.sag}><TextInput style={styles.inputlar}></TextInput></View>
        </View>


        <View style={styles.girdi}>
          <View style={styles.sol}><Text style={styles.text}>E-Posta:</Text></View>
          <View style={styles.sag}><TextInput style={styles.inputlar}></TextInput></View>
        </View>


        <View style={styles.girdi}>
          <View style={styles.sol}><Text style={styles.text}>Şifre:</Text></View>
          <View style={styles.sag}><TextInput style={styles.inputlar}></TextInput></View>
        </View>


        <View style={styles.girdi}>
          <View style={styles.sol}><Text style={styles.text}>Şifre Tekrar:</Text></View>
          <View style={styles.sag}><TextInput style={styles.inputlar}></TextInput></View>
        </View>


        <View style={styles.girdi}>
          <View style={styles.sol}></View>
          <View style={styles.sag}><Button title="Kaydet"/></View>
        </View>

        <View style={styles.body}></View>

      </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  body:{
    flex:1,
    flexDirection:'column'
  },
  girdi:{
    flex:1,
    flexDirection:'row'
  },
  inputlar:{
    height:50,
    borderWidth:1
  },
  safearea:{
    flex:1
  },
  sol:{flex:1},
  sag:{flex:1},
  text:{
    fontSize: 20,
    fontWeight: "bold"
  }
});

export default App;
