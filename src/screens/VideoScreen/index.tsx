import React from "react";
//@ts-ignore
import { FocusVideoComponent } from "../../components/FocusVideoComponent";
import { LikeComponent } from "../../components/LikeComponent";
import { Space } from "../../components/funcionais/SpaceComponent";

export const VideoScreen = () => {
    return (
        <>
            <FocusVideoComponent description={'1.194 vizualizações - há 1 mês #patrulhacaninaportugues'} videoName='Patrulha Canina / OsSuperfilhotes e os supergêmeos se unem! / Nick Jr.' />
            <Space top={2}>
                <LikeComponent />
            </Space>
        </>
    )
}