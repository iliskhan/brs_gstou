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

const screenWidth = Math.round(Dimensions.get('window').width);  
const screenHeight = Math.round(Dimensions.get('window').height);

const institutes_names = ['ИПИТ', 'ИНГ', 'ИЭ', 'ИСАД', 'ИЦЭТП']


export default class GroupsScreen extends Component {

  institutes_items = institutes_names.map((name, key) => 
    <TouchableOpacity
      key={key}
      style={styles.institute_button}
    >
      <Text> {name} </Text>
    </TouchableOpacity>
  )

  render() {
    return (
      <LinearGradient 
        colors={['#7B88D3', '#5B4CAB']}
        style={styles.container}
      >
        <View
          style={styles.institutes}
        >
          <Text style={styles.selection_text}> Выберите институт </Text>
          <ScrollView
            style={styles.institute_selector}
            horizontal={true}
          >
              {this.institutes_items}
            
          </ScrollView>
        </View>
        
        <View
          style={styles.courses}
        >
          <Text style={styles.selection_text}> Выберите курс </Text>
        </View>

        <View
          style={styles.groups}
        >
          <Text style={styles.selection_text}> Выберите группу </Text>
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
  institutes: {
    flex: 2,
  },
  courses: {
    flex: 1,
  },
  groups: {
    flex: 4,
  },
  selection_text: {
    padding: '2%',
    color: '#C0C6FE',
    letterSpacing: -0.40,
    lineHeight: 22,
    fontWeight: "500",
    fontSize: 14,
  },
  institute_button: {
    backgroundColor: '#7B88D3',
    borderRadius: 10,
    width: Math.round(screenWidth/4),
    marginVertical: '15%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  institute_selector: {
    backgroundColor: 'black',
  },
})