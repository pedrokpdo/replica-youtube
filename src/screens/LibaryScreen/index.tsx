import { AntDesign, Entypo, Feather, FontAwesome5, Ionicons, MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { ScrollView, View } from "react-native";
import { ContainerComponent } from "../../components/funcionais/ContainerComponent";
import { Divider } from "../../components/funcionais/Divider";
import { Row } from "../../components/funcionais/RowComponent";
import { Space } from "../../components/funcionais/SpaceComponent";
import { Text } from "../../components/funcionais/TextComponent";
import { Title } from "../../components/funcionais/TitleComponent";
import { HeaderComponent } from "../../components/HeaderComponent";
import { LinkRowComponent } from "../../components/LinkRowComponent";
import { LitleVideoComponent } from "../../components/LitleVideoComponent";


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
            <Divider />
            <Space>
                <Row top={1}>
                    <LinkRowComponent Icon={Entypo} iconName='folder-video' text={'Seus Videos'} />
                </Row>
                <Row top={2}>
                    <LinkRowComponent Icon={Feather} iconName='film' text={'Seus Filmes'} />
                </Row>
            </Space>
            <Divider top={3} bottom={3} />
            <Space>
                <Row style={{ alignItems: 'center', justifyContent: 'space-between' }}>
                    <Title>Playlists</Title>
                    <Row style={{ alignItems: 'center' }}>
                        <Text>Adicionados recentemente</Text>
                        <AntDesign name="down" size={16} />
                    </Row>
                </Row>
                <LinkRowComponent Icon={Ionicons} iconName={'add'} color='rgba(98, 159, 229, 1)' text={'Nova playlist'} />
                <LinkRowComponent Icon={MaterialIcons} iconName={'history'} text={'Assistir mais tarde'} />
                <LinkRowComponent Icon={AntDesign} iconName={'like2'} text={"Videos marcados com 'gostei'"} />
            </Space>
        </ContainerComponent>
    )
}