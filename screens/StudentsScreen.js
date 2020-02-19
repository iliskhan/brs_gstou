import React, { Component } from "react";

import {
  FlatList,
  ScrollView,
  StyleSheet,
  Dimensions,
  View,
  TouchableOpacity,
  Text,
  Image,
  } from "react-native";

import { LinearGradient } from 'expo-linear-gradient'
import { images } from '../constants/Images'
import PointsScreen from "./PointsScreen";

const screenW = Math.round(Dimensions.get('window').width);  
const screenH = Math.round(Dimensions.get('window').height);

export default class StudentsScreen extends Component {

  state = {
    group_name: this.props.navigation.state.params.group_name,
    students: this.props.navigation.state.params.students,
  }
  // componentDidMount() {
  //   console.log(this.state)
  // }

  render() {
    return (
      <LinearGradient
        colors={['#7B88D3', '#5B4CAB']}
        style={styles.container}
      >
        <Text style={styles.groupLabel}>
          {`Студенты группы ${this.state.group_name}`}
        </Text>
        <ScrollView
          contentContainerStyle={styles.scrollStyle}>
          {this.state.students.map( (student, index) => 
            <TouchableOpacity 
              key={index}
              style={styles.studentContainButton}
              onPress={() => this.props.navigation.navigate(
                'PointsScreen', 
                {
                  student,
                },
              )}
            >
              <Text>{student}</Text>
            </TouchableOpacity>
            ) 
          }
        </ScrollView>
      </LinearGradient>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    
    paddingTop: Math.floor(screenW / 7),
    flex: 1,
    backgroundColor: '#E5E5E5',
  },
  groupLabel: {
    marginTop: '2.5%',
    fontFamily: 'SF-UI-Text',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 15,
    lineHeight: 22,
    letterSpacing: -0.41,
    color: 'white',
    textAlign: 'center',
  },
  studentContainButton: {
    marginHorizontal: '2%',
    marginVertical: '3%',
    paddingLeft: '3%',
    backgroundColor: 'white',
    borderRadius: 5,
    opacity: 0.5,
  },
  scrollStyle: {
    // height: '100%',
    // backgroundColor: 'black',
  }
})