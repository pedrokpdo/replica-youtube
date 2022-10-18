import { AntDesign } from "@expo/vector-icons";
import React from "react";
import { Dimensions, ImageBackground, View } from "react-native";
//@ts-ignore
import short from '../../assets/short.webp'
import { FullCard } from "../funcionais/FullCard";
import { Row } from "../funcionais/RowComponent";
import { Space } from "../funcionais/SpaceComponent";
import { Title } from "../funcionais/TitleComponent";
const { width, height } = Dimensions.get('screen')



export const ShortComponent = () => {
    return (
        <ImageBackground style={{ width: width, height: height }} source={short}>
            <Space>
                <Row style={{ alignItems: 'center', justifyContent: 'space-between' }}>
                    <Title top={1} style={{ color: 'white', fontSize: 30 }}>Shorts</Title>
                    <AntDesign name="search1" size={24} style={{ color: 'white' }} />
                </Row>
                <Row>
                    <FullCard>
                        <Row>
                            <AntDesign name="play" />
                            <Title>Inscrições</Title>
                        </Row>
                    </FullCard>
                </Row>
            </Space>
        </ImageBackground>
    )
}