import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import { LibaryScreen } from '../../screens/LibaryScreen'
import { MyFilmsScreen } from '../../screens/MyFilmsScreen'
import { MyVideosScreen } from '../../screens/MyVideosScreen'

const { Navigator, Screen } = createNativeStackNavigator()

export const LibaryStack = () => {
    return (
        <Navigator screenOptions={{ headerShown: false }}>
            <Screen name='LibaryScreen' component={LibaryScreen} />
            <Screen name='MyFilmsScreen' component={MyFilmsScreen} />
            <Screen name='MyVideosScreen' component={MyVideosScreen} />
        </Navigator>
    )
}