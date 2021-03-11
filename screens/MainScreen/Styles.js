import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#E5E5E5",
  },
  image: {
    flex: 2,
    justifyContent: "center",
  },
  buttons: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    width: "100%",
  },
  buttonView: {
    marginTop: "4%",
    paddingVertical: "4%",

    borderRadius: 10,
    width: "65%",
    backgroundColor: "#7B88D3",
    alignItems: "center",

    shadowColor: "#7B88D3",
    shadowOpacity: 0.24,
    shadowOffset: {
      width: 0,
      height: 8,
    },
    elevation: 4,
  },
  textStyle: {
    color: "white",
    fontSize: 24,
    lineHeight: 29,
    fontFamily: "SF-UI-Text",
  },
});
