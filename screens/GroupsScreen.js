import React, { Component } from "react";

import {
  ScrollView,
  StyleSheet,
  Dimensions,
  View,
  Button,
  TouchableOpacity,
  Text,
   } from "react-native";

import { LinearGradient } from 'expo-linear-gradient'

const screenW = Math.round(Dimensions.get('window').width);  
const screenH = Math.round(Dimensions.get('window').height);

const institutes_names = ['ИПИТ', 'ИНГ', 'ИЭ', 'ИСАД', 'ИЦЭТП']
const courses = 4

export default class GroupsScreen extends Component {

  state = {
    selected_course: 1,
    inst_name: institutes_names[0],
    courses: [...Array(courses).keys()].map(i => ++i)
  }

  render() {
    return (
      <LinearGradient 
        colors={['#7B88D3', '#5B4CAB']}
        style={styles.container}
      >
        <View>
          <Text style={styles.selection_text}> Выберите институт </Text>
          <ScrollView 
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.institute_selector}
          >
            {institutes_names.map((name, key) => 
              <TouchableOpacity
                key={key}
                onPress={() => {
                  this.setState({
                    inst_name : name,
                  }, () => {console.log(this.state)})
                }}
                style={[(this.state.inst_name == name) ? styles.selected_button: styles.not_selected_button]}
              >
                <Text style={[(this.state.inst_name == name) ? styles.selected_button_text: styles.not_selected_button_text]}> 
                  {name} 
                </Text>
              </TouchableOpacity>
            )}
          </ScrollView>
        </View>
        
        <View style={styles.courses}>
          <Text style={styles.selection_text}> 
            Выберите курс 
          </Text>
          <View style={styles.course_selector}>
            { this.state.courses.map(course => 
            <TouchableOpacity
              key={course}
              onPress={() => {
                this.setState({
                  selected_course: course,
                })
              }}
              style={[(this.state.selected_course == course) ? styles.courses_button_selected: styles.courses_button]}>
                <Text 
                key={course} 
                style={styles.courses_text}>
                  {course}
              </Text>
              {/* <View style={{flex:1 ,backgroundColor: 'black'}}></View> */}
            </TouchableOpacity>) }
          </View>

        </View>

        <View
          style={styles.groups}
        >
          <Text style={styles.selection_text}> 
            Выберите группу
          </Text>
        </View>
      </LinearGradient>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E5E5E5',
  },
  courses: {
    flex: 1,
    // justifyContent: 'center',
    // backgroundColor: 'black',
  },
  groups: {
    flex: 4,
  },
  selection_text: {
    padding: '6%',
    color: '#C0C6FE',
    letterSpacing: -0.40,
    lineHeight: 22,
    fontWeight: "500",
    fontSize: 14,
  },
  institute_selector: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  course_selector: {
    // flex: 1,
    height: Math.round(screenH/25),
    marginHorizontal: '5%',
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row',
    backgroundColor: "#7B88D3",
    borderRadius: 8,
  },
  courses_text: {
    color: '#9DA7EE',
  },
  courses_button: {
    flex: 1,
    alignItems: 'center',
    // backgroundColor: 'black',

  },
  courses_button_selected: {
    flex: 1,
    paddingVertical: '0.7%',
    alignItems: 'center',
    backgroundColor: '#C0C6FE',
    borderRadius: 7,

  },
  not_selected_button: {
    backgroundColor: '#7B88D3',
    borderRadius: 10,
    height:Math.round(screenW/4.5),
    width: Math.round(screenW/4.5),
    marginHorizontal: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  not_selected_button_text: {
    color: '#9DA7EE',
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: 22,
  },
  selected_button: {
    backgroundColor: '#9DA7EE',
    borderRadius: 10,
    height:Math.round(screenW/4.5),
    width: Math.round(screenW/4.5),
    marginHorizontal: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  selected_button_text: {
    color: '#FCFCFF',
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: 22,
  }
})