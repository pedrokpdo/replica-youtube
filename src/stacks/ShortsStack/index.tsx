import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import { ShortsScreen } from '../../screens/ShortsScreen'

const { Navigator, Screen } = createNativeStackNavigator()

export const ShortsStack = () => {
    return (
        <Navigator screenOptions={{ headerShown: false }}>
            <Screen name='ShortsScreen' component={ShortsScreen} />
        </Navigator>
    )
}