import axios from "axios";
import { styles } from "./Styles";
import React, { Component } from "react";

import {
  Text,
  View,
  Image,
  FlatList,
  Dimensions,
  ScrollView,
  TouchableOpacity,
} from "react-native";

import { host } from "../../constants/Host";
import { images } from "../../constants/Images";
import { LinearGradient } from "expo-linear-gradient";
import { institutesNames, courses } from "../../constants/Institutes";

const screenW = Math.round(Dimensions.get("window").width);

export default class GroupsScreen extends Component {
  state = {
    group_name: undefined,
    selected_course: 1,
    isWaitingResponse: true,
    groups_names: undefined,
    inst_name: institutesNames[2],
    courses: [...Array(courses).keys()].map((i) => ++i),
  };

  getGroups = () => {
    axios
      .get(
        `${host}/institutes/${this.state.inst_name.toLowerCase()}/course/${
          this.state.selected_course
        }`
      )
      .then((response) =>
        this.setState({
          groups_names: response.data,
          isWaitingResponse: false,
        })
      );
  };

  changeScreen = (group_name) => {
    this.setState({ group_name }, () =>
      this.props.navigation.navigate("StudentsScreen", {
        group_name,
      })
    );
  };
  componentDidMount() {
    this.getGroups();
  }

  render() {
    return (
      <LinearGradient colors={["#243240", "#233344"]} style={styles.container}>
        <View>
          <Text
            style={[
              styles.selection_text,
              { marginTop: Math.round(screenW / 20) },
            ]}
          >
            Выберите институт
          </Text>
          <FlatList
            style={{ paddingVertical: Math.round(screenW / 20) }}
            horizontal={true}
            ref={(ref) => {
              this.flatListRef = ref;
            }}
            showsHorizontalScrollIndicator={false}
            initialScrollIndex={0.5}
            data={institutesNames}
            keyExtractor={(item) => item}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() => {
                  this.setState(
                    {
                      inst_name: item,
                      isWaitingResponse: true,
                    },
                    this.getGroups
                  );
                }}
                style={
                  this.state.inst_name == item
                    ? styles.selected_button
                    : styles.not_selected_button
                }
              >
                <Image
                  source={images.inst_logos[item]}
                  style={
                    this.state.inst_name == item
                      ? styles.logo_styles
                      : [styles.logo_styles, { opacity: 0.25 }]
                  }
                />
                <Text
                  style={
                    this.state.inst_name == item
                      ? styles.selected_button_text
                      : styles.not_selected_button_text
                  }
                >
                  {item}
                </Text>
              </TouchableOpacity>
            )}
          />
        </View>

        <View style={styles.courses}>
          <Text style={styles.selection_text}>Выберите курс</Text>
          <View style={{ flex: 1, justifyContent: "center" }}>
            <View style={styles.course_selector}>
              {this.state.courses.map((course) => (
                <TouchableOpacity
                  key={course}
                  onPress={() => {
                    this.setState(
                      {
                        selected_course: course,
                        isWaitingResponse: true,
                      },
                      this.getGroups
                    );
                  }}
                  style={
                    this.state.selected_course == course
                      ? styles.courses_button_selected
                      : styles.courses_button
                  }
                >
                  <Text
                    style={
                      this.state.selected_course == course
                        ? [styles.courses_text, { color: "white" }]
                        : styles.courses_text
                    }
                  >
                    {course}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        </View>

        <View style={styles.groups}>
          <Text style={styles.selection_text}>Выберите группу</Text>
          <ScrollView contentContainerStyle={styles.group_selector}>
            {this.state.isWaitingResponse
              ? [...Array(8).keys()].map((i) => (
                  <View key={i} style={[styles.group_button, { elevation: 0 }]}>
                    <View
                      style={{
                        backgroundColor: "#2e5075",
                        height: "30%",
                        width: "75%",
                        opacity: 0.4,
                        borderRadius: 5,
                      }}
                    />
                  </View>
                ))
              : this.state.groups_names.map((group_name, key) => (
                  <TouchableOpacity
                    key={key}
                    onPress={() => this.changeScreen(group_name)}
                    style={styles.group_button}
                  >
                    <Text
                      style={[
                        styles.not_selected_button_text,
                        { color: "white" },
                      ]}
                    >
                      {group_name}
                    </Text>
                  </TouchableOpacity>
                ))}
          </ScrollView>
        </View>
      </LinearGradient>
    );
  }
}
