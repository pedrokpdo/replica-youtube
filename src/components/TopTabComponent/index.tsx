import React from "react";
import { View } from "react-native";
import { Row } from "../funcionais/RowComponent";
import { Text } from "../funcionais/TextComponent";
import { Title } from "../funcionais/TitleComponent";

export const TopTabComponent = () => {
    return (
        <Row style={{ justifyContent: 'space-around' }}>
            <View style={{ borderBottomColor: 'black', borderBottomWidth: 2, alignItems: 'center', justifyContent: 'center', width: 80 }}>
                <Text bottom={.5}>INICIO</Text>
            </View>
            <View style={{ borderBottomColor: 'black', borderBottomWidth: 0, alignItems: 'center', justifyContent: 'center', width: 80 }}>
                <Text bottom={.5}>VIDEOS</Text>
            </View>
            <View style={{ borderBottomColor: 'black', borderBottomWidth: 0, alignItems: 'center', justifyContent: 'center', width: 80 }}>
                <Text bottom={.5}>PLAYLISTS</Text>
            </View>
            <View style={{ borderBottomColor: 'black', borderBottomWidth: 0, alignItems: 'center', justifyContent: 'center', width: 80 }}>
                <Text bottom={.5}>CANAL</Text>
            </View>
        </Row>
    )
}