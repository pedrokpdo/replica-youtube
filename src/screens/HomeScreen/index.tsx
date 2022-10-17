import React from "react";
import { Text, View } from "react-native";
import { ContainerComponent } from "../../components/funcionais/ContainerComponent";
import { Space } from "../../components/funcionais/SpaceComponent";
import { HeaderComponent } from "../../components/HeaderComponent";

export const HomeScreen = () => {
    return (
        <ContainerComponent>
            <Space>
                <HeaderComponent/>
            </Space>
        </ContainerComponent>
    )
}