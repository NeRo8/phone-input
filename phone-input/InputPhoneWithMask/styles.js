import { StyleSheet } from "react-native";

export default StyleSheet.create({
  containerStyle: {},
  inputContainerStyle: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "silver",
    height: 40,
    paddingHorizontal: 5,
    backgroundColor: "white",
  },
  inputStyle: {
    flex: 1,
  },
  labelStyle: {
    marginBottom: 4,
  },
  messageStyle: {
    fontSize: 10,
    marginTop: 2,
    textAlign: "right",
  },
  flagContainerStyle: {
    width: 40,
    height: 25,
    borderWidth: 1,
    borderColor: "silver",
  },
  codeContainerStyle: {
    flexDirection: "row",
    alignItems: "center",
  },
  codeStyle: {
    marginHorizontal: 5,
    color: "gray",
  },
  listStyle: {
    maxHeight: 200,
  },
  listContentContainerStyle: {
    flexGrow: 1,
  },
  listContainerStyle: {
    marginTop: 5,
    borderWidth: 1,
    borderColor: "silver",
    padding: 5,
    backgroundColor: "white",
  },
  searchInputContainerStyle: {
    borderWidth: 1,
    borderColor: "silver",
    paddingHorizontal: 5,
    marginBottom: 5,
  },
  searchInputStyle: {
    height: 40,
  },
  itemContainerStyle: {
    flexDirection: "row",
    height: 40,
    justifyContent: "space-between",
    alignItems: "center",
  },
  itemStyle: {
    fontSize: 12,
    flex: 1,
  },
  itemCodeStyle: {
    marginHorizontal: 5,
    color: "gray",
    fontSize: 12,
  },
  flagStyle: {
    flex: 1,
    height: null,
    width: null,
  },
  disabledInputContainerStyle: {
    backgroundColor: "silver",
  },
  disabledInputStyle: {
    color: "gray",
  },
  iconContainerStyle: {
    width: 40,
    alignItems: "center",
  },
});
