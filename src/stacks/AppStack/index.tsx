import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'
import { HomeStack } from '../HomeStack'
import { InscribeStack } from '../InscribeStack'
import { LibaryStack } from '../LibaryStack'
import { ShortsStack } from '../ShortsStack'

const { Screen, Navigator } = createBottomTabNavigator()

export const AppStack = () => {
    return (

        <Navigator screenOptions={{ headerShown: false }}>
            <Screen name='HomeStack' component={HomeStack} />
            <Screen name='ShortsStack' component={ShortsStack} />
            <Screen name='InscribeStack' component={InscribeStack} />
            <Screen name='LibaryStack' component={LibaryStack} />
        </Navigator>
    )
}