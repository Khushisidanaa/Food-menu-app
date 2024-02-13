import { View, Text } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./screens/Home";
import LandingScreen from "./screens/Home2";
import RestaurantItem from "./components/RestaurantItem";
import BottomTabNavigator from "./TabNavigator";

// export default function RootNavigation() {
//   const Stack = createStackNavigator();

//   const screenOptions = {
//     headerShown: false,
//     headerTintColor: "white",
//     headerBackTitle: "Back",
//   };

//   return (
//     <NavigationContainer>
//       <BottomTabNavigator />
//       <Stack.Navigator
//         initialRouteName="LandingScreen"
//         screenOptions={screenOptions}
//       >
//         <Stack.Screen name="Home" component={Home} />
//         <Stack.Screen name="LandingScreen" component={LandingScreen} />
//         <Stack.Screen name="RestaurantItem" component={RestaurantItem} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

const Stack = createStackNavigator();

const MainStackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="LandingScreen">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="LandingScreen" component={LandingScreen} />
    </Stack.Navigator>
  );
};

const HomeStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
};
export { MainStackNavigator, HomeStackNavigator };
