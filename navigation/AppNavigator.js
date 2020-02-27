import React, { Component } from "react";

import { images } from '../constants/Images'

import {
  Dimensions,
	StyleSheet,
	View,
	Image,
	TouchableOpacity,
  Text, } from "react-native";
  
import { createAppContainer, } from 'react-navigation';

import { createStackNavigator, StackViewTransitionConfigs } from 'react-navigation-stack'

import MainScreen from '../screens/MainScreen'
import GroupsScreen from '../screens/GroupsScreen'
import StudentsScreen from '../screens/StudentsScreen'
import PointsScreen from '../screens/PointsScreen'

const screenW = Math.round(Dimensions.get('window').width); 

const styles = StyleSheet.create({
  header: {
    paddingTop: Math.round(screenW/8),
    flexDirection: 'row',
    position:'absolute',
    height: Math.floor(screenW/6),
    top: 0,
    left: 0,
    right: 0,
  },
  arrow_left: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '20%',
  },
  title: {
    
    flexGrow: 1,
    textAlign: 'center',
    fontFamily: 'SF-UI-Text',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 17,
    lineHeight: 22,
    letterSpacing: -0.41,
    color: 'white',
    alignSelf: 'center',
  }
})

const MyStackNavigator = createStackNavigator({
  MainScreen: {
    screen: MainScreen,
    navigationOptions: {
      header: null,
    }
  },
  GroupsScreen: {
    screen: GroupsScreen,
  },
  StudentsScreen: {
    screen: StudentsScreen,
  },
  PointsScreen: {
    screen: PointsScreen,
  }
},
{
  transitionConfig: () => StackViewTransitionConfigs.SlideFromRightIOS,
  defaultNavigationOptions: {   
    header: ({ scene }) => {
      return (
        <View style={styles.header}>
          <TouchableOpacity 
            style={styles.arrow_left}
            onPress={() => scene.descriptor.navigation.goBack()}
          >
            <Image 
              source={images.arrow_left}
              style={{width: 12, height: 21}}
            />
          </TouchableOpacity>
          <Text style={styles.title}>БРС ГГНТУ</Text>
          <View style={{width: '20%'}}/>
        </View>
      )
    }
  },
}
);

export default createAppContainer(
  MyStackNavigator,
)
