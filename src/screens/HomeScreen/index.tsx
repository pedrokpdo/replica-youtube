import React from "react";
import { Text, View } from "react-native";
import { CardsListRowComponent } from "../../components/CardsListRowComponent";
import { ContainerComponent } from "../../components/funcionais/ContainerComponent";
import { Space } from "../../components/funcionais/SpaceComponent";
import { HeaderComponent } from "../../components/HeaderComponent";
import { VideoComponent } from "../../components/VideoComponent";
//@ts-ignore
import video from '../../assets/video.jpg'
import { BigDivider } from "../../components/BigDividerComponent";

export const HomeScreen = () => {
    return (
        <ContainerComponent>
            <Space top={-3}>
                <HeaderComponent />
            </Space>
            <Space top={-3} bottom={2}>
                <CardsListRowComponent />
            </Space>
            <VideoComponent name={'cigana'} photo={video} time='1.15' title={'Video de como editar video'} views='4.500' />
            <BigDivider top={2} />
            <VideoComponent name={'cigana'} photo={video} time='1.15' title={'Video de como editar video'} views='4.500' />
            <BigDivider top={2} />
        </ContainerComponent>
    )
}