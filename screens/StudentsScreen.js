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
import { host } from '../constants/Host'

import axios from 'axios'

import PointsScreen from "./PointsScreen";

const screenW = Math.round(Dimensions.get('window').width);  
const screenH = Math.round(Dimensions.get('window').height);

export default class StudentsScreen extends Component {

  state = {
    group_name: this.props.navigation.state.params.group_name,
    // students: this.props.navigation.state.params.students,
    students: undefined,
  }
  componentDidMount() {
    axios.get(`${host}/groups/${this.state.group_name}/students`)
      .then(response => this.setState({students: response.data}))
  }

  render() {
    return (
      <LinearGradient
        colors={['#7B88D3', '#5B4CAB']}
        style={styles.container}
      >
        <Text style={styles.label}>{`Студенты ${this.state.group_name}`}</Text>
        <View style={styles.scrollView}>
          <ScrollView
            contentContainerStyle={styles.scrollViewContent}
          >
            {this.state.students ?
            this.state.students.map((student, index) => 
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
              <Text
                style={styles.studentName}
              >
                {student[0]}
              </Text>
            </TouchableOpacity>
            ) :
            null
            }
        </ScrollView>
        </View>
      </LinearGradient>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Math.floor(screenW / 5),
    backgroundColor: '#E5E5E5',
  },
  label: {
    color: '#FCFCFF',
    fontFamily: 'SF-PRO-Text',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 34,
    letterSpacing: 0.41,
    marginLeft: '5%',
    marginBottom: Math.round(screenW/20),
  },
  studentContainButton: {
    marginHorizontal: Math.round(screenW/30),
    marginVertical: Math.round(screenW/50),
    backgroundColor: '#FCFCFF',
    borderRadius: 6,
    shadowColor: "rgba(123, 136, 211, 0.28)",
    shadowOpacity: 0.28,
    // shadowRadius: 16,
    shadowOffset: {
      width: 4,
      height: 8,
    },
    elevation: 4,
  },
  studentName: {
    marginLeft: Math.round(screenW / 23),
    marginVertical: Math.round(screenW/ 25),
    fontSize: 15,
    lineHeight: 20,
    color: '#7B88D3',
  },
  scrollView: {
    flex: 1,
    backgroundColor: '#EEF0FF',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  scrollViewContent: {
    flexGrow: 1,
    marginHorizontal: '2%',
    paddingTop: Math.round(screenW/37),
    
  },
})