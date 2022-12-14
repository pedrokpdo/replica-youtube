import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { CardsListRowComponent } from "../../components/CardsListRowComponent";
import { ContainerComponent } from "../../components/funcionais/ContainerComponent";
import { Space } from "../../components/funcionais/SpaceComponent";
import { HeaderComponent } from "../../components/HeaderComponent";
import { VideoComponent } from "../../components/VideoComponent";
//@ts-ignore
import video from '../../assets/video.jpg'
//@ts-ignore
import video2 from '../../assets/video2.jpg'
import { BigDivider } from "../../components/BigDividerComponent";
import { useNavigation } from "@react-navigation/native";

export const HomeScreen = () => {
    const [focus, setFocus] = useState<any>('all')
    const navigation = useNavigation<any>()
    return (
        <ContainerComponent>
            <Space top={-3}>
                <HeaderComponent/>
            </Space>
            <Space top={-3} bottom={2}>
                <CardsListRowComponent focus={focus} setFocus={setFocus}/>
            </Space>
            <TouchableOpacity onPress={() => { navigation.navigate('VideoScreen') }}>
                <VideoComponent name={'cigana'} photo={video} time='1.15' title={'Video de como editar video'} views='4.500' />
            </TouchableOpacity>
            <BigDivider top={2} />
            <VideoComponent name={'cigana'} photo={video2} time='1.15' title={'Video de como editar video'} views='4.500' />
            <BigDivider top={2} />
        </ContainerComponent>
    )
}