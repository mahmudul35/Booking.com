import { View, Text } from "react-native";
import React from "react";
import AppColor from "../Shared/AppColor";
import { Divider } from "@rneui/base";

export default function Footer() {
  return (
    <View
      style={{
        height: 300,
        backgroundColor: AppColor.primaryColor,
        alignItems: "center",
      }}
    >
      <View
        style={{
          backgroundColor: "white",
          padding: 10,
          marginTop: 40,
          borderRadius: 6,
          width: 130,
        }}
      >
        <Text
          style={{
            color: AppColor.Cerulean,
            textAlign: "center",
            fontWeight: "400",
          }}
        >
          List your property
        </Text>
      </View>
      <View style={{ flexDirection: "row", gap: 10, marginTop: 20 }}>
        <Text style={{ color: "white" }}>Desktop Version</Text>
        <Divider />
        <Text style={{ color: "white" }}>Terms & conditions</Text>
      </View>
      <View style={{ flexDirection: "row", gap: 10, marginTop: 10 }}>
        <Text style={{ color: "white" }}>How we works</Text>
        <Text style={{ color: "white" }}>Privacy and cookies</Text>
      </View>
      <View style={{ flexDirection: "row", gap: 10, marginTop: 10 }}>
        <Text style={{ color: "white" }}>MSA statement</Text>
        <Text style={{ color: "white" }}>About Booking.com</Text>
      </View>
      <Text
        style={{
          color: "white",
          marginTop: 40,
          width: "90%",
          textAlign: "center",
        }}
      >
        Copyright © 1996-2024 Booking.com™. All rights reserved
      </Text>
      <Text style={{ color: "white", marginTop: 20 }}>
        Your reference ID is: ED39C2A
      </Text>
    </View>
  );
}
