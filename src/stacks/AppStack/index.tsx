import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'
import { HomeStack } from '../HomeStack'
import { ShortsStack } from '../ShortsStack'

const { Screen, Navigator } = createBottomTabNavigator()

export const AppStack = () => {
    return (

        <Navigator screenOptions={{headerShown: false}}>
            <Screen name='HomeStack' component={HomeStack}/>
            <Screen name='ShortsStack' component={ShortsStack}/>
        </Navigator>
    )
}