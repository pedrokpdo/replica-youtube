import React from "react";
import { Image, Text, View } from "react-native";
import { Title } from "../funcionais/TitleComponent";

export const ProductComponent = ({ photo, name, describe }) => {
    return (
        <View>
            <Image style={{ width: 130, height: 200 }} source={photo} />
            <Title>{name}</Title>
            <Text>{describe}</Text>
            <Text style={{ color: 'green' }}>Comprar ou alugar</Text>
        </View>
    )
}