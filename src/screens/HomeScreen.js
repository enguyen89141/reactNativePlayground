import React from "react";
import { View, Button, Text, StyleSheet, TouchableOpacity } from "react-native";

const HomeScreen = props => {
  return (<View>
    <Text style={styles.text}>Hi There!</Text>
    <Button 
      title="Go to Components Demo"
      onPress={() => props.navigation.navigate("Components")}
      />
    <TouchableOpacity onPress={() => props.navigation.navigate("List")}>
      <Text>Go to List demo</Text>
    </TouchableOpacity>
  </View>)
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
