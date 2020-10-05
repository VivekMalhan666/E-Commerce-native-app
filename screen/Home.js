import React from "react";
import { View, StyleSheet } from "react-native";
import Banner from "../components/Banner";
import Row from "../components/Row";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

function Home() {
  return (
    <View style={styles.container}>
      <Nav />
      <Banner />
      <Row />
      <Footer />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Home;
