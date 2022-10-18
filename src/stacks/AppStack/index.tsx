import { EvilIcons, Ionicons, MaterialCommunityIcons, SimpleLineIcons } from '@expo/vector-icons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'
import { HomeStack } from '../HomeStack'
import { InscribeStack } from '../InscribeStack'
import { LibaryStack } from '../LibaryStack'
import { ShortsStack } from '../ShortsStack'

const { Screen, Navigator } = createBottomTabNavigator()

export const AppStack = () => {
    return (

        <Navigator screenOptions={{ headerShown: false, tabBarLabelStyle: { marginBottom: 4 } }} >
            <Screen
                name='HomeStack'
                component={HomeStack}
                options={{
                    tabBarIcon: ({ color }) =>
                        (<Ionicons name='home-outline' size={24} color={color} />),
                    title: 'Home'
                }} />
            <Screen
                name='ShortsStack'
                component={ShortsStack}
                options={{
                    tabBarIcon: ({ color }) => (<MaterialCommunityIcons name='youtube-tv' size={24} color={color} />),
                    title: 'Shorts'
                }} />
            <Screen
                name='MoreStack'
                component={ShortsStack}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Ionicons name='add' size={40} color={color} />
                    ),
                    title: ''

                }} />
            <Screen
                name='InscribeStack'
                component={InscribeStack}
                options={{
                    tabBarIcon: ({ color }) => (<MaterialCommunityIcons name='youtube-subscription' size={24} color={color} />),
                    title: 'Inscrições'
                }} />
            <Screen
                name='LibaryStack'
                component={LibaryStack}
                options={{
                    tabBarIcon: ({ color }) => (<SimpleLineIcons name='social-youtube' size={24} color={color} />),
                    title: 'Biblioteca',
                }} />
        </Navigator>
    )
}