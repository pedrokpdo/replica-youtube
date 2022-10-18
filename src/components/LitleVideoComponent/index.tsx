import React from "react";
import { Dimensions, Image, ImageBackground, View } from "react-native";
import { Row } from "../funcionais/RowComponent";
import { Text } from "../funcionais/TextComponent";
import { Title } from "../funcionais/TitleComponent";
//@ts-ignore
import video from '../../assets/video.jpg'
const { width } = Dimensions.get('screen')

export const LitleVideoComponent = () => {
    return (
        <View style={{ width: width / 2 - 40 }}>
            <ImageBackground source={video} style={{ width: width / 2 - 50, height: 100 }}>
                <Row style={{ position: 'absolute', bottom: 8, right: 8 }}>
                    <Text style={{ color: 'white', backgroundColor: 'black' }}>1.42</Text>
                </Row>
            </ImageBackground>
            <View style={{ width: width / 2 - 32, height: 100 }}>
                <Title>Patrulha canina em portugues</Title>
                <Text>3,489 mi vizualizações há 4 min</Text>
            </View>
        </View>
    )
}