import React, { Component, useState } from 'react';
import { Platform, StyleSheet, StatusBar, View } from 'react-native';
import AppNavigator from "./navigation/AppNavigator";
import Constants from "expo-constants";
import { AppLoading } from 'expo';  
import * as Font from 'expo-font';

export default class App extends Component {

  state = {
    assetsLoaded: false,
  };

  render() {
    if (!this.state.assetsLoaded) {
      return (
        <AppLoading
          startAsync={this._loadFontsAsync}
          onFinish={() => this.setState({assetsLoaded: true})}
        />
      )
    }
    else {
      return (
        <View style={styles.container}>
          {Platform.OS === "ios" && <StatusBar barStyle="default" />}
          <AppNavigator />
      </View>
      )
    }


  }
  async _loadFontsAsync() {
    return await Font.loadAsync({
      'SF-UI-Text': require('./assets/fonts/SFUIText-Regular.ttf'),
    });
  }
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight
  }
});