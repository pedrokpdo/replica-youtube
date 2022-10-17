import React from "react";
import { ContainerComponent } from "../../components/funcionais/ContainerComponent";
import { Space } from "../../components/funcionais/SpaceComponent";
import { MainHeaderComponent } from "../../components/MainHeaderComponent";

export const NotificationListScreen = () => {
    return (
        <ContainerComponent>
            <Space top={2}>
                <MainHeaderComponent />
            </Space>
        </ContainerComponent>
    )
}