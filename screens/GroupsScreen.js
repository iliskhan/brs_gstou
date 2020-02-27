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

import axios from 'axios';

const host = '76c53aa3.ngrok.io'

const screenW = Math.round(Dimensions.get('window').width);  
const screenH = Math.round(Dimensions.get('window').height);

const institutes_names = ['ИНГ', 'ИЭ', 'ИПИТ', 'ИСАД', 'ИЦЭТП']
// const groups_names = ['ПИ-18', 'ИСТ-18', 'БИС-18', 'БИН-18']
const courses = 4

export default class GroupsScreen extends Component {

  state = {
    groups_names: undefined,
    group_name: undefined,
    selected_course: 1,
    inst_name: institutes_names[2],
    courses: [...Array(courses).keys()].map(i => ++i)
  }

  getGroups = () => {
    axios.get(`http://${host}/institutes/${this.state.inst_name.toLowerCase()}/course/${this.state.selected_course}`)
      .then(response => this.setState({groups_names: response.data}))
  }

  componentDidMount() {
    this.getGroups( 'ИПИТ', 1)
  }

  render() {
    return (
      <LinearGradient 
        colors={['#7B88D3', '#5B4CAB']}
        style={styles.container}
      >
        <View>
          <Text style={[styles.selection_text,{marginTop: '5%'}]}>Выберите институт</Text>
          <FlatList 
            style={{paddingVertical: '5%'}}
            horizontal={true}
            ref={(ref) => { this.flatListRef = ref }}
            showsHorizontalScrollIndicator={false}
            initialScrollIndex={0.5}
          
            data={institutes_names}
            keyExtractor={item => item}
            
            renderItem={({item}) =>
              <TouchableOpacity
                onPress={() => {
                  this.setState({
                    inst_name : item,
                  }, this.getGroups)
                }}
                style={(this.state.inst_name == item) ? 
                  styles.selected_button: 
                  styles.not_selected_button}
              >
                <Image
                  source={images.inst_logos[item]}
                  style={(this.state.inst_name == item) ?
                    styles.logo_styles:
                    [styles.logo_styles, { opacity: 0.25}]}
                />
                <Text style={(this.state.inst_name == item) ? 
                  styles.selected_button_text: 
                  styles.not_selected_button_text}
                > 
                  {item} 
                </Text>
              </TouchableOpacity>
            }
          />
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
                  }, this.getGroups)
                }}
                style={(this.state.selected_course == course) ? 
                  styles.courses_button_selected: 
                  styles.courses_button}
                >
                  <Text 
                    style={(this.state.selected_course == course) ? 
                      [styles.courses_text, {color: 'white'}]:
                      styles.courses_text}
                  >
                    {course}
                </Text>
              </TouchableOpacity>) 
            }
          </View>
        </View>

        <View
          style={styles.groups}
        >
          <Text style={styles.selection_text}> 
            Выберите группу
          </Text>
          <ScrollView
            contentContainerStyle={styles.group_selector}
          >
            {this.state.groups_names ?
            this.state.groups_names.map((group_name, key) => 
              <TouchableOpacity
              key={key}
              onPress={() => {
                this.setState({
                  group_name: group_name,
                }, 
                () => this.props.navigation.navigate(
                  'StudentsScreen', 
                  {
                    group_name, 
                    students: [...Array(15).keys()].map(i => `студент ${++i}`)} )
                )}
              }
              style={styles.group_button}
            >
              <Text 
                style={[styles.not_selected_button_text, {color: 'white'}]}
                > 
                {group_name} 
              </Text>
            </TouchableOpacity>
          ):
          null
        }
          </ScrollView>
        </View>
      </LinearGradient>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    paddingTop: Math.round(screenW / 5),
    flex: 1,
    backgroundColor: '#E5E5E5',
    // marginTop: '5%'
  },
  courses: {
    flex: 1,
    // marginTop: '5%'
  },
  groups: {
    flex: 5,
    marginVertical: Math.round(screenW/25)
  },
  selection_text: {
    paddingLeft: '6%',
    color: '#C0C6FE',
    letterSpacing: -0.40,
    lineHeight: 22,
    fontWeight: "500",
    fontSize: 14,
  },
  logo_styles: {
    width: 32,
    height: 32,
  },
  institute_selector: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  course_selector: {
    // flex: 1,
    // flexGrow: 1,
    height: Math.round(screenW/12.5),
    marginHorizontal: '4%',
    marginTop: Math.round(screenW/ 25),
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row',
    backgroundColor: "#7B88D3",
    borderRadius: 8,
    
  },
  group_selector: {
    marginTop: '5%',
    flexGrow: 1,
    paddingHorizontal: '4%',
    justifyContent: 'space-between',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  group_button: {
    opacity: 0.4,
    marginBottom: '4%',
    backgroundColor: '#7B88D3',
    borderRadius: 10,
    height:Math.round((screenW/4)/1.5),
    width: Math.round(screenW/3.75),
    justifyContent: 'center',
    alignItems: 'center',
  },
  selected_group_button: {
    marginBottom: '4%',
    backgroundColor: '#C0C6FE',
    borderRadius: 10,
    height:Math.round((screenW/4)/1.5),
    width: Math.round(screenW/3.75),
    justifyContent: 'center',
    alignItems: 'center',
  },
  courses_text: {
    color: '#9DA7EE',
  },
  courses_button: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
  courses_button_selected: {
    flex: 1,
    height: '85%',
    // paddingVertical: '1%',
    alignItems: 'center',
    justifyContent: 'center',
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
    fontFamily: 'SF-UI-Text',
    fontSize: 16,
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
    fontFamily: 'SF-UI-Text',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 22,
  }
})