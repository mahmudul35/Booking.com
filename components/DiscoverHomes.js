import { View, Text, Image } from "react-native";
import React from "react";
import AppColor from "../Shared/AppColor";

export default function DiscoverHomes() {
  return (
    <View
      style={{
        paddingHorizontal: 14,
        paddingVertical: 14,
        backgroundColor: AppColor.offWhite,
        marginBottom: 15,
      }}
    >
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <Image
          source={require("./../assets/imgg.png")}
          style={{ height: 150, width: 200 }}
        />
        <Text style={{ fontWeight: "bold" }}>Find</Text>
        <Text style={{ fontWeight: "bold" }}>homes</Text>
        <Text style={{ fontWeight: "bold" }}>for your next trip</Text>
      </View>
      <View
        style={{
          marginTop: 10,
          padding: 10,
          borderWidth: 1,
          borderColor: AppColor.Cerulean,
          borderRadius: 6,
        }}
      >
        <Text style={{ color: AppColor.Cerulean, textAlign: "center" }}>
          Discover homes
        </Text>
      </View>
    </View>
  );
}
