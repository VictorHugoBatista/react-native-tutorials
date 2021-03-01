import React from 'react';
import { StyleSheet, Text, Image, View, SafeAreaView, Button, Alert } from 'react-native';
import { useDeviceOrientation } from '@react-native-community/hooks';

function LayoutsScreen(props) {
    const { landscape } = useDeviceOrientation();

    const showAlert = () => {
      Alert.alert('My title', 'My message', [
        {text: 'Yes'},
        {text: 'No'},
      ])
    };
  
    const container = {
      flexDirection: landscape ? 'row' : 'column',
    };
  
    const column = StyleSheet.create({
      flex: 1,
    });

    return (
        <SafeAreaView style={[styles.container, container]}>
        <View style={[{backgroundColor: 'green'}, column]}>
            <Text>Hello world!</Text>
            <Image
            blurRadius={1}
            source={{uri: 'https://picsum.photos/200/300', width: 200, height: 300}} />
        </View>
        <View style={[{backgroundColor: 'blue'}, column]}>
            <Button
            title="Click me"
            onPress={showAlert} />
        </View>
        </SafeAreaView>
    );
}

export default LayoutsScreen;

const styles = StyleSheet.create({
    container: {
      // flexDirection: 'row',
      flex: 1,
      backgroundColor: '#fff',
    },
});
