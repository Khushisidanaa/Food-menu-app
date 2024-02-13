import { View, Text, SafeAreaView, ScrollView } from "react-native";
import React from "react";
import Headertabs from "../components/Headertabs";
import Searchbar from "../components/Searchbar";
import Categories from "../components/Categories";
import Bottomtabs from "../components/bottomtabs";
import RestaurantItem, { localRestaurants } from "../components/RestaurantItem";
import { Divider } from "react-native-elements";

export default function Home() {
  const [restaurantData, setRestaurantData] = React.useState(localRestaurants);
  return (
    <SafeAreaView style={{ backgroundColor: "#eee", flex: 1 }}>
      <View style={{ backgroundColor: "white", padding: 15 }}>
        <Headertabs />
        <Searchbar />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories />
        <RestaurantItem restaurantData={restaurantData} />
      </ScrollView>
      <Divider width={1} />
      <Bottomtabs />
    </SafeAreaView>
  );
}
