import React from "react";
import { SafeAreaView, Text, StyleSheet } from "react-native";

const UploadImageStatus = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Hello World</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5fcff",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default UploadImageStatus;
