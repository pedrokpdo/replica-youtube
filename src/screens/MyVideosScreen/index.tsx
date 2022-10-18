import { MaterialIcons } from "@expo/vector-icons";
import React, { useState } from "react";
import { Image, TouchableOpacity, View } from "react-native";
import { ContainerComponent } from "../../components/funcionais/ContainerComponent";
import { Row } from "../../components/funcionais/RowComponent";
import { Space } from "../../components/funcionais/SpaceComponent";
import { Text } from "../../components/funcionais/TextComponent";
import { Title } from "../../components/funcionais/TitleComponent";
import { MainHeaderComponent } from "../../components/MainHeaderComponent";
//@ts-ignore
import share from '../../assets/share.jpg'

export const MyVideosScreen = () => {
    const [focus, setFocus] = useState<any>('search')
    return (
        <ContainerComponent>
            <Space top={2}>
                <MainHeaderComponent name='Filmes e p...' />
            </Space>
            <Row top={1}>
                <TouchableOpacity onPress={() => { setFocus('search') }} style={{ alignItems: 'center', flex: 1, borderBottomWidth: focus === 'search' ? 1 : 0, borderBottomColor: 'black', padding: 9 }}>
                    <Title>PROCURAR</Title>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { setFocus('buy') }} style={{ alignItems: 'center', flex: 1, borderBottomWidth: focus === 'buy' ? 1 : 0, borderBottomColor: 'black', padding: 9 }}>
                    <Title>COMPRADO</Title>
                </TouchableOpacity>
            </Row>
            <Space>
                {focus === 'search' ? (
                    <View>
                        <Image source={share} style={{ width: 300, resizeMode: 'center', height: 300 }}/>
                    </View>
                ) : (
                    <View style={{ alignItems: 'center', marginTop: 80 }}>
                        <MaterialIcons name="label" size={180} color='#dadada' />
                        <Title style={{ textAlign: 'center' }}>Não há nenhuma compra</Title>
                        <Text style={{ textAlign: 'center', width: 290 }}>Os filmes e programas que você alugar aparecerão neste local</Text>
                    </View>
                )}
            </Space>
        </ContainerComponent >
    )
}