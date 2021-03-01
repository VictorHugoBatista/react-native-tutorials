import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

function ViewImageScreen() {
    return (
        <View style={styles.imageContainer}>
            <View style={[styles.icon, styles.iconClose]}></View>
            <View style={[styles.icon, styles.iconDelete]}></View>
            <Image
                resizeMode="contain"
                style={styles.image}
                source={require('../assets/chair.jpg')} />
        </View>
    );
}

const styles = StyleSheet.create({
    icon: {
        height: 50,
        width: 50,
        position: 'absolute',
        top: 30,
    },
    iconClose: {
        backgroundColor: '#fc5c65',
        left: 5,
    },
    iconDelete: {
        backgroundColor: '#4ecdc4',
        right: 5,
    },
    imageContainer: {
        backgroundColor: '#000',
        flex: 1,
        justifyContent: 'flex-end'
    },
    image: {
        height: '100%',
        width: '100%',
    },
});

export default ViewImageScreen;
