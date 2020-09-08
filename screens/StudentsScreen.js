import React, { Component } from "react";

import {
  ScrollView,
  StyleSheet,
  Dimensions,
  View,
  TouchableOpacity,
  Text,
  } from "react-native";

import { LinearGradient } from 'expo-linear-gradient'
import { host } from '../constants/Host'

import axios from 'axios'

const screenW = Math.round(Dimensions.get('window').width);

export default class StudentsScreen extends Component {

  state = {
    group_name: this.props.navigation.state.params.group_name,
    students: [...Array(15).keys()].map((key) => {return `Студент ${key+1}`}),
    isWaitingResponse: false,
  }
  // componentDidMount() {
  //   axios.get(`${host}/groups/${this.state.group_name}/students`)
  //     .then(response => this.setState({
  //       students: response.data, 
  //       isWaitingResponse: false,
  //     }))
  // }
  // for commit
  render() {
    return (
      <LinearGradient
        colors={['#212D3A', '#212D3A']}
        style={styles.container}
      >
        <Text style={styles.label}>{`Студенты ${this.state.group_name}`}</Text>
        <View style={styles.scrollView}>
          <ScrollView
            contentContainerStyle={styles.scrollViewContent}
          >
            {
              this.state.isWaitingResponse ?
              [...Array(15).keys()].map((student, index) => 
                <View
                  key={index} 
                  style={[styles.studentContainButton, {flex: 1, elevation: 0}]}
                >
                  <View 
                    style={{
                      alignSelf: 'center',
                      backgroundColor: '#9DA7EE', 
                      height: Math.round(screenW * 0.055), 
                      width: Math.round(screenW * 0.8), 
                      opacity: 0.4,
                      borderRadius: 5,
                      marginVertical: Math.round(screenW * 0.03),
                    }}
                  />
                </View>) :
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
                    {student}
                  </Text>
                </TouchableOpacity>
                )
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
    shadowColor: "#212D3A",
    shadowOpacity: 0.28,
    shadowOffset: {
      width: 2,
      height: 4,
    },
    elevation: 4,
  },
  studentName: {
    marginLeft: Math.round(screenW / 23),
    marginVertical: Math.round(screenW * 0.03),
    fontSize: 15,
    lineHeight: 20,
    color: '#212D3A',
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