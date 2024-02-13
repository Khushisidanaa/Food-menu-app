import { View, Text } from "react-native";
import React from "react";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { TouchableOpacity } from "react-native";

export default function bottomtabs() {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        margin: 10,
        marginHorizontal: 30,
      }}
    >
      <Icon icon="home" text="Home" />
      <Icon icon="calendar-day" text="Attendance" />
      <Icon icon="clipboard" text="Tasks" />
      <Icon icon="user" text="Profile" />
    </View>
  );
}

const Icon = (props) => (
  <TouchableOpacity>
    <View style={{ marginTop: 10 }}>
      <FontAwesome5
        name={props.icon}
        size={25}
        style={{ marginBottom: 3, alignSelf: "center" }}
      />
      <Text> {props.text}</Text>
    </View>
  </TouchableOpacity>
);
