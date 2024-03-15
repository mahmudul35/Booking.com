import { View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Divider } from "@rneui/themed";
import { FontAwesome } from "@expo/vector-icons";
import React from "react";

export default function CheckMark() {
  return (
    <View
      style={{
        paddingVertical: 10,
        backgroundColor: "white",
        borderRadius: 10,
      }}
    >
      {/* first para */}
      <View
        style={{
          flexDirection: "row",
          gap: 20,

          marginBottom: 19,
          paddingHorizontal: 14,
        }}
      >
        <View>
          <Ionicons name="checkmark-sharp" size={24} color="black" />
        </View>
        <View>
          <Text style={{ fontWeight: "bold", fontSize: 16 }}>
            Book now, PAY AT THE PROPERTY
          </Text>
          <Text style={{ fontSize: 14, opacity: 0.7 }}>
            With FREE cancellation on most rooms
          </Text>
        </View>
      </View>
      <Divider />
      {/* 2nd para */}
      <View
        style={{
          flexDirection: "row",
          gap: 20,
          marginBottom: 19,
          marginTop: 10,
          paddingHorizontal: 14,
        }}
      >
        <View>
          <Ionicons name="checkmark-sharp" size={24} color="black" />
        </View>
        <View>
          <Text style={{ fontWeight: "bold", fontSize: 16 }}>
            2,563,380 properties in 228 countries
          </Text>
          <Text style={{ fontSize: 14, opacity: 0.7 }}>
            Hotels, guesthouse, motels, and more...
          </Text>
        </View>
      </View>
      <Divider />
    </View>
  );
}
