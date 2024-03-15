import { View, Text, Image } from "react-native";
import React from "react";
import AppColor from "../Shared/AppColor";
import { Divider } from "@rneui/base";

export default function Sign() {
  return (
    <View style={{ paddingHorizontal: 8, paddingVertical: 15 }}>
      <View
        style={{
          backgroundColor: AppColor.primaryColor,
          height: 200,
          padding: 10,
          borderRadius: 9,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <View style={{ width: "70%", justifyContent: "center" }}>
          <Text
            style={{
              color: "white",
              fontWeight: "700",
              marginBottom: 10,
              fontSize: 15,
            }}
          >
            Sign in to save!
          </Text>
          <Text style={{ color: "white", marginBottom: 20, lineHeight: 20 }}>
            You're already a Genius member. To save on your next trip, all you
            have to do is sign in
          </Text>
          <View
            style={{
              backgroundColor: AppColor.Cerulean,
              borderRadius: 10,
              paddingHorizontal: 5,
              paddingVertical: 9,
              width: 70,
            }}
          >
            <Text
              style={{ textAlign: "center", color: "white", fontWeight: "700" }}
            >
              Sign in
            </Text>
          </View>
        </View>
        <View style={{ justifyContent: "center" }}>
          <Image
            source={require("./../assets/sylhet.jpg")}
            style={{
              height: 80,
              width: 80,
              borderRadius: 50,
            }}
          />
          <Text style={{ color: "white", fontSize: 26, fontWeight: "700" }}>
            Genius
          </Text>
        </View>
      </View>
      <Divider />
    </View>
  );
}
