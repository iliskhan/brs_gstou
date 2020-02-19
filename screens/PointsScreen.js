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

const screenW = Math.round(Dimensions.get('window').width);  
const screenH = Math.round(Dimensions.get('window').height);

const circleWH = Math.round(screenW / 7.5);

const data = [
  {
    disciplineName: 'Программирование',
    disciplineType: 'Экзамен',
    discipline: undefined,
    points: 81,
    detailed: [
      {
        attendance: 3,
        currentSertification: 5,
        midtermSertification: 5,
        independentWork: 0,
      },
      {
        attendance: 3,
        currentSertification: 5,
        midtermSertification: 5,
        independentWork: 0,
      },
    ]
  },
  {
    disciplineName: 'Математика',
    disciplineType: 'Экзамен',
    discipline: undefined,
    points: 61,
    detailed: [
      {
        attendance: 3,
        currentSertification: 5,
        midtermSertification: 5,
        independentWork: 0,
      },
      {
        attendance: 3,
        currentSertification: 5,
        midtermSertification: 5,
        independentWork: 0,
      },
    ]
  },
  {
    disciplineName: 'Иностранный язык',
    disciplineType: 'Зачет',
    discipline: undefined,
    points: 41,
    detailed: [
      {
        attendance: 3,
        currentSertification: 5,
        midtermSertification: 5,
        independentWork: 0,
      },
      {
        attendance: 3,
        currentSertification: 5,
        midtermSertification: 5,
        independentWork: 0,
      },
    ]
  },
  {
    disciplineName: 'Философия',
    disciplineType: 'Зачет',
    discipline: undefined,
    points: 100,
    detailed: [
      {
        attendance: 3,
        currentSertification: 5,
        midtermSertification: 5,
        independentWork: 0,
      },
      {
        attendance: 3,
        currentSertification: 5,
        midtermSertification: 5,
        independentWork: 0,
      },
    ]
  },
  {
    disciplineName: 'История',
    disciplineType: 'Зачет',
    discipline: undefined,
    points: 39,
    detailed: [
      {
        attendance: 3,
        currentSertification: 5,
        midtermSertification: 5,
        independentWork: 0,
      },
      {
        attendance: 3,
        currentSertification: 5,
        midtermSertification: 5,
        independentWork: 0,
      },
    ]
  }
]
export default class PointsScreen extends Component {

  state = {
    student: this.props.navigation.state.params.student,
  }

  render() {
    return (
      <LinearGradient
        colors={['#7B88D3', '#5B4CAB']}
        style={styles.container}    
      >
        <Text style={styles.label}>Баллы</Text>
        {/* <Text>{this.state.student}</Text> */}
          <View style={styles.scrollView}>
            <ScrollView
              contentContainerStyle={styles.scrollViewContent}
              // automaticallyAdjustContentInsets={true}
            >
              {data.map(
                (dataItem, idx) => 
                  <TouchableOpacity
                    key={idx}
                    style={styles.pointsCard}
                    // onPress={}            
                  >
                    <View style={{width: Math.round(screenW/1.5), margin: '2.5%'}}>
                      <Text 
                        style={
                          (dataItem.disciplineType === 'Экзамен') ?
                          styles.disciplineType:
                          [styles.disciplineType, {color: '#C0C6FE'}]
                        }
                      >
                        {dataItem.disciplineType}
                      </Text>
                      <Text
                        style={styles.disciplineName}
                      >
                        {dataItem.disciplineName}
                      </Text>
                    </View>
                    <View style={styles.pointsCircle}>
                      <Text
                        style={styles.points}
                      >
                        {dataItem.points}
                      </Text>
                    </View>
                    {/* <View></View> */}
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
    paddingTop: Math.round(screenW / 7),
    flex: 1,
    backgroundColor: '#E5E5E5',
  },
  label: {
    color: '#FCFCFF',
    // fontFamily: 'SF Pro Display',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 34,
    letterSpacing: 0.41,
    marginLeft: '5%',
    marginBottom: Math.round(screenW/20),
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
    paddingTop: Math.round(screenW/12),
    
  },
  pointsCard: {
    flexDirection: 'row',
    height: Math.round(screenW/3.5),
    marginBottom: Math.round(screenW/18),
    marginHorizontal: '4%',
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    shadowColor: "rgba(123, 136, 211, 0.16)",
    elevation: 4,
  },
  pointsCircle: {
    backgroundColor: '#E0E4FF',
    width: circleWH,
    height: circleWH,
    borderRadius: Math.round(circleWH/2),
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  disciplineType: {
    marginLeft: '2%',
    color: '#F59C62',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 14,
    lineHeight: 18,
    letterSpacing: -0.078,
  },
  disciplineName: {
    marginLeft: '2%',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 22,
    lineHeight: 28,
    color: '#6D74CD',
  },
  points: {
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 20,
    lineHeight: 24,
    letterSpacing: 0.75,
    color: '#7B88D3',
  },
})