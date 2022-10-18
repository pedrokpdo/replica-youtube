import React from "react";
import { View } from 'react-native'
import { Row } from "../funcionais/RowComponent";
import { Text } from "../funcionais/TextComponent";
import { MaterialIcons } from '@expo/vector-icons'

export const CardsListRowComponent = ({ focus, setFocus }) => {
    return (
        <Row>
            <View style={{ backgroundColor: focus === 'explore' ? 'gray' : '#dbdbdb', height: 30, paddingHorizontal: 8, marginRight: 16, borderRadius: 16, alignItems: 'center', justifyContent: 'center' }}>
                <MaterialIcons name='explore' size={24} color={focus === 'explore' ? 'white' : 'black'} />
            </View>
            <View style={{ backgroundColor: focus === 'all' ? 'gray' : '#dbdbdb', height: 30, paddingHorizontal: 16, marginRight: 16, borderRadius: 16, alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ color: focus === 'all' ? 'white' : 'black' }}>Tudo</Text>
            </View>
            <View style={{ backgroundColor: focus === 'mixes' ? 'gray' : '#dbdbdb', height: 30, paddingHorizontal: 16, marginRight: 16, borderRadius: 16, alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ color: focus === 'mixes' ? 'white' : 'black' }}>Mixes</Text>
            </View>
            <View style={{ backgroundColor: focus === 'musics' ? 'gray' : '#dbdbdb', height: 30, paddingHorizontal: 16, marginRight: 16, borderRadius: 16, alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ color: focus === 'musics' ? 'white' : 'black' }}>Músicas</Text>
            </View>
            <View style={{ backgroundColor: focus === 'games' ? 'gray' : '#dbdbdb', height: 30, paddingHorizontal: 16, marginRight: 16, borderRadius: 16, alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ color: focus === 'games' ? 'white' : 'black' }}>Jogos</Text>
            </View>
        </Row>
    )
}