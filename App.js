import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import WelcomeScreen from './app/screen/WelcomeScreen';
import ViewImageScreen from './app/screen/ViewImageScreen';
import LayoutsScreen from './app/screen/LayoutsScreen';

const Stack = createStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={WelcomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Image" component={ViewImageScreen} />
        <Stack.Screen name="Layouts" component={LayoutsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
