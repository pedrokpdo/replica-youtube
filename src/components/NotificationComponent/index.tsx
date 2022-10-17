import React from "react";
import { Image, View } from "react-native";
import { AvatarComponent } from "../AvatarComponent";
import { Row } from "../funcionais/RowComponent";
//@ts-ignore
import video2 from '../../assets/video2.jpg'
import { Title } from "../funcionais/TitleComponent";
import { Text } from "../funcionais/TextComponent";

export const NotificationComponent = ({photo}) => {
    return (
        <Row style={{ justifyContent: 'space-between' }}>
            <Row>
                <AvatarComponent/>
                <View style={{ width: 100, marginLeft: 16 }}>
                    <Title>Titulo do video é aqui</Title>
                    <Text>18738781 vizualizações</Text>
                </View>
            </Row>
            <Image source={photo} style={{ width: 150, height: 100 }}/>
        </Row>
    )
}