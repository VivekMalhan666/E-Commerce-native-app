import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

function Banner() {
  return (
    <View style={styles.banner}>
      <Text style={styles.banner__text}>This is Banner</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  banner: {
    flex: 1,
  },
  banner__text: {},
});

export default Banner;
