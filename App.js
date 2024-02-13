import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import RootNavigation from "./navigation";
import { NavigationContainer } from "@react-navigation/native";
import { MainStackNavigator } from "./navigation";
import { BottomTabNavigator } from "./TabNavigator";

export default function App() {
  return (
    <NavigationContainer>
      <BottomTabNavigator />
    </NavigationContainer>
  );
}
