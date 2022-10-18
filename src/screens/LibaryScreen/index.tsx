import { AntDesign, FontAwesome5 } from "@expo/vector-icons";
import React from "react";
import { ScrollView, View } from "react-native";
import { ContainerComponent } from "../../components/funcionais/ContainerComponent";
import { Row } from "../../components/funcionais/RowComponent";
import { Space } from "../../components/funcionais/SpaceComponent";
import { Title } from "../../components/funcionais/TitleComponent";
import { HeaderComponent } from "../../components/HeaderComponent";
import { LitleVideoComponent } from "../../components/LitleVideoComponent";
import { VideoComponent } from "../../components/VideoComponent";
import { VideoRowComponent } from "../../components/VideoRowComponent";


export const LibaryScreen = () => {
    return (
        <ContainerComponent>
            <Space top={-2.5}>
                <HeaderComponent />
            </Space>
            <Space>
                <Row style={{ justifyContent: 'space-between' }}>
                    <Row>
                        <FontAwesome5 name="history" size={24} />
                        <Title style={{ marginLeft: 16 }}>Histórico</Title>
                    </Row>
                    <Title bold style={{ color: 'rgba(98, 159, 229, 1)' }}>VER TUDO</Title>
                </Row>
            </Space>
            <Space top={1}>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    <View style={{ marginRight: 16 }}>
                        <LitleVideoComponent />
                    </View>
                    <View style={{ marginRight: 16 }}>
                        <LitleVideoComponent />
                    </View>
                    <View style={{ marginRight: 16 }}>
                        <LitleVideoComponent />
                    </View>
                    <View style={{ marginRight: 16 }}>
                        <LitleVideoComponent />
                    </View>
                    <View style={{ marginRight: 16 }}>
                        <LitleVideoComponent />
                    </View>
                </ScrollView>
            </Space>
        </ContainerComponent>
    )
}