import axios from "axios";

import React, { Component } from "react";

import {
  Text,
  View,
  Image,
  FlatList,
  StyleSheet,
  Dimensions,
  ScrollView,
  TouchableOpacity,
} from "react-native";

import { host } from "../../constants/Host";
import { images } from "../../constants/Images";
import { LinearGradient } from "expo-linear-gradient";
import { institutesNames } from "../../constants/Institutes";

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
      <LinearGradient colors={["#7B88D3", "#5B4CAB"]} style={styles.container}>
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
                        backgroundColor: "#9DA7EE",
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

const styles = StyleSheet.create({
  container: {
    paddingTop: Math.round(screenW / 5),
    flex: 1,
    backgroundColor: "#E5E5E5",
  },
  courses: {
    flex: 1,
  },
  groups: {
    flex: 5,
  },
  selection_text: {
    paddingLeft: "6%",
    color: "#C0C6FE",
    letterSpacing: -0.4,
    lineHeight: 22,
    fontWeight: "500",
    fontSize: 14,
  },
  logo_styles: {
    width: 32,
    height: 32,
  },
  institute_selector: {
    flexDirection: "row",
    alignItems: "center",
  },
  course_selector: {
    height: Math.round(screenW / 12.5),
    marginHorizontal: "4%",
    alignItems: "center",
    justifyContent: "space-around",
    flexDirection: "row",
    backgroundColor: "#7B88D3",
    borderRadius: 8,
  },
  group_selector: {
    paddingVertical: Math.round(screenW / 25),
    flexGrow: 1,
    paddingLeft: Math.round(screenW / 22.5),
    flexDirection: "row",
    flexWrap: "wrap",
  },
  group_button: {
    opacity: 0.4,
    marginRight: Math.round(screenW / 20),
    marginBottom: Math.round(screenW / 25),
    backgroundColor: "#7B88D3",
    borderRadius: 10,
    height: Math.round(screenW / 4 / 1.5),
    width: Math.round(screenW / 3.75),
    justifyContent: "center",
    alignItems: "center",
  },
  selected_group_button: {
    marginBottom: "4%",
    backgroundColor: "#C0C6FE",
    borderRadius: 10,
    height: Math.round(screenW / 4 / 1.5),
    width: Math.round(screenW / 3.75),
    justifyContent: "center",
    alignItems: "center",
  },
  courses_text: {
    color: "#9DA7EE",
  },
  courses_button: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
  },
  courses_button_selected: {
    flex: 1,
    height: "85%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#C0C6FE",
    borderRadius: 7,
  },
  not_selected_button: {
    backgroundColor: "#7B88D3",
    borderRadius: 10,
    height: Math.round(screenW / 4.5),
    width: Math.round(screenW / 4.5),
    marginHorizontal: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  not_selected_button_text: {
    color: "#9DA7EE",
    fontFamily: "SF-UI-Text",
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: "500",
    lineHeight: 22,
  },
  selected_button: {
    backgroundColor: "#9DA7EE",
    borderRadius: 10,
    height: Math.round(screenW / 4.5),
    width: Math.round(screenW / 4.5),
    marginHorizontal: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  selected_button_text: {
    color: "#FCFCFF",
    fontFamily: "SF-UI-Text",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: 16,
    lineHeight: 22,
  },
});
