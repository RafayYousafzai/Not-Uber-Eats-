import { SafeAreaView, ScrollView, View } from "react-native";
import React, { useEffect, useState } from "react";
import HeaderTabs from "../components/home/HeaderTabs";
import SearchBar from "../components/home/SearchBar";
import Categories from "../components/home/Categories";
import RestaurantItems from "../components/home/RestaurantItem";
import { Divider } from "react-native-elements";
import BottomTabs from "../components/home/BottomTabs";
const pic =
  "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.pixelstalk.net%2Fwp-content%2Fuploads%2F2016%2F08%2FFast-food-backgrounds-free-download.jpg&f=1&nofb=1&ipt=e9a8ba83848eca1a21f2c2da763612028ad02f4f9b2e2039654516b2b2c1bd53&ipo=images";
const localRestaurants = [
  {
    name: "Pizza Palace",
    imageUrl:
      "https://plus.unsplash.com/premium_photo-1682800179834-c05e7c7d0a09?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    categories: ["Italian", "Pizza", "Takeout"],
    reviews: [
      {
        username: "JohnDoe",
        rating: 4.5,
        text: "Best pizza in town!",
      },
      {
        username: "JaneSmith",
        rating: 3.8,
        text: "Decent pizza, but service was slow.",
      },
    ],
    rating: 4.2,
    price: "$$",
  },
  {
    name: "Sushi Spot",
    imageUrl:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    categories: ["Japanese", "Sushi", "Dine-in"],
    reviews: [
      {
        username: "AlexKim",
        rating: 4.8,
        text: "Amazing sushi, great service!",
      },
      {
        username: "EmilyNguyen",
        rating: 4.2,
        text: "Sushi was good, but a bit overpriced.",
      },
    ],
    rating: 4.5,
    price: "$$$",
  },
  {
    name: "Burger Barn",
    imageUrl:
      "https://images.unsplash.com/photo-1515669097368-22e68427d265?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    categories: ["American", "Burgers", "Takeout"],
    reviews: [
      {
        username: "SamuelJohnson",
        rating: 3.5,
        text: "Burgers were mediocre, but fries were great!",
      },
      {
        username: "MiaGarcia",
        rating: 4.0,
        text: "Good burgers, nice atmosphere.",
      },
    ],
    rating: 3.8,
    price: "$",
  },
  {
    name: "Pizza Palace",
    imageUrl:
      "https://images.unsplash.com/photo-1570560258879-af7f8e1447ac?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
    categories: ["Italian", "Pizza", "Takeout"],
    reviews: [
      {
        username: "JohnDoe",
        rating: 4.5,
        text: "Best pizza in town!",
      },
      {
        username: "JaneSmith",
        rating: 3.8,
        text: "Decent pizza, but service was slow.",
      },
    ],
    rating: 4.2,
    price: "$$",
  },
  {
    name: "Sushi Spot",
    imageUrl:
      "https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    categories: ["Japanese", "Sushi", "Dine-in"],
    reviews: [
      {
        username: "AlexKim",
        rating: 4.8,
        text: "Amazing sushi, great service!",
      },
      {
        username: "EmilyNguyen",
        rating: 4.2,
        text: "Sushi was good, but a bit overpriced.",
      },
    ],
    rating: 4.5,
    price: "$$$",
  },
  {
    name: "Burger Barn",
    imageUrl:
      "https://images.unsplash.com/photo-1521917441209-e886f0404a7b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1460&q=80",
    categories: ["American", "Burgers", "Takeout"],
    reviews: [
      {
        username: "SamuelJohnson",
        rating: 3.5,
        text: "Burgers were mediocre, but fries were great!",
      },
      {
        username: "MiaGarcia",
        rating: 4.0,
        text: "Good burgers, nice atmosphere.",
      },
    ],
    rating: 3.8,
    price: "$",
  },
  {
    name: "Pizza Palace",
    imageUrl:
      "https://images.unsplash.com/photo-1587574293340-e0011c4e8ecf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80",
    categories: ["Italian", "Pizza", "Takeout"],
    reviews: [
      {
        username: "JohnDoe",
        rating: 4.5,
        text: "Best pizza in town!",
      },
      {
        username: "JaneSmith",
        rating: 3.8,
        text: "Decent pizza, but service was slow.",
      },
    ],
    rating: 4.2,
    price: "$$",
  },
  {
    name: "Sushi Spot",
    imageUrl:
      "https://images.unsplash.com/photo-1573668200361-62e141908294?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    categories: ["Japanese", "Sushi", "Dine-in"],
    reviews: [
      {
        username: "AlexKim",
        rating: 4.8,
        text: "Amazing sushi, great service!",
      },
      {
        username: "EmilyNguyen",
        rating: 4.2,
        text: "Sushi was good, but a bit overpriced.",
      },
    ],
    rating: 4.5,
    price: "$$$",
  },
  {
    name: "Burger Barn",
    imageUrl:
      "https://images.unsplash.com/photo-1543373072-69f3d4788832?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    categories: ["American", "Burgers", "Takeout"],
    reviews: [
      {
        username: "SamuelJohnson",
        rating: 3.5,
        text: "Burgers were mediocre, but fries were great!",
      },
      {
        username: "MiaGarcia",
        rating: 4.0,
        text: "Good burgers, nice atmosphere.",
      },
    ],
    rating: 3.8,
    price: "$",
  },
  // Add more restaurants here...
];

const Home = ({ navigation }) => {
  const [restaurantData, setRestaurantData] = useState(localRestaurants);
  const [city, setCity] = useState("San Franciscco");
  const [activeTab, setActiveTab] = useState("Delivery");

  const getRestaurantFromYelp = () => {
    const YELP_API_KEY =
      "mQczejslcQjs2OCUjQPaOgIYGqT5VIIjaehFGir8bEx0zwJKcc2LfmtG6ljPA8SFawt4CKsYhOY_-zOYwa112GSbuabEe283W1r-OCbWSByolsEnfqCLZPpTDqJbZHYx";

    const yelpUrl = `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/business/search?term=restaurant&location=usa`;
    const apiOptions = {
      headers: {
        Authorization: `Bearer ${YELP_API_KEY}`,
        Origin: "localhost:19006",
        withCredentials: true,
      },
    };

    return fetch(yelpUrl, apiOptions)
      .then((res) => {
        console.log("Yelp API response status:", res.status);
        return res.json();
      })
      .then((json) => {
        console.log("Yelp API response:", json);
        setRestaurantData(json.business);
      })
      .catch((error) => {
        console.error("Error fetching data from Yelp API:", error);
        console.log("Response:", error.response);
      });
  };

  useEffect(() => {
    getRestaurantFromYelp();
  }, [city, activeTab]);

  return (
    <SafeAreaView style={{ backgroundColor: "#eee", flex: 1 }}>
      <View style={{ backgroundColor: "white", paddingTop: 15 }}>
        <HeaderTabs activeTab={activeTab} setActiveTab={setActiveTab} />
        <SearchBar cityHandler={setCity} />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories />
        <View
          style={{
            alignSelf: "center",
            justifyContent: "center",
            flexDirection: "row",
            flexWrap: "wrap",
          }}
        >
          <RestaurantItems
            restaurants={restaurantData}
            navigation={navigation}
          />
        </View>
      </ScrollView>
      <Divider width={1} />
      <BottomTabs />
    </SafeAreaView>
  );
};

export default Home;
