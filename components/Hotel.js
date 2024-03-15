import { View, Text, ImageBackground } from "react-native";
import React from "react";
import AppColor from "../Shared/AppColor";

export default function Hotel() {
  return (
    <View style={{ paddingHorizontal: 14, marginTop: 10 }}>
      <ImageBackground
        source={require("./../assets/hotel.jpg")}
        borderRadius={8}
        style={{ height: 250 }}
      >
        <View
          style={{
            flexDirection: "column",
            width: 150,
            marginTop: 60,
            marginLeft: 10,
            justifyContent: "flex-start",
          }}
        >
          <Text style={{ color: "white" }}>Vacation rentals</Text>
          <Text
            style={{
              color: "white",
              fontSize: 18,
              fontWeight: "700",
              lineHeight: 25,
            }}
          >
            Your big adventure needs a home base
          </Text>
          <View
            style={{
              backgroundColor: AppColor.Cerulean,
              borderRadius: 6,
              marginTop: 15,
              width: 120,
              paddingHorizontal: 8,
              paddingVertical: 8,
            }}
          >
            <Text
              style={{ color: "white", textAlign: "center", fontWeight: "600" }}
            >
              Finds yours here
            </Text>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}
