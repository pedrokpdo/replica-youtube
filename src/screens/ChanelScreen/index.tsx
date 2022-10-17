import React from "react";
import { Dimensions, Image, View } from "react-native";
import { ContainerComponent } from "../../components/funcionais/ContainerComponent";
import { Space } from "../../components/funcionais/SpaceComponent";
import { MainHeaderComponent } from "../../components/MainHeaderComponent";
import { TopTabComponent } from "../../components/TopTabComponent";
//@ts-ignore
import patrulha from '../../assets/patrulha.jpg'
//@ts-ignore
import video2 from '../../assets/video2.jpg'
import { AvatarComponent } from "../../components/AvatarComponent";
import { Title } from "../../components/funcionais/TitleComponent";
import { Text } from "../../components/funcionais/TextComponent";
import { VideoComponent } from "../../components/VideoComponent";

const { width } = Dimensions.get('screen')

export const ChanelScreen = () => {
    return (
        <ContainerComponent>
            <Space top={2}>
                <MainHeaderComponent name={'Nick Jr.'} />
            </Space>
            <Space top={2}>
                <TopTabComponent />
            </Space>
            <Image source={patrulha} style={{ width: width, height: 100 }} />
            <Space bottom={2} top={2}>
                <View style={{ alignItems: 'center' }}>
                    <AvatarComponent big />
                    <Title top={1} bold>Nick Jr. em Português</Title>
                    <Title top={1} style={{ color: 'red' }}>Inscrever-se</Title>
                    <Text top={1}>3,46 mi de inscritos</Text>
                    <Text>Saiba mais sobre este canal</Text>
                </View>
            </Space>
            <VideoComponent name={'Nick Jr.'} photo={video2} time={'5.1'} title={'Trailer patrulha canina'} views={'1.345'} />
        </ContainerComponent>
    )
}