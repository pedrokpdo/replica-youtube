import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import { InscribeScreen } from '../../screens/InscribeScreen'

const { Navigator, Screen } = createNativeStackNavigator()

export const InscribeStack = () => {
    return (
        <Navigator screenOptions={{ headerShown: false }}>
            <Screen name='InscribeScreen' component={InscribeScreen} />
        </Navigator>
    )
}