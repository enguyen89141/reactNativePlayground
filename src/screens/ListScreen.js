import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';


const ListScreen = () => {
    const friends = [
        { name: 'Friend 1', age: 10},
        { name: 'Friend 10', age: 20 },
        { name: 'Friend 100', age: 30 },
        { name: 'Friend 1000', age:  40 },
        { name: 'Friend 10000', age: 50 },
        { name: 'Friend 100000', age: 60},
        { name: 'Friend 1000000', age: 70 },
    ];

    return (
        <FlatList
            keyExtractor={(friend) => friend.name}
            data={friends}
            renderItem={({ item }) => {
                return (
                    <Text style={styles.textStyle}>
                        {item.name} - Age {item.age}
                    </Text>
                )
            }}
        />
    )
}

const styles = StyleSheet.create({
    textStyle: {
        marginVertical: 40,
        marginHorizontal: 10
    }

});

export default ListScreen;