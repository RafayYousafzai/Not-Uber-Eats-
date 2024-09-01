import { View, Text, Image } from "react-native";
import React from "react";

// const yulpRestaurantInfo = {
//   name: "Luxury Bites",
//   image:
//     "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.seenrooftopbangkok.com%2Fwp-content%2Fuploads%2F2017%2F09%2F20190410-AVANI-Riverside-Seen-Bar-and-Restaurant-Bar-and-Seating-Angle.jpg&f=1&nofb=1&ipt=add741dccb30f8b0e1f8496d59d9adcfbf48a44de32569abfe5092a3315ec3cb&ipo=images",
//   price: "$$",
//   reviews: "112",
//   rating: "4.5",
//   categories: [
//     { title: "Pakistan" },
//     { title: "Indian" },
//     { title: "Uk" },
//     { title: "Spain" },
//   ],
// };

export default function About(props) {
  const { name, image, price, reviews, rating, categories } =
    props.route.params;

  // const formatedCategories = categories.map((cat) => cat.title).join(" | ");
  // console.log(categories, formatedCategories);

  const description = `${categories} ${
    price ? " | " + price : ""
  }  | ⭐ (${rating}) | Reviews (${reviews.length}) `;

  return (
    <View>
      <RestaurantImage image={image} />
      <RestaurantName name={name} />
      <RestaurantDescription description={description} />
    </View>
  );
}
const RestaurantImage = (props) => (
  <Image source={{ uri: props.image }} style={{ width: "100%", height: 180 }} />
);
const RestaurantName = (props) => (
  <Text
    style={{
      fontSize: 29,
      fontWeight: "600",
      marginTop: 10,
      marginHorizontal: 15,
    }}
  >
    {props.name}
  </Text>
);
const RestaurantDescription = (props) => (
  <Text
    style={{
      fontSize: 10,
      fontWeight: "400",
      marginTop: 10,
      marginHorizontal: 15.5,
    }}
  >
    {props.description}
  </Text>
);
