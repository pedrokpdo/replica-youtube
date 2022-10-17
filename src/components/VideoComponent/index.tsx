import React from "react";
import { ImageBackground, View } from "react-native";
import { AvatarComponent } from "../AvatarComponent";
import { Row } from "../funcionais/RowComponent";
import { Space } from "../funcionais/SpaceComponent";
import { Text } from "../funcionais/TextComponent";
import { Title } from "../funcionais/TitleComponent";

export const VideoComponent = ({ photo, title, views, time, name }) => {
    return (
        <>
            <ImageBackground source={photo} style={{ height: 280}}>
                <Text style={{ position: 'absolute', bottom: 16, right: 16, backgroundColor: 'black', color: 'white' }}>{time}</Text>
            </ImageBackground>
            <Space top={2}>
                <Row>
                    <AvatarComponent />
                    <View style={{ marginLeft: 16 }}>
                        <Title style={{ fontSize: 18 }}>{title}</Title>
                        <Text style={{ fontSize: 12 }}>{name} - {views} mil visualizações - há 1 hora</Text>
                    </View>
                </Row>
            </Space>
        </>
    )
}