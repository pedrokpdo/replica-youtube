import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AppStack } from './src/stacks/AppStack';
import { HomeScreen } from './src/screens/HomeScreen';
import { StatusBar } from 'react-native';

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar hidden={false}/>
      <AppStack/>
    </NavigationContainer>
    );
}
