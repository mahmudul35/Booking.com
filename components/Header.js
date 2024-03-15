import {
  View,
  Text,
  StatusBar,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import AppColor, { Appcolor } from "./../Shared/AppColor";
import { FontAwesome5 } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
export default function Header() {
  return (
    <View
      style={{
        paddingHorizontal: 14,
        paddingVertical: 12,
        backgroundColor: AppColor.primaryColor,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <StatusBar backgroundColor={AppColor.primaryColor} />
        <Text style={{ color: "white", fontSize: 20, fontWeight: "700" }}>
          Booking.com
        </Text>
        <View style={{ flexDirection: "row", gap: 25 }}>
          <FontAwesome5 name="user-circle" size={24} color="white" />
          <Ionicons name="menu-outline" size={24} color="white" />
        </View>
      </View>
      <ScrollView horizontal={true} style={{ marginTop: 20 }}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: AppColor.Cerulean,
            paddingHorizontal: 12,
            marginRight: 10,

            borderRadius: 50,
          }}
        >
          <Ionicons name="bed-outline" size={20} color="white" />
          <Text style={{ color: "white", marginLeft: 6 }}>Stays</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",

            paddingHorizontal: 12,
            paddingVertical: 10,
          }}
        >
          <Ionicons name="airplane-outline" size={28} color="white" />
          <Text style={{ color: "white", marginLeft: 6 }}>Flights</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",

            paddingHorizontal: 12,
            paddingVertical: 10,
          }}
        >
          <FontAwesome name="car" size={24} color="white" />
          <Text style={{ color: "white", marginLeft: 6 }}>Car rentals</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",

            paddingHorizontal: 12,
            paddingVertical: 10,
          }}
        >
          <MaterialIcons name="attractions" size={24} color="white" />
          <Text style={{ color: "white", marginLeft: 6 }}>Attractions</Text>
        </View>
        <TouchableOpacity
          style={{
            flexDirection: "row",
            alignItems: "center",

            paddingHorizontal: 12,
            paddingVertical: 10,
          }}
        >
          <MaterialCommunityIcons name="taxi" size={24} color="white" />
          <Text style={{ color: "white", marginLeft: 6 }}>Airpot taxis</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}
