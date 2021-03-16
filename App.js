import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import AppNavigator from "./navigation/AppNavigator";
import { AppLoading } from "expo";
import * as Font from "expo-font";

import NetInfo from "@react-native-community/netinfo";

export default class App extends Component {
  state = {
    assetsLoaded: false,
    isConnected: true,
  };

  handleConnectionChange = (isConnected) => {
    this.setState({ isConnected });
  };

  componentDidMount() {
    NetInfo.addEventListener(this.handleConnectionChange);
  }

  render() {
    if (!this.state.assetsLoaded) {
      return (
        <AppLoading
          startAsync={this._loadFontsAsync}
          onFinish={() => this.setState({ assetsLoaded: true })}
        />
      );
    } else {
      return (
        <View style={styles.container}>
          <AppNavigator />
          {!this.state.isConnected ? (
            <View style={{ backgroundColor: "red" }}>
              <Text style={{ textAlign: "center" }}>
                Нет соединения с сервером!
              </Text>
            </View>
          ) : null}
        </View>
      );
    }
  }
  async _loadFontsAsync() {
    return await Font.loadAsync({
      "SF-UI-Text": require("./assets/fonts/SFUIText-Regular.ttf"),
      "SF-PRO-Text": require("./assets/fonts/SFProDisplay-Regular.ttf"),
    });
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
