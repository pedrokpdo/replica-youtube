import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import { View } from 'react-native'
import { ChanelScreen } from '../../screens/ChanelScreen'
import { HomeScreen } from '../../screens/HomeScreen'
import { NotificationListScreen } from '../../screens/NotificationListScreen'
import { ProfileScreen } from '../../screens/ProfileScreen'
import { VideoScreen } from '../../screens/VideoScreen'

const { Navigator, Screen } = createNativeStackNavigator()

export const HomeStack = () => {
    return (
        <Navigator screenOptions={{ headerShown: false }}>
            <Screen name='HomeScreen' component={HomeScreen} />
            <Screen name='VideoScreen' component={VideoScreen} />
            <Screen name='ProfileScreen' component={ProfileScreen} />
            <Screen name='NotificationListScreen' component={NotificationListScreen} />
            <Screen name='ChanelScreen' component={ChanelScreen} />
        </Navigator>
    )
}