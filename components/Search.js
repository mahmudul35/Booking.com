import { View, Text, TextInput } from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";
import AppColor from "../Shared/AppColor";

export default function Search() {
  return (
    <View style={{ paddingHorizontal: 14 }}>
      <Text style={{ fontSize: 25, fontWeight: "700", marginTop: 30 }}>
        Find your next stay
      </Text>
      <Text style={{ opacity: 0.8, lineHeight: 18 }}>
        Search deals on hotels, home, and much more...
      </Text>
      <View
        style={{
          //   height: 200,
          backgroundColor: AppColor.yellow,
          borderRadius: 10,
          marginTop: 30,
        }}
      >
        <View
          style={{
            backgroundColor: AppColor.offWhite,
            paddingHorizontal: 14,
            paddingVertical: 12,
            borderRadius: 6,
            margin: 5,
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Feather name="search" size={20} color="black" />
            <TextInput
              placeholder="Around current location"
              placeholderTextColor={"black"}
              style={{ marginLeft: 10, width: "100%" }}
            />
          </View>
        </View>
        <View style={{ flexDirection: "row" }}>
          <View
            style={{
              backgroundColor: AppColor.offWhite,
              paddingHorizontal: 14,
              paddingVertical: 12,
              width: "47%",
              borderRadius: 6,
              margin: 5,
            }}
          >
            <Text>check-in date</Text>
            <Text style={{ fontWeight: "500" }}>Wed, Mar 6,2024</Text>
          </View>
          <View
            style={{
              backgroundColor: AppColor.offWhite,
              paddingHorizontal: 14,
              paddingVertical: 12,
              borderRadius: 6,
              width: "47%",
              margin: 5,
            }}
          >
            <Text>check-out date</Text>
            <Text style={{ fontWeight: "500" }}>Wed, Mar 6,2024</Text>
          </View>
        </View>
        <View
          style={{
            backgroundColor: AppColor.offWhite,
            paddingHorizontal: 14,
            paddingVertical: 12,
            borderRadius: 6,
            margin: 5,
          }}
        >
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <View>
              <Text>Adults</Text>
              <Text>2</Text>
            </View>
            <View>
              <Text>Children</Text>
              <Text>2</Text>
            </View>
            <View>
              <Text>Rooms</Text>
              <Text>2</Text>
            </View>
          </View>
        </View>
        <View
          style={{
            backgroundColor: AppColor.primaryColor,
            paddingHorizontal: 14,
            paddingVertical: 12,
            borderRadius: 6,
            margin: 5,
          }}
        >
          <Text
            style={{
              color: "white",
              textAlign: "center",
              fontWeight: "700",
              fontSize: 16,
            }}
          >
            Search
          </Text>
        </View>
      </View>
    </View>
  );
}
