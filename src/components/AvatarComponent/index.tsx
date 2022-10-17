import React from "react";

import { View } from 'react-native'
import { Text } from "../funcionais/TextComponent";

export const AvatarComponent = () => {
    return (
        <View style={{ backgroundColor: 'blue', width: 32, height: 32, borderRadius: 32, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ color: 'white' }}>P</Text>
        </View>
    )
}