import React from "react";
import { View } from "react-native";
import { AvatarComponent } from "../../components/AvatarComponent";
import { ContainerComponent } from "../../components/funcionais/ContainerComponent";
import { Row } from "../../components/funcionais/RowComponent";
import { Space } from "../../components/funcionais/SpaceComponent";
import { Title } from "../../components/funcionais/TitleComponent";
import { LinkComponent } from "../../components/LinkComponent";

export const ProfileScreen = () => {
    return (
        <ContainerComponent>
            <Space>
                <Row>
                    <Row>
                        <AvatarComponent />
                        <Title>Pedro</Title>
                    </Row>
                    
                </Row>
            </Space>
            <Space style={{ alignItems: 'center' }}>
                <LinkComponent name={'Gerenciar sua conta do Google'} onPress={() => { }} />
            </Space>
        </ContainerComponent>
    )
}