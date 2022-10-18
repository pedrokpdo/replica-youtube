import React from "react";
import { ContainerComponent } from "../../components/funcionais/ContainerComponent";
import { ShortComponent } from "../../components/ShortComponent";
//@ts-ignore
import short from '../../assets/short.webp'
//@ts-ignore
import short1 from '../../assets/short2.jpg'

export const ShortsScreen = () => {
    return (
        <ContainerComponent>
            <ShortComponent name={'Canal Maozinha'} photo={short} title={'Share Love - Rhiana'} />
            <ShortComponent name={'Canal Ruivinha'} photo={short1} title={'Como pentear o cabelo'} />
            <ShortComponent name={'Canal Maozinha'} photo={short} title={'Share Love - Rhiana'} />
            <ShortComponent name={'Canal Maozinha'} photo={short} title={'Share Love - Rhiana'} />
            <ShortComponent name={'Canal Maozinha'} photo={short} title={'Share Love - Rhiana'} />
        </ContainerComponent>
    )
}