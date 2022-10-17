import React from "react";
import { Row } from "../funcionais/RowComponent";
import { Text } from "../funcionais/TextComponent";
import { Title } from "../funcionais/TitleComponent";

export const LinkRowComponent = ({Icon, iconName, text}) => {
    return (
        <Row top={2}>
            <Icon name={iconName} size={24} color={'black'}/>
            <Title style={{ marginLeft: 16 }}>{text}</Title>
        </Row>
    )
}