import { AntDesign } from "@expo/vector-icons";
import React from "react";
import { View } from "react-native";
import { Row } from "../funcionais/RowComponent";
import { Text } from "../funcionais/TextComponent";

export const LikeComponent = () => {
    return (
        <Row style={{ justifyContent: 'space-around' }}>
            <View style={{ alignItems: 'center' }}>
                <AntDesign name="like2" size={24} color='black' />
                <Text>1200</Text>
            </View>
            <View style={{ alignItems: 'center' }}>
                <AntDesign name="dislike2" size={24} color='black' />
                <Text>Nao gostei</Text>
            </View>
            <View style={{ alignItems: 'center' }}>
                <AntDesign name="sharealt" size={24} color='black' />
                <Text>Compartilhar</Text>
            </View>
            <View style={{ alignItems: 'center' }}>
                <AntDesign name="download" size={24} color='black' />
                <Text>Download</Text>
            </View>
            <View style={{ alignItems: 'center' }}>
                <AntDesign name="addfile" size={24} color='black' />
                <Text>Salvar</Text>
            </View>
            {/* 
            
            
            salv */}
        </Row>
    )
}