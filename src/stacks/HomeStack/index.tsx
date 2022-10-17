import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import { View } from 'react-native'
import { HomeScreen } from '../../screens/HomeScreen'
import { VideoScreen } from '../../screens/VideoScreen'

const { Navigator, Screen } = createNativeStackNavigator()

export const HomeStack = () => {
    return (
        <Navigator screenOptions={{ headerShown: false }}>
            <Screen name='HomeScreen' component={HomeScreen} />
            <Screen name='VideoScreen' component={VideoScreen} />
        </Navigator>
    )
}