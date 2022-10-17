import React from "react";
import { ContainerComponent } from "../../components/funcionais/ContainerComponent";
import { Space } from "../../components/funcionais/SpaceComponent";
import { MainHeaderComponent } from "../../components/MainHeaderComponent";
import { TopTabComponent } from "../../components/TopTabComponent";

export const ChanelScreen = () => {
    return (
        <ContainerComponent>
            <Space top={2}>
                <MainHeaderComponent name={'Nick Jr.'} />
            </Space>
            <Space top={2}>
                <TopTabComponent />
            </Space>
        </ContainerComponent>
    )
}