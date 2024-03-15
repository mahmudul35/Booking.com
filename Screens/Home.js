import { View, Text, ScrollView } from "react-native";
import React from "react";
import Header from "../components/Header";
import Search from "../components/Search";
import Hotel from "../components/Hotel";
import Offers from "../components/Offers";
import Explore from "../components/Explore";
import Planner from "../components/Planner";
import UniqueProperties from "../components/UniqueProperties";
import Sign from "../components/Sign";
import CheckMark from "../components/CheckMark";
import Rent from "../components/Rent";
import DiscoverHomes from "../components/DiscoverHomes";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <View>
      <ScrollView>
        <Header />

        <Search />
        <Hotel />
        <Offers />
        <Explore />
        <Planner />
        <UniqueProperties />
        <DiscoverHomes />
        <CheckMark />
        <Sign />
        <Rent />
        <Footer />
      </ScrollView>
    </View>
  );
}
