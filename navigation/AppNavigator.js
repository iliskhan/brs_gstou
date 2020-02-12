import React, { Component } from "react";

import { images } from '../constants/Images'

import {
  Dimensions,
	StyleSheet,
	View,
	Image,
	TouchableOpacity,
  Text, } from "react-native";
  
import { createAppContainer, 
  createSwitchNavigator, 
  createDrawerNavigator,
} from 'react-navigation';

import { createStackNavigator, StackViewTransitionConfigs } from 'react-navigation-stack'

import MainScreen from '../screens/MainScreen';
import GroupsScreen from '../screens/GroupsScreen'


const screenW = Math.round(Dimensions.get('window').width); 

const styles = StyleSheet.create({
  header: {
    // flex: 1,
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
              style={{width: 12, height: 21}}/>
          </TouchableOpacity>
          <Text style={styles.title}>БРС ГГНТУ</Text>
          <View style={{width: '20%'}}></View>
        </View>
      )
    }
    // title: 'БРС ГГНТУ',
    // headerRight: <View></View>,
    // headerStyle: {
    //   margin: 0,
    //   backgroundColor: 'black',
    //   // padding: 0,
    //   // marginTop: '2%',
    //   // height: Math.round(screenW/20),
    // },
    // headerTintColor: 'white',
    // headerTransparent: true,
    // headerTitleStyle: {
      // fontFamily: 'SF-UI-Text',
    //   textAlign: 'center',
    //   flexGrow:1,
    //   // alignSelf:'center',
    // }
  },
  // headerMode: 'none',
}
);

export default createAppContainer(
  MyStackNavigator,
)
