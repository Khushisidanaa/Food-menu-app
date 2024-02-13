import { View, Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MainStackNavigator, HomeStackNavigator } from "./navigation";
import FontAwesome5Icon from "react-native-vector-icons/FontAwesome5";

import React from "react";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === "Home") {
            iconName = focused ? "user" : "user";
          } else if (route.name === "LandingScreen") {
            iconName = focused ? "ios-list-box" : "ios-list";
          }

          return <FontAwesome5Icon name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeStackNavigator} />
      <Tab.Screen name="LandingScreen" component={MainStackNavigator} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
