import { Image, Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import Home from "./Home";

export const LandingScreen = ({ navigation }) => {
  return (
    <View style={styles.main}>
      {/* text - DONE*/}
      <View style={styles.textcontainer}>
        <Text numberOfLines={3} style={styles.text1}>
          Make tracking attendance and keep account of workspace jobs a hundred
          times easier with
        </Text>
        <Text style={styles.text2}>m-Track!</Text>
      </View>

      {/* image - DONE */}
      <View style={{ alignItems: "center" }}>
        <Image style={styles.image} source={require("../assets/landing.png")} />
      </View>

      {/* text2 - DONE*/}
      <View style={styles.text3container}>
        <Text style={styles.text3}>
          Add your company or login as an employee to get started on the
          exciting journey !!
        </Text>
      </View>

      {/* button - DONE */}
      <View>
        <Button
          title="Get started  je"
          onPress={() => navigation.navigate("Home")}
        />
      </View>

      {/* 3 dots and an icon  */}
      <View></View>
    </View>
  );
};

export default LandingScreen;

const styles = StyleSheet.create({
  main: {
    paddingTop: 113,
    paddingLeft: 30,
    paddingRight: 15,
    alignItems: "center",
  },
  textcontainer: {
    alignItems: "center",
  },
  text1: {
    fontSize: 23,
    lineHeight: 30,
  },
  text2: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#0265FC",
  },
  image: {
    height: 218,
    width: 328,
  },
  text3container: {
    width: 267,
    height: 91,
    alignItems: "center",
  },
  text3: {
    fontSize: 18,
  },
  button: {
    width: 310,
    height: 45,
    borderRadius: 30,
    backgroundColor: "#0265FC",
    alignItems: "center",
    justifyContent: "center",
  },
  btntxt: {
    color: "white",
    fontSize: 18,
  },
});
