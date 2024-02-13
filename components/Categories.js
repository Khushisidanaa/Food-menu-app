import { View, Text, Image, ScrollView } from "react-native";
import React from "react";

const items = [
  {
    image: require("../images/shopping-bag.png"),
    text: "Pick-up",
  },

  {
    image: require("../images/soft-drink.png"),
    text: "Soft Drinks",
  },
  {
    image: require("../images/bread.png"),
    text: "Bakery Items",
  },
  {
    image: require("../images/fast-food.png"),
    text: "Fast Foods",
  },
  {
    image: require("../images/deals.png"),
    text: "Deals",
  },
  {
    image: require("../images/coffee.png"),
    text: "Coffee",
  },
  {
    image: require("../images/desserts.png"),
    text: "Desserts",
  },
];

export default function Categories() {
  return (
    <View
      style={{
        marginTop: 5,
        backgroundColor: "white",
        paddingVertical: 10,
        paddingLeft: 20,
      }}
    >
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {items.map((item, index) => (
          <View key={index} style={{ marginRight: 30, alignItems: "center" }}>
            <Image
              source={item.image}
              style={{
                height: 40,
                width: 50,
                resizeMode: "contain",
                padding: 20,
              }}
            />
            <Text style={{ fontWeight: "900", fontSize: 13 }}>
              {" "}
              {item.text}
            </Text>
          </View>
        ))}
      </ScrollView>
    </View>

    // <View
    //   style={{
    //     flexDirection: "row",
    //     marginTop: 5,
    //     backgroundColor: "white",
    //     paddingVertical: 20,
    //   }}
    // >
    //   <View style={{ marginLeft: 10, alignItems: "center" }}>
    //     <Image
    //       source={require("../images/shopping-bag.png")}
    //       style={{
    //         height: 50,
    //         width: 50,
    //         padding: 20,
    //       }}
    //     ></Image>
    //     <Text style={{ fontWeight: "900", fontSize: 12 }}> Pick-up</Text>
    //   </View>
    //   <View style={{ marginLeft: 40, alignItems: "center" }}>
    //     <Image
    //       source={require("../images/soft-drink.png")}
    //       style={{
    //         height: 50,
    //         width: 50,
    //         padding: 20,
    //       }}
    //     ></Image>
    //     <Text style={{ fontWeight: "900", fontSize: 12 }}> Soft Drinks</Text>
    //   </View>
    //   <View style={{ marginLeft: 40, alignItems: "center" }}>
    //     <Image
    //       source={require("../images/bread.png")}
    //       style={{
    //         height: 50,
    //         width: 50,
    //         padding: 20,
    //       }}
    //     ></Image>
    //     <Text style={{ fontWeight: "900", fontSize: 12 }}> Bakery Items</Text>
    //   </View>
    //   <View style={{ marginLeft: 40, alignItems: "center" }}>
    //     <Image
    //       source={require("../images/fast-food.png")}
    //       style={{
    //         height: 50,
    //         width: 50,
    //         padding: 20,
    //       }}
    //     ></Image>
    //     <Text style={{ fontWeight: "900", fontSize: 12 }}> Pick-up</Text>
    //   </View>
    // </View>
  );
}
