import { View, Text, Image, TouchableOpacity } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import React from "react";

export default function RestaurantItems({ navigation, ...props }) {
  return (
    <>
      {props.restaurants.map((restaurant, index) => (
        <TouchableOpacity
          key={index}
          activeOpacity={1}
          onPress={() =>
            navigation.navigate("RestaurantDetail", {
              name: restaurant.name,
              image: restaurant.imageUrl,
              price: restaurant.price,
              reviews: restaurant.reviews,
              rating: restaurant.rating,
              categories: restaurant.categories,
            })
          }
          style={{
            marginBottom: 30,
            maxWidth: 500,
            minWidth: 320,
            marginHorizontal: 5,
          }}
        >
          <View
            style={{ marginTop: 10, padding: 15, backgroundColor: "white" }}
          >
            <RestaurantImage imageUrl={restaurant.imageUrl} />
            <RestaurantInfo name={restaurant.name} rating={restaurant.rating} />
          </View>
        </TouchableOpacity>
      ))}
    </>
  );
}

const RestaurantImage = (props) => (
  <>
    <Image
      source={{
        uri: props.imageUrl,
      }}
      style={{ width: "100%", height: 180, borderRadius: 5 }}
    />
    <TouchableOpacity style={{ position: "absolute", right: 20 }}>
      <MaterialCommunityIcons name="heart-outline" size={25} color="#fff" />
    </TouchableOpacity>
  </>
);

const RestaurantInfo = (props) => (
  <View
    style={{
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "flex-start",
      marginTop: 2,
    }}
  >
    <View>
      <Text style={{ fontSize: 14, fontWeight: "900", marginVertical: 2 }}>
        {props.name}
      </Text>
      <Text style={{ color: "gray", fontSize: 12 }}>30-49 min</Text>
    </View>
    <View
      style={{
        backgroundColor: "white",
        height: 30,
        width: 30,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 15,
      }}
    >
      <Text style={{ fontSize: 10 }}>{props.rating}</Text>
    </View>
  </View>
);
