import React from "react";
import { View } from "react-native";
import { AvatarComponent } from "../AvatarComponent";
import { Row } from "../funcionais/RowComponent";
import { Text } from "../funcionais/TextComponent";
import { Title } from "../funcionais/TitleComponent";

export const ChanelVideoComponent = ({name, inscribes}) => {
    return (
        <>
            <Row>
                <AvatarComponent/>
                <View style={{ marginLeft: 16 }}>
                    <Title>{name}</Title>
                    <Text>{inscribes}</Text>
                </View>
            </Row>
        </>
    )
}