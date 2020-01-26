import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import AppNavigator from "./navigation/AppNavigator";
import Constants from "expo-constants";


export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        {Platform.OS === "ios" && <StatusBar barStyle="default" />}
        <AppNavigator/>
       </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight
  }
});