import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import { LibaryScreen } from '../../screens/LibaryScreen'
import { ShortsScreen } from '../../screens/ShortsScreen'

const { Navigator, Screen } = createNativeStackNavigator()

export const LibaryStack = () => {
    return (
        <Navigator screenOptions={{ headerShown: false }}>
            <Screen name='LibaryScreen' component={LibaryScreen} />
        </Navigator>
    )
}