import { View, Text, Image } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome6 } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";
import React from "react";
import AppColor from "../Shared/AppColor";

export default function Planner() {
  return (
    <View
      style={{
        paddingHorizontal: 14,
        paddingBottom: 14,
        backgroundColor: AppColor.offWhite,
        shadowOffset: { width: 10, height: 10 },
      }}
    >
      <Text style={{ fontSize: 20, fontWeight: "700" }}>
        Quick and easy trip planner
      </Text>
      <Text style={{ opacity: 0.7, fontSize: 15 }}>
        Pick a vibe and explore the top destinations in Bangladesh
      </Text>
      <View
        style={{
          marginTop: 15,
          flexDirection: "row",
          justifyContent: "flex-start",
          gap: 30,
          alignItems: "center",
        }}
      >
        <View
          style={{
            borderWidth: 1,
            paddingHorizontal: 10,
            paddingVertical: 7,
            borderRadius: 50,
            borderColor: AppColor.Cerulean,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <MaterialCommunityIcons
              name="city-variant"
              size={24}
              color="black"
            />
            <Text style={{ marginLeft: 5 }}>City</Text>
          </View>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <FontAwesome6 name="umbrella-beach" size={24} color="black" />
          <Text style={{ marginLeft: 8 }}>Beach</Text>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <EvilIcons name="heart" size={24} color="black" />
          <Text style={{ marginLeft: 8 }}>Romance</Text>
        </View>
      </View>
      <View style={{ marginTop: 15 }}>
        <Image
          source={require("./../assets/dhaka.jpg")}
          style={{ height: 120, width: 140, borderRadius: 8 }}
        />
        <Text style={{ fontWeight: "700", marginTop: 5, fontSize: 18 }}>
          Dhaka
        </Text>
        <Text style={{ fontSize: 15, opacity: 0.7 }}>122km away</Text>
      </View>
    </View>
  );
}
