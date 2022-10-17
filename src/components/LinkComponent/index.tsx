import React from "react";
import { TouchableOpacity } from "react-native";
import { Title } from "../funcionais/TitleComponent";

export const LinkComponent = ({ name, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <Title style={{ color: 'blue' }}>{name}</Title>
        </TouchableOpacity>
    )
}