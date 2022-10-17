import React from "react";
import { View } from 'react-native'
import { Divider } from "../funcionais/Divider";
import { FullCard } from "../funcionais/FullCard";
import { Row } from "../funcionais/RowComponent";
import { Text } from "../funcionais/TextComponent";
import { Ionicons, MaterialIcons } from '@expo/vector-icons'

export const CardsListRowComponent = () => {
    return (
        <Row>
            <View style={{ backgroundColor: 'gray', height: 30, paddingHorizontal: 8, marginRight: 16, borderRadius: 16, alignItems: 'center', justifyContent: 'center' }}>
                <Row style={{ backgroundColor: 'gray', height: 30, paddingHorizontal: 8, marginRight: 16, borderRadius: 16, alignItems: 'center', justifyContent: 'center' }}>
                    <MaterialIcons name='explore' size={24} color='white' />
                    <Text style={{ color: 'white' }}>Explorar</Text>
                </Row>
            </View>
            <View style={{ backgroundColor: 'gray', height: 30, paddingHorizontal: 16, marginRight: 16, borderRadius: 16, alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ color: 'white' }}>Explorar</Text>
            </View>
            <View style={{ backgroundColor: 'gray', height: 30, paddingHorizontal: 16, marginRight: 16, borderRadius: 16, alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ color: 'white' }}>Explorar</Text>
            </View>
            <View style={{ backgroundColor: 'gray', height: 30, paddingHorizontal: 16, marginRight: 16, borderRadius: 16, alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ color: 'white' }}>Explorar</Text>
            </View>
            <View style={{ backgroundColor: 'gray', height: 30, paddingHorizontal: 16, marginRight: 16, borderRadius: 16, alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ color: 'white' }}>Explorar</Text>
            </View>
        </Row>
    )
}