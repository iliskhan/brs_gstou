import axios from "axios";
import React, { Component } from "react";
import { styles } from "./Styles";

import {
  View,
  Text,
  ScrollView,
  Dimensions,
  TouchableOpacity,
} from "react-native";

import { LinearGradient } from "expo-linear-gradient";
import { host } from "../../constants/Host";

const screenW = Math.round(Dimensions.get("window").width);

export default class StudentsScreen extends Component {
  state = {
    group_name: this.props.navigation.state.params.group_name,
    students: undefined,
    isWaitingResponse: true,
  };
  componentDidMount() {
    axios
      .get(`${host}/groups/${this.state.group_name}/students`)
      .then((response) =>
        this.setState({
          students: response.data,
          isWaitingResponse: false,
        })
      );
  }

  render() {
    return (
      <LinearGradient colors={["#212D3A", "#212D3A"]} style={styles.container}>
        <Text style={styles.label}>{`Студенты ${this.state.group_name}`}</Text>
        <View style={styles.scrollView}>
          <ScrollView contentContainerStyle={styles.scrollViewContent}>
            {this.state.isWaitingResponse
              ? [...Array(15).keys()].map((student, index) => (
                  <View
                    key={index}
                    style={[
                      styles.studentContainButton,
                      { flex: 1, elevation: 0 },
                    ]}
                  >
                    <View
                      style={{
                        alignSelf: "center",
                        backgroundColor: "#bdbdbd",
                        height: Math.round(screenW * 0.055),
                        width: Math.round(screenW * 0.8),
                        opacity: 0.4,
                        borderRadius: 5,
                        marginVertical: Math.round(screenW * 0.03),
                      }}
                    />
                  </View>
                ))
              : this.state.students.map((student, index) => (
                  <TouchableOpacity
                    key={index}
                    style={styles.studentContainButton}
                    onPress={() =>
                      this.props.navigation.navigate("PointsScreen", {
                        student,
                      })
                    }
                  >
                    <Text style={styles.studentName}>{student[0]}</Text>
                  </TouchableOpacity>
                ))}
          </ScrollView>
        </View>
      </LinearGradient>
    );
  }
}
