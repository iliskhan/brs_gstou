import { StyleSheet, Dimensions } from "react-native";

const screenW = Math.round(Dimensions.get("window").width);

export const styles = StyleSheet.create({
  container: {
    paddingTop: Math.round(screenW / 5),
    flex: 1,
    backgroundColor: '#E5E5E5',
  },
  courses: {
    flex: 1,
  },
  groups: {
    flex: 5,
  },
  selection_text: {
    paddingLeft: '6%',
    color: '#E5E5E5',
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
    height: Math.round(screenW/12.5),
    marginHorizontal: '4%',
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row',
    backgroundColor: "#212D3A",
    borderRadius: 8,
    
  },
  group_selector: {
    paddingVertical: Math.round(screenW / 25),
    flexGrow: 1,
    paddingLeft: Math.round(screenW / 22.5),
    flexDirection: 'row',
    flexWrap: 'wrap',

  },
  group_button: {

    marginRight: Math.round(screenW / 20),
    marginBottom: Math.round(screenW / 25),
    backgroundColor: '#212D3A',
    borderRadius: 10,
    height:Math.round((screenW/4)/1.5),
    width: Math.round(screenW/3.75),
    justifyContent: 'center',
    alignItems: 'center',
  },
  selected_group_button: {
    marginBottom: '4%',
    backgroundColor: '#212D3A',
    borderRadius: 10,
    height:Math.round((screenW/4)/1.5),
    width: Math.round(screenW/3.75),
    justifyContent: 'center',
    alignItems: 'center',
  },
  courses_text: {
    color: '#E5E5E5',
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
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#517296',
    borderRadius: 7,

  },
  not_selected_button: {
    backgroundColor: '#212D3A',
    borderRadius: 10,
    height:Math.round(screenW/4.5),
    width: Math.round(screenW/4.5),
    marginHorizontal: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  not_selected_button_text: {
    opacity: 0.4,
    color: '#FFF',
    fontFamily: 'SF-UI-Text',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: 22,
  },
  selected_button: {
    backgroundColor: '#B92034',
    borderRadius: 10,
    height:Math.round(screenW/4.5),
    width: Math.round(screenW/4.5),
    marginHorizontal: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  selected_button_text: {
    color: '#fff',
    fontFamily: 'SF-UI-Text',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 22,
  }
})