import React from "react";
import { Row } from "../funcionais/RowComponent";
import { Text } from "../funcionais/TextComponent";
import { Title } from "../funcionais/TitleComponent";

export const LinkRowComponent = ({Icon, iconName, text, color='black'}) => {
    return (
        <Row top={2}>
            <Icon name={iconName} size={24} color={color}/>
            <Title style={{ marginLeft: 16, color: color }}>{text}</Title>
        </Row>
    )
}