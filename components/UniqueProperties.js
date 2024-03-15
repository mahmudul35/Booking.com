import { View, Text, FlatList, Image } from "react-native";
import React from "react";
import { explore } from "../Shared/Data";
export default function UniqueProperties() {
  return (
    <View
      style={{
        paddingHorizontal: 14,
        marginTop: 15,
        backgroundColor: "white",
        borderRadius: 10,
        shadowColor: "black",
        shadowOffset: { width: 10, height: 10 },
      }}
    >
      <Text style={{ fontSize: 20, fontWeight: "700" }}>
        Stay at our to unique properties
      </Text>
      <Text style={{ fontSize: 15, opacity: 0.7 }}>
        From castles and villas to boats and igloos, we have it all
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
