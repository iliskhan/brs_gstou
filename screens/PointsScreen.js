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
    disciplineType: 'ЭКЗАМЕН',
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
    disciplineType: 'ЭКЗАМЕН',
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
    disciplineType: 'ЗАЧЕТ',
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
    disciplineType: 'ЗАЧЕТ',
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
    disciplineType: 'ЗАЧЕТ',
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
    openCards: [],
  }

  cardsDeleter = (item) => {
    let arr = this.state.openCards;
    for( var i = 0; i < arr.length; i++){ 
      if ( arr[i] === item) {
        arr.splice(i, 1); 
      }
    }
    return arr
  }

  render() {
    return (
      <LinearGradient
        colors={['#7B88D3', '#5B4CAB']}
        style={styles.container}    
      >
        <Text style={styles.label}>Баллы</Text>
          <View style={styles.scrollView}>
            <ScrollView
              contentContainerStyle={styles.scrollViewContent}
            >
              {data.map(
                (dataItem, idx) => 
                  <TouchableOpacity
                    key={idx}
                    style={(this.state.openCards.indexOf(idx) === -1) ? 
                      styles.pointsCard:
                      [styles.pointsCard, {backgroundColor: '#7B88D3'}]
                    }
                    onPress={() => {
                      if (this.state.openCards.indexOf(idx) === -1){
                        this.setState(state => {
                          return {openCards: [...state.openCards, idx]}
                        })
                      } else {
                        this.setState(() => {
                          return {openCards: this.cardsDeleter(idx)}
                        })
                      }
                    }}            
                  >
                    <View style={{
                      flex: 1,
                      flexDirection: 'row',
                      // justifyContent: 'space-around'
                      // backgroundColor: 'black',
                    }}>
                      <View 
                        style={{
                          flex:2,
                          width: Math.round(screenW/1.5),
                          marginTop: Math.round(screenW/34)
                        }}
                      >
                        <Text 
                          style={
                            (dataItem.disciplineType === 'ЭКЗАМЕН') ?
                            styles.disciplineType:
                            [styles.disciplineType, {color: '#C0C6FE'}]
                          }
                        >
                          {dataItem.disciplineType}
                        </Text>
                        <Text
                          style={(this.state.openCards.indexOf(idx) === -1) ?
                            styles.disciplineName:
                            [styles.disciplineName, {color: '#FCFCFF'}]
                          }
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
                    </View>
                    {(this.state.openCards.indexOf(idx) !== -1) ?
                      <View 
                        style={{
                          flexDirection: 'row',
                          justifyContent: 'space-between',
                          marginTop: Math.round(screenW/25),
                          paddingHorizontal: Math.round(screenW/20)
                        }}
                      >
                        {dataItem.detailed.map((detailedItem, idx) => 
                          <View 
                            key={idx}
                            style={{
                              // backgroundColor: 'white',
                              // paddingHorizontal: Math.round(screenW/25),
                            }}>
                            <Text 
                              style={styles.disciplineType, {color: '#C0C6FE'}}
                            >
                                {idx+1}-Я АТТЕСТАЦИЯ
                            </Text>
                            <Text 
                              style={styles.detailedPoints}
                            >
                              Посещаемость   {detailedItem.attendance}
                            </Text>
                            <Text 
                              style={styles.detailedPoints}
                            >
                              Текущая атт.   {detailedItem.currentSertification}
                            </Text>
                            <Text 
                              style={styles.detailedPoints}
                            >
                              Рубежная атт.  {detailedItem.midtermSertification}
                            </Text>
                            <Text 
                              style={styles.detailedPoints}
                            >
                              Самост. работа {detailedItem.attendance}
                            </Text>
                          </View>
                        )}
                      </View>:
                      null
                    }
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
    // flexDirection: 'row',
    // flexGrow:1 ,
    // height: Math.round(screenW/3.5),
    marginBottom: Math.round(screenW/20),
    paddingBottom: Math.round(screenW/20),
    marginHorizontal: '4%',
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    shadowColor: "#7B88D3",
    shadowOpacity: 0.16,
    shadowRadius: 16,
    shadowOffset: {
      width: 0,
      height: 8,
    },
    // elevation: 1
  },
  pointsCircle: {
    marginRight: Math.round(screenW/20),
    marginTop: Math.round(screenW/20),
    backgroundColor: '#E0E4FF',
    width: circleWH,
    height: circleWH,
    borderRadius: Math.round(circleWH/2),
    justifyContent: 'center',
    alignItems: 'center',
    // alignSelf: 'center',
  },
  detailedPoints: {
    color: '#E0E4FF',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 13,
    lineHeight: 18,
    letterSpacing: -0.08,
  },
  disciplineType: {
    marginLeft: Math.round(screenW/20),
    color: '#F59C62',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 13,
    lineHeight: 18,
    letterSpacing: -0.08,
  },
  disciplineName: {
    marginLeft: Math.round(screenW/20),
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