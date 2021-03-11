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

import { host } from "../../constants/Host";
import { LinearGradient } from "expo-linear-gradient";
import { DetailedPoints } from "../../components/DetailedPoints";

const screenW = Math.round(Dimensions.get("window").width);

export default class PointsScreen extends Component {
  state = {
    student: this.props.navigation.state.params.student,
    data: undefined,
    openCards: [],
  };

  cardsDeleter = (item) => {
    let arr = this.state.openCards;
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] === item) {
        arr.splice(i, 1);
      }
    }
    return arr;
  };

  componentDidMount() {
    axios
      .get(`${host}/students/${this.state.student[1]}/points`)
      .then((response) => this.setState({ data: response.data }));
  }

  render() {
    return (
      <LinearGradient colors={["#7B88D3", "#5B4CAB"]} style={styles.container}>
        <Text style={styles.label}>Баллы</Text>
        <View style={styles.scrollView}>
          <ScrollView contentContainerStyle={styles.scrollViewContent}>
            {this.state.data
              ? this.state.data.map((dataItem, idx) => (
                  <TouchableOpacity
                    key={idx}
                    style={
                      !this.state.openCards.includes(idx)
                        ? styles.pointsCard
                        : [styles.pointsCard, { backgroundColor: "#7B88D3" }]
                    }
                    onPress={() => {
                      if (!this.state.openCards.includes(idx)) {
                        this.setState((state) => {
                          return { openCards: [...state.openCards, idx] };
                        });
                      } else {
                        this.setState(() => {
                          return { openCards: this.cardsDeleter(idx) };
                        });
                      }
                    }}
                  >
                    <View
                      style={{
                        flex: 1,
                        flexDirection: "row",
                      }}
                    >
                      <View
                        style={{
                          flex: 2,
                          width: Math.round(screenW / 1.5),
                          marginTop: Math.round(screenW / 34),
                        }}
                      >
                        <Text
                          style={
                            dataItem.disciplineType === "Экзамен"
                              ? styles.disciplineType
                              : [styles.disciplineType, { color: "#C0C6FE" }]
                          }
                        >
                          {dataItem.disciplineType.toUpperCase()}
                        </Text>
                        <Text
                          style={
                            !this.state.openCards.includes(idx)
                              ? styles.disciplineName
                              : [styles.disciplineName, { color: "#FCFCFF" }]
                          }
                        >
                          {dataItem.disciplineName}
                        </Text>
                      </View>
                      <View style={styles.pointsCircle}>
                        <Text style={styles.points}>{dataItem.points}</Text>
                      </View>
                    </View>
                    {this.state.openCards.includes(idx) ? (
                      <View
                        style={{
                          flexDirection: "row",
                          justifyContent: "space-between",
                          marginTop: Math.round(screenW / 25),
                          paddingHorizontal: Math.round(screenW / 20),
                        }}
                      >
                        {dataItem.detailed.map((detailedItem, idx) => (
                          <View key={idx}>
                            <Text
                              style={
                                (styles.disciplineType,
                                {
                                  color: "#C0C6FE",
                                  marginBottom: Math.round(screenW / 37),
                                })
                              }
                            >
                              {idx + 1}-Я АТТЕСТАЦИЯ
                            </Text>

                            <DetailedPoints
                              description={"Посещаемость"}
                              data={detailedItem.attendance}
                              styles={styles}
                            />
                            <DetailedPoints
                              description={"Текущая атт."}
                              data={detailedItem.currentCertification}
                              styles={styles}
                            />
                            <DetailedPoints
                              description={"Рубежная атт."}
                              data={detailedItem.midtermCertification}
                              styles={styles}
                            />
                            <DetailedPoints
                              description={"Самост. работа"}
                              data={detailedItem.independentWork}
                              styles={styles}
                            />
                          </View>
                        ))}
                      </View>
                    ) : null}
                  </TouchableOpacity>
                ))
              : [...Array(15).keys()].map((item) => (
                  <View
                    key={item}
                    style={[
                      styles.pointsCard,
                      { height: Math.round(screenW * 0.267), elevation: 0 },
                    ]}
                  >
                    <View style={{ flex: 1, flexDirection: "row" }}>
                      <View
                        style={{
                          flex: 2,
                          marginTop: Math.round(screenW * 0.045),
                        }}
                      >
                        <View
                          style={{
                            width: Math.round(screenW * 0.2),
                            height: Math.round(screenW * 0.045),
                            backgroundColor: "#C0C6FE",
                            marginLeft: Math.round(screenW / 20),
                          }}
                        />
                        <View
                          style={{
                            width: Math.round(screenW * 0.5),
                            height: Math.round(screenW * 0.05),
                            marginTop: Math.round(screenW * 0.02),
                            marginLeft: Math.round(screenW / 20),
                            backgroundColor: "#6D74CD",
                          }}
                        />
                      </View>
                      <View style={[styles.pointsCircle]} />
                    </View>
                  </View>
                ))}
          </ScrollView>
        </View>
      </LinearGradient>
    );
  }
}
