import React, { Component } from "react";

import {
  ScrollView,
  StyleSheet,
  Dimensions,
  View,
  TouchableOpacity,
  Text,
  Image,
  } from "react-native";

import { DetailedPoints } from '../components/DetailedPoints'
import { LinearGradient } from 'expo-linear-gradient'
import { points } from '../constants/DummyData'
import { images } from '../constants/Images'
import { host } from '../constants/Host'
import axios from "axios";

const data = points

const screenW = Math.round(Dimensions.get('window').width);  
const screenH = Math.round(Dimensions.get('window').height);

const circleWH = Math.round(screenW / 7.5);


export default class PointsScreen extends Component {

  state = {
    student: this.props.navigation.state.params.student,
    data: undefined,
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

  componentDidMount() {
    console.log(this.state.student[1])
    axios.get(`${host}/students/${this.state.student[1]}/points`)
      .then(response => this.setState({ data: response.data }))
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
              {this.state.data ?
              this.state.data.map(
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
                            (dataItem.disciplineType === 'Экзамен') ?
                            styles.disciplineType:
                            [styles.disciplineType, {color: '#C0C6FE'}]
                          }
                        >
                          {dataItem.disciplineType.toUpperCase()}
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
                          >
                            <Text 
                              style={styles.disciplineType, {color: '#C0C6FE', marginBottom: Math.round(screenW / 37)}}
                            >
                                {idx+1}-Я АТТЕСТАЦИЯ
                            </Text>

                            <DetailedPoints 
                              description={'Посещаемость'} 
                              data={detailedItem.attendance} 
                              styles={styles}
                            />
                            <DetailedPoints 
                              description={'Текущая атт.'} 
                              data={detailedItem.currentCertification} 
                              styles={styles}
                            />
                            <DetailedPoints 
                              description={'Рубежная атт.'} 
                              data={detailedItem.midtermCertification} 
                              styles={styles}
                            />
                            <DetailedPoints 
                              description={'Самост. работа'} 
                              data={detailedItem.independentWork} 
                              styles={styles}
                            />
                            
                          </View>
                        )}
                      </View>:
                      null
                    }
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
    paddingTop: Math.round(screenW / 5),
    flex: 1,
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
    marginBottom: Math.round(screenW/20),
    paddingBottom: Math.round(screenW/15),
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
    elevation: 4
  },
  pointsCircle: {
    marginRight: Math.round(screenW/20),
    marginTop: Math.round(screenW/15),
    backgroundColor: '#E0E4FF',
    width: circleWH,
    height: circleWH,
    borderRadius: Math.round(circleWH/2),
    justifyContent: 'center',
    alignItems: 'center',
    
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
    fontFamily: 'SF-PRO-Text',
    marginLeft: Math.round(screenW/20),
    color: '#F59C62',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 13,
    lineHeight: 18,
    letterSpacing: -0.08,
  },
  disciplineName: {
    fontFamily: 'SF-PRO-Text',
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