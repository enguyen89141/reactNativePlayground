import React from "react";
import { View, Button, Text, StyleSheet } from "react-native";

const HomeScreen = () => {
  return (<View>
    <Text style={styles.text}>Hi There!</Text>
    <Button 
      title="Go to Components Demo"
      onPress={() => console.log("button pressed")}
      />
  </View>)
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
