import { AntDesign, Ionicons, MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { AvatarComponent } from "../../components/AvatarComponent";
import { ContainerComponent } from "../../components/funcionais/ContainerComponent";
import { Divider } from "../../components/funcionais/Divider";
import { Row } from "../../components/funcionais/RowComponent";
import { Space } from "../../components/funcionais/SpaceComponent";
import { Title } from "../../components/funcionais/TitleComponent";
import { LinkComponent } from "../../components/LinkComponent";
import { LinkRowComponent } from "../../components/LinkRowComponent";

export const ProfileScreen = () => {
    return (
        <ContainerComponent>
            <Space top={2}>
                <Row style={{ alignItems: 'center', justifyContent: 'space-between' }}>
                    <Row style={{ alignItems: 'center' }}>
                        <AvatarComponent />
                        <Title bold style={{ marginLeft: 16 }}>Pedro</Title>
                    </Row>
                    <AntDesign name="right" size={24} color={'black'} />
                </Row>
            </Space>
            <Space top={2} style={{ alignItems: 'center' }}>
                <LinkComponent name={'Gerenciar sua conta do Google'} onPress={() => { }} />
            </Space>
            <Space top={2}>
                <LinkRowComponent iconName={'person-circle-outline'} Icon={Ionicons} text={'Seu canal'} />
                <LinkRowComponent iconName={'person-circle-outline'} Icon={Ionicons} text={'Ativar modo anonimo'} />
                <LinkRowComponent iconName={'person-add-outline'} Icon={Ionicons} text={'Adicionar conta'} />
            </Space>
            <Divider top={2} bottom={2}/>
            <Space top={0}>
                <LinkRowComponent iconName={'youtube'} Icon={AntDesign} text={'Assinar o youtube Premium'} />
                <LinkRowComponent iconName={'attach-money'} Icon={MaterialIcons} text={'Compras e assinaturas'} />
                <LinkRowComponent iconName={'graphic-eq'} Icon={MaterialIcons} text={'Tempo de exibição'} />
                <LinkRowComponent iconName={'youtube'} Icon={AntDesign} text={'Seus dados no YouTube'} />
            </Space>
            <Divider top={2} bottom={2}/>
            <Space top={0}>
                <LinkRowComponent iconName={'setting'} Icon={AntDesign} text={'Configurações'} />
                <LinkRowComponent iconName={'ios-help-circle-outline'} Icon={Ionicons} text={'Ajuda e feedback'} />
            </Space>
        </ContainerComponent>
    )
}