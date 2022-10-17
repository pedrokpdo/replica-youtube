import React from "react";

import { View } from 'react-native'
import { Text } from "../funcionais/TextComponent";

export const AvatarComponent = ({ big = false }) => {
    return (
        <View style={{ backgroundColor: 'blue', width: big ? 50 : 32, height: big ? 50 : 32, borderRadius: 32, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ color: 'white', fontSize: big ? 24 : 14 }}>P</Text>
        </View>
    )
}