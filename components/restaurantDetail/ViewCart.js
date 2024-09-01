import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  StyleSheet,
  ScrollView,
  FlatList,
} from "react-native";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import OrderItem from "./OrderItem";
import { firebase } from "../../firebase";
import { Platform } from "react-native";
import LottieView from "lottie-react-native";
import { Image } from "react-native";

export default function ViewCart({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false);
  const [loading, setLoading] = useState(false);

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

  const addOrderToFirebase = () => {
    setLoading(true);
    const db = firebase.firestore();
    db.collection("orders")
      .add({
        items: items,
        restaurantName: restaurantName,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      })
      .then(() => {
        setLoading(false);

        navigation.navigate("OrderCompleted");
      }, 2500);
  };

  const styles = StyleSheet.create({
    modalContainer: {
      flex: 1,
      justifyContent: "flex-end",
      backgroundColor: "rgba(0,0,0,0.7)",
      // borderTopLeftRadius: 10,
      // borderTopRightRadius: 10,
    },
    modalCheckoutContaienr: {
      backgroundColor: "white",
      padding: 16,
      height: 500,
      borderWidth: 1,
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
    },
    restaurantName: {
      textAlign: "center",
      fontWeight: 600,
      fontSize: 18,
      marginBottom: 10,
    },
    subTotalContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
      marginTop: 15,
    },
    subTotalText: {
      color: "rgba(0,0,0,0.6)",
      textAlign: "left",
      fontWeight: 600,
      fontSize: 15,
      bottom: 5,
    },
  });

  const checkOutModalContent = () => {
    return (
      <>
        <View style={styles.modalContainer}>
          <View style={styles.modalCheckoutContaienr}>
            <Text style={styles.restaurantName}>{restaurantName}</Text>
            <FlatList
              data={items}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item }) => <OrderItem item={item} />}
            />

            <View style={styles.subTotalContainer}>
              <Text style={styles.subTotalText}>Subtotal</Text>
              <Text>{totalUSD}</Text>
            </View>
            <View style={{ flexDirection: "row", justifyContent: "center" }}>
              <TouchableOpacity
                style={{
                  marginTop: 20,
                  backgroundColor: "black",
                  alignItems: "center",
                  padding: 13,
                  borderRadius: 30,
                  width: 300,
                  position: "relative",
                }}
                onPress={() => {
                  addOrderToFirebase(), setModalVisible(false);
                }}
              >
                <Text style={{ color: "white", fontSize: 20 }}>Checkout</Text>
                {/* <Text
                  style={{
                    position: "absolute",
                    right: 20,
                    color: "white",
                    fontSize: 15,
                    top: 17,
                  }}
                >
                  {total ? totalUSD : ""}
                </Text> */}
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </>
    );
  };

  return (
    <>
      <Modal
        style={{
          overflow: "hidden",
          borderColor: "grey",
        }}
        animationType="slide"
        visible={modalVisible}
        transparent={true}
        onRequestClose={() => setModalVisible(false)}
      >
        {checkOutModalContent()}
      </Modal>
      {total ? (
        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "row",
            position: "absolute",
            bottom: 50,
            zIndex: 999,
            justifyContent: "center",
            alignItems: "center",
            alignSelf: "center",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              width: "100%",
            }}
          >
            <TouchableOpacity
              style={{
                marginTop: 20,
                backgroundColor: "rgba(0, 0, 0, 0.89)",
                flexDirection: "row",
                justifyContent: "center",
                alignSelf: "center",
                padding: 15,
                borderRadius: 5,
                width: 300,
                position: "relative",
              }}
              onPress={() => setModalVisible(true)}
            >
              <Text style={{ color: "white", fontSize: 20 }}>View Cart</Text>
              {/* <Text style={{ fontSize: 20, color: "white" }}>{totalUSD}</Text> */}
            </TouchableOpacity>
          </View>
        </View>
      ) : null}
      {loading ? (
        <View
          style={{
            backgroundColor: "black",
            position: "absolute",
            justifyContent: "center",
            opacity: 0.6,
            alignSelf: "center",
            flex: 1,
            height: "100%",
            width: "100%",
          }}
        >
          {Platform.OS === "web" ? (
            // component for web platform
            <Image
              style={{
                height: 100,
                width: 100,
                alignSelf: "center",
                marginTop: 600,
                marginVertical: 20,
              }}
              source={require("../../assets/icons/loop.png")}
            />
          ) : (
            // component for mobile platforms
            <LottieView
              style={{ height: 200, alignSelf: "center" }}
              source={require("../../assets/animations/scanner.json")}
              autoPlay={3}
            />
          )}
        </View>
      ) : (
        <></>
      )}
    </>
  );
}
