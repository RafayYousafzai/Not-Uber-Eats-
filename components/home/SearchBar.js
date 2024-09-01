import { View, Text } from "react-native";
import React from "react";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import Ionicons from "react-native-vector-icons/Ionicons";
import AntDesign from "react-native-vector-icons/AntDesign";

export default function SearchBar({ cityHandler }) {
  return (
    <View style={{ marginTop: 15, flexDirection: "row", paddingBottom: 10 }}>
      <GooglePlacesAutocomplete
        query={{ key: "" }}
        onPress={(data, details = null) => {
          console.log(data.description);
          const city = data.description.split(",")[0];
          cityHandler(city);
        }}
        placeholder="Search"
        styles={{
          textInput: {
            backgroundColor: "#eee",
            borderRadius: 20,
            fontWeight: "700",
            marginTop: 7,
            marginLeft: 20,
          },
          textInputContainer: {
            maxWidth: 400,
            alignSelf: "center",
            backgroundColor: "#eee",
            borderRadius: 50,
            flexDirection: "row",
            alignItems: "center",
            marginHorizontal: 10,
          },
        }}
        renderLeftButton={() => (
          <View>
            <Ionicons
              style={{ marginLeft: 20 }}
              name="location-sharp"
              size={24}
            />
          </View>
        )}
        renderRightButton={() => (
          <View
            style={{
              flexDirection: "row",
              marginRight: 8,
              backgroundColor: "white",
              padding: 9,
              borderRadius: 30,
              alignItems: "center",
            }}
          >
            <AntDesign
              name="clockcircle"
              size={11}
              style={{ margin: 3, fontSize: 14 }}
            />
            <Text>Search</Text>
          </View>
        )}
      />
    </View>
  );
}
