import React from "react";
import { ScrollView, Text, StyleSheet, Image } from "react-native";

function Row() {
  return (
    <ScrollView style={styles.row}>
      <Text>These are the rows</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  row: {
    flex: 1,
    marginBottom: 100,
  },
});
export default Row;
