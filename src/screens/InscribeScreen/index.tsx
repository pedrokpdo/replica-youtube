import React from "react";
import { View } from "react-native";
import { AvatarComponent } from "../../components/AvatarComponent";
import { CardsListRowComponent } from "../../components/CardsListRowComponent";
import { ContainerComponent } from "../../components/funcionais/ContainerComponent";
import { Row } from "../../components/funcionais/RowComponent";
import { Space } from "../../components/funcionais/SpaceComponent";
import { Text } from "../../components/funcionais/TextComponent";
import { Title } from "../../components/funcionais/TitleComponent";
import { HeaderComponent } from "../../components/HeaderComponent";
import { VideoComponent } from "../../components/VideoComponent";
//@ts-ignore
import dj from '../../assets/dj.jpg'
import { NotificationButtonComponent } from "../../components/NotificationButtonComponent";

export const InscribeScreen = () => {
    return (
        <ContainerComponent>
            <Space top={-2.5}>
                <HeaderComponent />
            </Space>
            <Space>
                <Row top={-2.5} style={{ justifyContent: 'space-around', alignItems: 'center' }}>
                    <View style={{ alignItems: 'center' }}>
                        <AvatarComponent big />
                        <Text top={.5}>NickJr</Text>
                    </View>
                    <View style={{ alignItems: 'center' }}>
                        <AvatarComponent big />
                        <Text top={.5}>Dom C</Text>
                    </View>
                    <View style={{ alignItems: 'center' }}>
                        <AvatarComponent big />
                        <Text top={.5}>Bispo B</Text>
                    </View>
                    <View style={{ alignItems: 'center' }}>
                        <AvatarComponent big />
                        <Text top={.5}>Orações</Text>
                    </View>
                    <View>
                        <Title style={{ color: '#2f7ce0' }}>TODOS</Title>
                    </View>
                </Row>
            </Space>
            <Space top={2}>
                <CardsListRowComponent focus='all' setFocus={() => { }} />
            </Space>
            <View style={{ marginTop: 16 }}>
                <VideoComponent name={'Boller Room'} views='3,4' photo={dj} time={'3.54'} title='Dj alceu - Falling Love'/>
                <Space top={1}>
                    <NotificationButtonComponent/>
                </Space>
            </View>
            <View style={{ marginTop: 16 }}>
                <VideoComponent name={'Boller Room'} views='3,4' photo={dj} time={'3.54'} title='Dj alceu - Falling Love'/>
                <Space top={1}>
                    <NotificationButtonComponent/>
                </Space>
            </View>
            <View style={{ marginTop: 16 }}>
                <VideoComponent name={'Boller Room'} views='3,4' photo={dj} time={'3.54'} title='Dj alceu - Falling Love'/>
                <Space top={1}>
                    <NotificationButtonComponent/>
                </Space>
            </View>
        </ContainerComponent>
    )
}