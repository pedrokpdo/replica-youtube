import { AntDesign } from "@expo/vector-icons";
import React from "react";
import { Dimensions, ImageBackground, View } from "react-native";
//@ts-ignore
import short from '../../assets/short.webp'
import { AvatarComponent } from "../AvatarComponent";
import { FullCard } from "../funcionais/FullCard";
import { Row } from "../funcionais/RowComponent";
import { Space } from "../funcionais/SpaceComponent";
import { Text } from "../funcionais/TextComponent";
import { Title } from "../funcionais/TitleComponent";
const { width, height } = Dimensions.get('window')



export const ShortComponent = () => {
    return (
        <ImageBackground style={{ width: width, height: height - 64 }} source={short}>
            <Space>
                <Row style={{ alignItems: 'center', justifyContent: 'space-between' }}>
                    <Title top={1} style={{ color: 'white', fontSize: 30 }}>Shorts</Title>
                    <AntDesign name="search1" size={24} style={{ color: 'white' }} />
                </Row>
                <Row top={3}>
                    <FullCard style={{ backgroundColor: 'rgba(191, 191, 191, 0.31)', padding: 8 }}>
                        <Row>
                            <AntDesign name="play" size={24} color={'white'} />
                            <Title style={{ marginLeft: 8, color: 'white' }}>Inscrições</Title>
                        </Row>
                    </FullCard>
                </Row>
                <View style={{ width: 40, alignSelf: 'flex-end' }}>
                    <View style={{ alignItems: 'center', marginTop: 24 }}>
                        <View style={{ alignItems: 'center' }}>
                            <AntDesign name="like1" color={'white'} size={32} />
                            <Text style={{ color: 'white', textAlign: 'center' }}>217 mil</Text>
                        </View>
                    </View>
                    <View style={{ alignItems: 'center', marginTop: 24 }}>
                        <View style={{ alignItems: 'center' }}>
                            <AntDesign name="dislike1" color={'white'} size={32} />
                            <Text style={{ color: 'white', textAlign: 'center' }}>Não gostei</Text>
                        </View>
                    </View>
                    <View style={{ alignItems: 'center', marginTop: 24 }}>
                        <View style={{ alignItems: 'center' }}>
                            <AntDesign name="message1" color={'white'} size={32} />
                            <Text style={{ color: 'white', textAlign: 'center' }}>217</Text>
                        </View>
                    </View>
                    <View style={{ alignItems: 'center', marginTop: 24 }}>
                        <View style={{ alignItems: 'center' }}>
                            <AntDesign name="sharealt" color={'white'} size={32} />
                            <Text style={{ color: 'white', textAlign: 'center' }}>Compart...</Text>
                        </View>
                    </View>
                </View>
                <Title style={{ color: 'white' }}>Share Love - Rhiana</Title>
                <Row top={1} style={{ alignItems: 'center' }}>
                    <AvatarComponent big />
                    <Title style={{ color: 'white', marginLeft: 16 }}>Music Time</Title>
                    <FullCard style={{ backgroundColor: 'red', padding: 4, marginLeft: 16 }}>
                        <Title style={{ color: 'white' }}>INSCREVER-SE</Title>
                    </FullCard>
                </Row>
            </Space>
        </ImageBackground>
    )
}