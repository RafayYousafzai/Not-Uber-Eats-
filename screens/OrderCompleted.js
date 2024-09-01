import { View, Text, SafeAreaView, ScrollView, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import LottieView from "lottie-react-native";
import MenuItems from "../components/restaurantDetail/MenuItems";
import { firebase } from "../firebase";
import { Platform } from "react-native";
import { FlatList } from "react-native";

export default function OrderCompleted() {
  const [lastOrder, setLastOrder] = useState({
    items: [
      {
        title: "Margherita Pizza",
        description:
          "Traditional Italian pizza topped with tomato sauce, mozzarella, and fresh basil",
        price: "$14.99",
        image:
          "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia1.popsugar-assets.com%2Ffiles%2Fthumbor%2FoYivacUQxsjybVn80tgpJo2bahw%2Ffit-in%2F2048xorig%2Ffilters%3Aformat_auto-!!-%3Astrip_icc-!!-%2F2015%2F06%2F10%2F017%2Fn%2F1922398%2Fbc378e5c_shutterstock_93720934.jpg&f=1&nofb=1&ipt=b04515c1a1d2b9ae51c2e83cfa36d272fece278c9300ce1a3277503b5541bb19&ipo=images",
      },
    ],
  });
  const selectedItems = useSelector((state) => state.cartReducer.selectedItems);
  const items = selectedItems.items;
  const restaurantName = selectedItems.restaurantName;

  const total = items.reduce(
    (acc, item) => acc + Number(item.price.replace("$", "")),
    0
  );

  const totalUSD = total.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });
  // console.log(totalUSD);
  useEffect(() => {
    const db = firebase.firestore();
    const unsubscribe = db
      .collection("orders")
      .orderBy("createdAt", "desc")
      .limit(1)
      .onSnapshot((snapshot) => {
        snapshot.docs.forEach((doc) => {
          setLastOrder(doc.data());
        });
      });
    return () => unsubscribe();
  }, []);

  return (
    <SafeAreaView style={{ backgroundColor: "white", flex: 1 }}>
      <View
        style={{
          margin: 15,
          alignContent: "center",
          height: "100%",
        }}
      >
        {Platform.OS === "web" ? (
          // component for web platform
          <Image
            style={{
              height: 100,
              width: 100,
              alignSelf: "center",
              marginVertical: 20,
            }}
            source={require(".././assets/images/confirmation.png")}
          />
        ) : (
          // component for mobile platforms
          <LottieView
            style={{ height: 100, alignSelf: "center", marginBottom: 30 }}
            source={require("../assets/animations/check-mark.json")}
            autoPlay={true}
            loop={false}
          />
        )}

        <Text
          style={{
            fontSize: 20,
            fontWeight: "bold",
            marginBottom: 10,
            justifyContent: "center",
            alignSelf: "center",
          }}
        >
          🍴 Order placed at {restaurantName} for {totalUSD} USD! 🎉
        </Text>

        <FlatList
          data={lastOrder.items}
          renderItem={({ item }) => (
            <MenuItems food={[item]} hideCheckbox={true} marginLeft={8} />
          )}
          keyExtractor={(item, index) => index.toString()}
        />
        {Platform.OS === "web" ? (
          // component for web platform
          <Image
            style={{
              height: 100,
              width: 100,
              alignSelf: "center",
              marginVertical: 20,
            }}
            source={require(".././assets/images/cooking.png")}
          />
        ) : (
          // component for mobile platforms
          <LottieView
            style={{
              height: 100,
              alignSelf: "center",
              marginVertical: 20,
              justifyContent: "center",
              alignItems: "center",
            }}
            source={require("../assets/animations/cooking.json")}
            autoPlay={true}
          />
        )}
      </View>
    </SafeAreaView>
  );
}
