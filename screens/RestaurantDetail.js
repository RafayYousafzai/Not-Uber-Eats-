import { SafeAreaView, StatusBar, View } from "react-native";
import React from "react";
import { Divider } from "react-native-elements";
import About from "../components/restaurantDetail/About";
import ViewCart from "../components/restaurantDetail/ViewCart";
import MenuItems from "../components/restaurantDetail/MenuItems";

export const foods = [
  {
    title: "Margherita Pizza",
    description:
      "Traditional Italian pizza topped with tomato sauce, mozzarella, and fresh basil",
    price: "$14.99",
    image:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia1.popsugar-assets.com%2Ffiles%2Fthumbor%2FoYivacUQxsjybVn80tgpJo2bahw%2Ffit-in%2F2048xorig%2Ffilters%3Aformat_auto-!!-%3Astrip_icc-!!-%2F2015%2F06%2F10%2F017%2Fn%2F1922398%2Fbc378e5c_shutterstock_93720934.jpg&f=1&nofb=1&ipt=b04515c1a1d2b9ae51c2e83cfa36d272fece278c9300ce1a3277503b5541bb19&ipo=images",
  },
  {
    title: "Pho",
    description:
      "Vietnamese noodle soup with beef or chicken, herbs, and spices",
    price: "$10.99",
    image:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fbetsylife.com%2Fwp-content%2Fuploads%2F2019%2F11%2Fpho.jpg&f=1&nofb=1&ipt=a1f5a6ae3803a387ae328196eb1c64b5f06e4594796b845e21c8b20a1014c3fc&ipo=images",
  },
  {
    title: "Shrimp Scampi",
    description: "Delicious pasta dish with shrimp in a garlic butter sauce",
    price: "$13.75",
    image:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fbigoven-res.cloudinary.com%2Fimage%2Fupload%2Ft_recipe-1280%2Fshrimp-scampi-85e084.jpg&f=1&nofb=1&ipt=4a129d920b0ceb569d6d2f1a09e37abc849b598db18a6c8a12eac7edb4f50b15&ipo=images",
  },
  {
    title: "Miso Soup",
    description:
      "Japanese soup made with miso paste and other ingredients like tofu and seaweed",
    price: "$5.50",
    image:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.lowcarbingasian.com%2Fwp-content%2Fuploads%2F2019%2F06%2FTraditional-Japanese-Miso-Soup-LowCarbingAsian-Pic-2-1320x1320.jpg&f=1&nofb=1&ipt=3c6fa942d6f86ae97cf051bf4165000825b13e62e6d395549a5fd21cb64b9e9d&ipo=images",
  },
  {
    title: "Falafel Wrap",
    description:
      "Middle Eastern wrap filled with crispy falafel, vegetables, and tahini sauce",
    price: "$8.25",
    image:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.aRxthvzAkXzRyfOZBfLUhgHaG8%26pid%3DApi&f=1&ipt=e573876b457e91262dda194bbb0cddf67341d895e0611dc3a68295160ec84ac3&ipo=images",
  },
  {
    title: "Butter Chicken",
    description:
      "A classic Indian dish made with tender chicken in a creamy tomato-based sauce",
    price: "$12.50",
    image:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.licious.in%2Fblog%2Fwp-content%2Fuploads%2F2020%2F10%2Fbutter-chicken--750x750.jpg&f=1&nofb=1&ipt=77a206879962d95140a104dc6b3fbc140045f95670d82b8998e1bf9d2a5fbb93&ipo=images",
  },
  {
    title: "Pad Thai",
    description:
      "A popular Thai stir-fried noodle dish with peanuts and vegetables",
    price: "$9.99",
    image:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.0orLBtmIrVseIGbvoUUWsgHaGl%26pid%3DApi&f=1&ipt=cee7d9bc1ec88d7d9627349d1f2631a1d33ea65b1ac4032220cd44d9eeeec2f4&ipo=images",
  },
  {
    title: "Sushi Rolls",
    description: "Freshly made sushi rolls with a variety of fillings",
    price: "$8.75",
    image:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimagesvc.meredithcorp.io%2Fv3%2Fmm%2Fimage%3Furl%3Dhttps%3A%252F%252Fstatic.onecms.io%252Fwp-content%252Fuploads%252Fsites%252F9%252F2013%252F12%252F06%252F201103-xl-sushi-rolls.jpg&f=1&nofb=1&ipt=0e7dc8b5749575f5f5c6a95d8c60d895c6008bfec7f3f5c477bc95bf4e7a5cc1&ipo=images",
  },
];

export default function RestaurantDetail({ route, navigation }) {
  return (
    <View style={{ flex: 1 }}>
      {/* Set a background color for the status bar */}
      <StatusBar />
      <About route={route} />
      <Divider width={1.8} style={{ marginVertical: 10 }} />
      <MenuItems restaurantName={route.params.name} food={foods} />
      <ViewCart navigation={navigation} restaurantName={route.params.name} />
    </View>
  );
}
