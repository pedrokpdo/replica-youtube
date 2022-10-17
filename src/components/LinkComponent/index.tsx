import React from "react";
import { TouchableOpacity } from "react-native";
import { Text } from "../funcionais/TextComponent";
import { Title } from "../funcionais/TitleComponent";

export const LinkComponent = ({ name, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <Text style={{ color: 'blue' }}>{name}</Text>
        </TouchableOpacity>
    )
}