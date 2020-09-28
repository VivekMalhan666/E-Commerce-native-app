import React from "react";
import { View, Text } from "react-native";
import Banner from "../components/Banner";
import Row from "../components/Row";
import Nav from "../components/Nav";

function Home() {
  return (
    <View>
      <Nav />
      <Banner />
      <Row />
    </View>
  );
}

export default Home;
