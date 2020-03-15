import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native'

const ImageDetail = ({ title, imgSrc, imgScore }) => {
    return (<View>
        <Image source={imgSrc} />
        <Text>{title}</Text>
        <Text>Image score {imgScore}</Text>
    </View>
    );
}

const styles = StyleSheet.create({});

export default ImageDetail;