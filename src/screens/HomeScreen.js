import React from "react";
import { View, Button, Text, StyleSheet } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (<View>
    <Text style={styles.text}>Hi There!</Text>
    <Button
      title="Go to Components Demo"
      onPress={() => navigation.navigate("Components")}
    />
    <Button
      title="List Demo"
      onPress={() => navigation.navigate("List")}
    />
    <Button
      title="Image Demo"
      onPress={() => navigation.navigate("Images")}
    />
    <Button
      title="Counter Demo"
      onPress={() => navigation.navigate("Counter")}
    />
  </View>)
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
