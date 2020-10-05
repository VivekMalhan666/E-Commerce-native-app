import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native";

function Footer() {
  return (
    <View style={styles.footer}>
      <TextInput
        style={styles.footer__text}
        placeholder=">Add New items"
        placeholderTextColor="white"
        underlineColorAndroid="transparent"
      ></TextInput>
      <TouchableOpacity style={styles.footer__button}>
        <Text style={styles.footer__buttonText}>+</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 10,
  },
  footer__button: {
    position: "absolute",
    zIndex: 11,
    right: 20,
    bottom: 80,
    backgroundColor: "#E91E63",
    width: 70,
    height: 70,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    elevation: 8,
  },
  footer__buttonText: {
    color: "#fff",
    fontSize: 24,
  },
  footer__text: {
    alignSelf: "stretch",
    color: "#fff",
    padding: 20,
    backgroundColor: "#252525",
    borderTopWidth: 2,
    borderBottomColor: "#ededed",
  },
});

export default Footer;
