import React, { Component } from "react";

import {
	StyleSheet,
	View,
	Image,
	TouchableOpacity,
	Text, } from "react-native";

export default class MainScreen extends Component {

	render() {
		return (
			<View 
			style={ styles.container }>	
				<View style={styles.image}>
					<Image
            source={require("../assets/images/ggntu_logo.png")}
            style={{width: 174, height: 174}}
					/>
				</View>
				<View style={styles.buttons}>
          <TouchableOpacity 
            style={styles.buttonView}
            onPress={() => this.props.navigation.navigate({ routeName: 'GroupsScreen' })}
          >
            <Text style={styles.textStyle}>
              Баллы
            </Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.buttonView}
          >
            <Text style={styles.textStyle}>
              Расписание
            </Text>
          </TouchableOpacity>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'#E5E5E5',
  },
	image: {
    
    flex: 2,
    justifyContent: 'center',
	},
	buttons: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '100%',
  },
  buttonView: {
    marginTop: '4%',
    paddingVertical: '4%',

    borderRadius: 10,
    width: '65%',
    backgroundColor: '#7B88D3',
    alignItems: 'center',
    shadowColor: 'rgba(123, 136, 211, 0.25)',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.1,
    elevation: 5,
  },
  textStyle: {
    color: 'white',
    fontSize: 24,
    lineHeight: 29,
    fontFamily: 'SF-UI-Text',
  }
})