import { StyleSheet, Dimensions } from "react-native";

const screenW = Math.round(Dimensions.get("window").width);
const circleWH = Math.round(screenW / 7.5);

export const styles = StyleSheet.create({
  container: {
    paddingTop: Math.round(screenW / 5),
    flex: 1,
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
  scrollView: {
    flex: 1,
    backgroundColor: "#EEF0FF",
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  scrollViewContent: {
    flexGrow: 1,
    marginHorizontal: "2%",
    paddingTop: Math.round(screenW / 12),
  },
  pointsCard: {
    marginBottom: Math.round(screenW / 20),
    paddingBottom: Math.round(screenW / 15),
    marginHorizontal: "4%",
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    shadowColor: "#7B88D3",
    shadowOpacity: 0.16,
    shadowRadius: 16,
    shadowOffset: {
      width: 0,
      height: 8,
    },
    elevation: 4,
  },
  pointsCircle: {
    marginRight: Math.round(screenW / 20),
    marginTop: Math.round(screenW / 15),
    backgroundColor: "#E0E4FF",
    width: circleWH,
    height: circleWH,
    borderRadius: Math.round(circleWH / 2),
    justifyContent: "center",
    alignItems: "center",
  },
  detailedPoints: {
    color: "#E0E4FF",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: 13,
    lineHeight: 18,
    letterSpacing: -0.08,
  },
  disciplineType: {
    fontFamily: "SF-PRO-Text",
    marginLeft: Math.round(screenW / 20),
    color: "#F59C62",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: 13,
    lineHeight: 18,
    letterSpacing: -0.08,
  },
  disciplineName: {
    fontFamily: "SF-PRO-Text",
    marginLeft: Math.round(screenW / 20),
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 22,
    lineHeight: 28,
    color: "#6D74CD",
  },
  points: {
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: 20,
    lineHeight: 24,
    letterSpacing: 0.75,
    color: "#7B88D3",
  },
});
