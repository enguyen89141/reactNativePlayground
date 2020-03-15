import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ImageDetail from '../components/ImageDetail';

const ImageScreen = () => {
    return (
        <View>
            <ImageDetail title="Forest"/>
            <ImageDetail title="Mountains"/>
            <ImageDetail title="Beach"/>
        </View>
    )
};

const styles = StyleSheet.create({});

export default ImageScreen;