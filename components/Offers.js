import { View, Text, SafeAreaView, Image } from "react-native";
import React from "react";
import AppColor from "../Shared/AppColor";

export default function Offers() {
  return (
    <SafeAreaView>
      <View
        style={{
          marginTop: 10,
          marginBottom: 10,
          borderRadius: 8,
          backgroundColor: AppColor.offWhite,
        }}
      >
        <View
          style={{
            paddingHorizontal: 14,
          }}
        >
          <Text style={{ fontSize: 24, fontWeight: "700" }}>Offers</Text>
          <Text style={{ opacity: 0.7, fontSize: 15 }}>
            Promotions, deals, and special offers for you
          </Text>
          <View
            style={{
              backgroundColor: "white",
              paddingHorizontal: 14,
              marginTop: 15,
              borderRadius: 10,
              paddingVertical: 15,
              marginBottom: 15,
              borderBlockColor: "black",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <View style={{ width: "70%" }}>
              <Text style={{ fontWeight: "700", fontSize: 16 }}>
                New year, new adventures
              </Text>
              <Text>Save 15% or more on stays before April 1,2024</Text>
              <Text
                style={{
                  borderWidth: 1,
                  borderColor: AppColor.Cerulean,
                  color: AppColor.Cerulean,
                  paddingVertical: 5,
                  borderRadius: 5,
                  paddingHorizontal: 5,
                  width: 150,
                  marginTop: 15,
                }}
              >
                Find Early 2024 deals
              </Text>
            </View>
            <View>
              <Image
                source={require("./../assets/boat.jpg")}
                style={{ height: 60, width: 70 }}
              />
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
