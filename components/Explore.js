import { View, Text, FlatList, Image } from "react-native";
import React from "react";
import { explore } from "../Shared/Data";

export default function Explore() {
  return (
    <View
      style={{
        backgroundColor: "white",
        paddingHorizontal: 14,
        paddingVertical: 10,
      }}
    >
      <Text style={{ fontSize: 20, fontWeight: "700" }}>
        Explore Bangladesh
      </Text>
      <Text style={{ opacity: 0.7, fontSize: 15 }}>
        These popular destinations have a lot to offer
      </Text>
      <FlatList
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        data={explore}
        renderItem={({ item }) => {
          return (
            <View style={{ paddingVertical: 20, marginRight: 10 }}>
              <Image
                source={item.image}
                style={{ height: 120, width: 140, borderRadius: 8 }}
              />
              <Text style={{ fontWeight: "bold", paddingVertical: 7 }}>
                {item.title}
              </Text>
              <Text>{item.properties}</Text>
            </View>
          );
        }}
      />
    </View>
  );
}
