import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

function Nav() {
  return (
    <View style={styles.header}>
      <Text style={styles.header__text}>Shopping Cart</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  header: {
    backgroundColor: "#E91E63",
    alignItems: "center",
    justifyContent: "center",
    borderBottomWidth: 10,
    borderBottomColor: "#ddd",
  },
  header__text: {
    color: "white",
    fontSize: 18,
    padding: 26,
  },
});
export default Nav;
