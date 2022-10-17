import React from "react";
//@ts-ignore
import { FocusVideoComponent } from "../../components/FocusVideoComponent";
import { LikeComponent } from "../../components/LikeComponent";
import { Space } from "../../components/funcionais/SpaceComponent";
import { ChanelVideoComponent } from "../../components/ChanelVideoComponent";
import { Divider } from "../../components/funcionais/Divider";
import { ContainerComponent } from "../../components/funcionais/ContainerComponent";
import { VideoComponent } from "../../components/VideoComponent";
//@ts-ignore
import video from '../../assets/video.jpg'
//@ts-ignore
import video2 from '../../assets/video2.jpg'
//@ts-ignore
import video3 from '../../assets/video3.webp'
//@ts-ignore
import video4 from '../../assets/video4.jpg'
import { Row } from "../../components/funcionais/RowComponent";
import { View } from "react-native";
import { BigDivider } from "../../components/BigDividerComponent";

export const VideoScreen = () => {
    return (
        <>
            <FocusVideoComponent description={'1.194 vizualizações - há 1 mês #patrulhacaninaportugues'} videoName='Patrulha Canina / OsSuperfilhotes e os supergêmeos se unem! / Nick Jr.' />
            <ContainerComponent>
                <Space top={2}>
                    <LikeComponent />
                </Space>
                <Divider top={1} bottom={1} />
                <Space top={1}>
                    <ChanelVideoComponent name={'Nick Jr em portugues'} inscribes='3,45 mi de inscritos' />
                </Space>
                <BigDivider top={2} />
                <View style={{ marginTop: 0 }}>
                    <VideoComponent views={'2222'} name={'Nick Jr'} photo={video2} time={'1.32'} title={'como fazer casquinha de sorvete'} />
                </View>
                <BigDivider top={2} />
                <View style={{ marginTop: 0 }}>
                    <VideoComponent views={'2222'} name={'Nick Jr'} photo={video3} time={'1.32'} title={'como fazer casquinha de sorvete'} />
                </View>
                <BigDivider top={2} />
                <View style={{ marginTop: 0 }}>
                    <VideoComponent views={'2222'} name={'Nick Jr'} photo={video4} time={'1.32'} title={'como fazer casquinha de sorvete'} />
                </View>
            </ContainerComponent>
        </>
    )
}