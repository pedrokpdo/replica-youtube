import React from "react";
import { ContainerComponent } from "../../components/funcionais/ContainerComponent";
import { Space } from "../../components/funcionais/SpaceComponent";
import { Title } from "../../components/funcionais/TitleComponent";
import { MainHeaderComponent } from "../../components/MainHeaderComponent";
import { NotificationComponent } from "../../components/NotificationComponent";
//@ts-ignore
import video from '../../assets/video.jpg'
//@ts-ignore
import video2 from '../../assets/video2.jpg'
//@ts-ignore
import video3 from '../../assets/video3.webp'

export const NotificationListScreen = () => {
    return (
        <ContainerComponent>
            <Space top={2}>
                <MainHeaderComponent />
            </Space>
            <Space top={2}>
                <Title>Hoje</Title>
            </Space>
            <Space top={2}>
                <NotificationComponent photo={video2} />
            </Space>
            <Space top={2}>
                <NotificationComponent photo={video} />
            </Space>
            <Space top={2}>
                <NotificationComponent photo={video3} />
            </Space>
            <Space top={2}>
                <Title>Ontem</Title>
            </Space>
            <Space top={2}>
                <NotificationComponent photo={video3} />
            </Space>
            <Space top={2}>
                <NotificationComponent photo={video3} />
            </Space>
            <Space top={2}>
                <NotificationComponent photo={video3} />
            </Space>
        </ContainerComponent>
    )
}