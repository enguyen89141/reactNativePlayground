import React from 'react';
import { Text, StyleSheet } from 'react-native';


const ComponentsScreen = () => {
    var secondText ='My name is Steven';
return (
    <>
        <Text style={styles.textStyle}>Getting started with React Native</Text>
        <Text style={styles.nameStyle}>{secondText}</Text>
    </>
)
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 45
    },
    nameStyle: {
        fontSize: 20
    }
});

export default ComponentsScreen;