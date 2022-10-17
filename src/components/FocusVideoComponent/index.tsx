import { AntDesign, Entypo, Feather, Ionicons, MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { ImageBackground, View } from "react-native";
//@ts-ignore
import video from '../../assets/video.jpg'
import { Row } from "../funcionais/RowComponent";
import { Space } from "../funcionais/SpaceComponent";
import { Text } from "../funcionais/TextComponent";
import { Title } from "../funcionais/TitleComponent";

export const FocusVideoComponent = ({ videoName, description }) => {
    return (
        <>
            <ImageBackground style={{ height: 300 }} source={video}>
                <Space>
                    <Row top={1} style={{ justifyContent: 'space-between' }}>
                        <Ionicons name="caret-down" color={'white'} size={24} />
                        <Row style={{ width: 160, justifyContent: 'space-around' }}>
                            <Entypo name="switch" size={24} color={'white'} />
                            <Feather name="cast" size={24} color={'white'} />
                            <MaterialIcons name="closed-caption-off" size={24} color={'white'} />
                            <AntDesign name="setting" size={24} color={'white'} />
                        </Row>
                    </Row>
                    <Row top={11} style={{ alignItems: 'center', justifyContent: 'space-around', bottom: 0 }}>
                        <View style={{ backgroundColor: 'gray', padding: 8, borderRadius: 100, alignItems: 'center', justifyContent: 'center' }}>
                            <Ionicons name="play-back-sharp" color={'white'} size={32} />

                        </View>
                        <View style={{ backgroundColor: 'gray', padding: 8, borderRadius: 100, alignItems: 'center', justifyContent: 'center' }}>
                            <Ionicons name="play" color={'white'} size={32} />
                        </View>
                        <View style={{ backgroundColor: 'gray', padding: 8, borderRadius: 100, alignItems: 'center', justifyContent: 'center' }}>
                            <Ionicons name="play-forward-sharp" color={'white'} size={32} />
                        </View>
                    </Row>
                </Space>
                <View style={{ height: 6, backgroundColor: 'red', marginTop: 126 }} />
            </ImageBackground>
            <Space top={1}>
                <Title>{videoName}</Title>
                <Text>{description}</Text>
            </Space>
        </>

    )
}