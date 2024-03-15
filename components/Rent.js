import { View, Text } from "react-native";
import React from "react";
import { Divider } from "@rneui/base";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import AppColor from "../Shared/AppColor";
export default function Rent() {
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
          <FontAwesome name="car" size={24} color={AppColor.Cerulean} />
        </View>
        <View>
          <Text style={{ fontWeight: "bold", fontSize: 16 }}>Rent a Car</Text>
          <Text style={{ fontSize: 14, opacity: 0.7, width: 250 }}>
            Hundreds of car and 24hr customer service
          </Text>
        </View>
        <Entypo name="chevron-small-right" size={24} color="black" />
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
          <MaterialCommunityIcons
            name="taxi"
            size={24}
            color={AppColor.Cerulean}
          />
        </View>
        <View>
          <Text style={{ fontWeight: "bold", fontSize: 16 }}>
            Book a private airport taxi
          </Text>
          <Text style={{ fontSize: 14, opacity: 0.7, width: 250 }}>
            A driver will be waiting to take you to your stay
          </Text>
        </View>
        <Entypo name="chevron-small-right" size={24} color="black" />
      </View>
      <Divider />
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
          <MaterialIcons
            name="attractions"
            size={24}
            color={AppColor.Cerulean}
          />
        </View>
        <View>
          <Text style={{ fontWeight: "bold", fontSize: 16 }}>
            Find things to do
          </Text>
          <Text style={{ fontSize: 14, opacity: 0.7, width: 250 }}>
            Instant confirmation, digital tickets, and verified customer reviews
          </Text>
        </View>
        <Entypo name="chevron-small-right" size={24} color="black" />
      </View>
      <Divider />
    </View>
  );
}
