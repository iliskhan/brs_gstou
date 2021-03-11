import { StyleSheet, Dimensions } from "react-native";

const screenW = Math.round(Dimensions.get("window").width);

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Math.floor(screenW / 5),
    backgroundColor: "#E5E5E5",
  },
  label: {
    color: "#FCFCFF",
    fontFamily: "SF-PRO-Text",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 34,
    letterSpacing: 0.41,
    marginLeft: "5%",
    marginBottom: Math.round(screenW / 20),
  },
  studentContainButton: {
    marginHorizontal: Math.round(screenW / 30),
    marginVertical: Math.round(screenW / 50),
    backgroundColor: "#FCFCFF",
    borderRadius: 6,
    shadowColor: "rgba(123, 136, 211, 0.28)",
    shadowOpacity: 0.28,
    shadowOffset: {
      width: 4,
      height: 8,
    },
    elevation: 4,
  },
  studentName: {
    marginLeft: Math.round(screenW / 23),
    marginVertical: Math.round(screenW * 0.03),
    fontSize: 15,
    lineHeight: 20,
    color: "#7B88D3",
  },
  scrollView: {
    flex: 1,
    backgroundColor: "#EEF0FF",
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  scrollViewContent: {
    flexGrow: 1,
    marginHorizontal: "2%",
    paddingTop: Math.round(screenW / 37),
  },
});
