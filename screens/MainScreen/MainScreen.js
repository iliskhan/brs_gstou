import React, { Component } from "react";

import { styles } from "./Styles";

import { images } from "../../constants/Images";

import { View, Text, Image, TouchableOpacity } from "react-native";

export default class MainScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.image}>
          <Image
            source={images.ggntu_logo}
            style={{ width: 174, height: 174 }}
          />
        </View>
        <View style={styles.buttons}>
          <TouchableOpacity
            style={styles.buttonView}
            onPress={() =>
              this.props.navigation.navigate({ routeName: "GroupsScreen" })
            }
          >
            <Text style={styles.textStyle}>БРС</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonView}>
            <Text style={styles.textStyle}>Расписание</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
