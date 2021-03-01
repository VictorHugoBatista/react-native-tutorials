import React from 'react';
import { Button, Image, ImageBackground, StyleSheet, View, Text } from 'react-native';

function WelcomeScreen({ navigation }) {
    const navigationItems = [
        {
            text: 'Image screen',
            screen: 'Image',
            style: styles.loginButton,
        },
        {
            text: 'Layout screen',
            screen: 'Layouts',
            style: styles.registerButton,
        },
    ];

    return (
        <ImageBackground
            style={styles.background}
            source={require('../assets/background.jpg')}>

            <View style={[styles.logoContainer]}>
                <Image style={styles.logo} source={require('../assets/logo-red.png')} />
                <Text>Do what you want</Text>
            </View>

            {navigationItems.map(((item, key) => 
                <View key={key} style={[styles.button, item.style]}>
                    <Button title={item.text} onPress={() => navigation.navigate(item.screen)}></Button>
                </View>
            ))}
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'flex-end',
    },
    logoContainer: {
        alignItems: 'center',
        position: 'absolute',
        top: 50,
        width: '100%',
    },
    logo: {
        height: 100,
        width: 100,
    },
    button: {
        alignItems: 'center',
        fontWeight: 'bold',
        height: 70,
        justifyContent: 'center',
        width: '100%',
    },
    loginButton: {
        backgroundColor: '#fc5c65',
    },
    registerButton: {
        backgroundColor: '#4ecdc4',
    },
})

export default WelcomeScreen;