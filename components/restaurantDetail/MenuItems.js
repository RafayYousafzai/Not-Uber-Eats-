import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  FlatList,
} from "react-native";
import React from "react";
import { Divider } from "react-native-elements";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const styles = StyleSheet.create({
  menuItemStyle: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 20,
    // maxWidth: 500,
    marginHorizontal: "auto",
  },
  titleStyle: { fontWeight: "900" },
});

export default function MenuItems({
  food,
  restaurantName,
  hideCheckbox,
  marginLeft,
}) {
  const dispatch = useDispatch();

  const selectItems = (item, checkBoxValue) =>
    dispatch({
      type: "ADD_TO_CART",
      payload: {
        ...item,
        restaurantName: restaurantName,
        checkBoxValue: checkBoxValue,
      },
    });

  const cartItems = useSelector(
    (state) => state.cartReducer.selectedItems.items
  );

  const isFoodCart = (food, cartItems) =>
    cartItems.find((item) => item.title === food.title);

  const renderItem = ({ item }) => (
    <View style={{ maxWidth: 500, alignSelf: "center" }}>
      <View style={styles.menuItemStyle}>
        {/* here */}
        {hideCheckbox ? (
          <></>
        ) : (
          <BouncyCheckbox
            isChecked={isFoodCart(item, cartItems)}
            onPress={(checkBoxValue) => selectItems(item, checkBoxValue)}
          />
        )}
        <FoodInfo food={item} />
        <FoodImage food={item} marginLeft={marginLeft ? marginLeft : 0} />
      </View>
      <Divider
        width={0.5}
        orientation="vertical"
        style={{ marginHorizontal: 40 }}
      />
    </View>
  );

  return (
    <FlatList
      data={food}
      renderItem={renderItem}
      keyExtractor={(item, index) => index.toString()}
      showsVerticalScrollIndicator={false}
    />
  );
}

const FoodInfo = (props) => (
  <View style={{ width: 200, justifyContent: "space-evenly" }}>
    <Text style={styles.titleStyle}>{props.food.title}</Text>
    <Text style={{ fontSize: 11 }}>{props.food.description}</Text>
    <Text style={{ fontSize: 11 }}>{props.food.price}</Text>
  </View>
);

const FoodImage = ({ marginLeft, ...props }) => (
  <View>
    <Image
      source={{ uri: props.food.image }}
      style={{
        width: 100,
        height: 100,
        borderRadius: 8,
        marginLeft: marginLeft,
      }}
    />
  </View>
);

// export default function MenuItems({ food }) {
//   return (
//     <ScrollView showsVerticalScrollIndicator={false}>
//       {food.map((food, index) => (
//         <View key={index}>
//           <View style={styles.menuItemStyle}>
//             <FoodInfo food={food} />
//             <FoodImage food={food} />
//           </View>
//           <Divider width={0.5} orientation="vertical" />
//         </View>
//       ))}
//     </ScrollView>
//   );
// }
