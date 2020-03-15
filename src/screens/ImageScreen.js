import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ImageDetail from '../components/ImageDetail';

const ImageScreen = () => {
    return (
        <View>
            <ImageDetail title="Forest" imgScore="9" imgSrc={require('../../assets/forest.jpg')}/>
            <ImageDetail title="Mountains" imgScore="4" imgSrc={require('../../assets/mountain.jpg')} />
            <ImageDetail title="Beach" imgScore="1" imgSrc={require('../../assets/beach.jpg')}/>
        </View>
    )
};

const styles = StyleSheet.create({});

export default ImageScreen;