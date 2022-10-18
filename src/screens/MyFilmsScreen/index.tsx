import React from "react";
import { ContainerComponent } from "../../components/funcionais/ContainerComponent";
import { Row } from "../../components/funcionais/RowComponent";
import { Space } from "../../components/funcionais/SpaceComponent";
import { Title } from "../../components/funcionais/TitleComponent";
import { MainHeaderComponent } from "../../components/MainHeaderComponent";
import { ProductComponent } from "../../components/ProductComponent";
import { ScrollView, View } from "react-native";
//@ts-ignore
import acredito from '../../assets/acredito.jpg'
//@ts-ignore
import infiltrado from '../../assets/infiltrado.jpg'
//@ts-ignore
import mulan from '../../assets/mulan.jpg'
//@ts-ignore
import narnia from '../../assets/narnia.jpg'
//@ts-ignore
import senhor from '../../assets/senhor.webp'
//@ts-ignore
import harry from '../../assets/harry.webp'

export const MyFilmsScreen = () => {
    return (
        <ContainerComponent>
            <Space top={2}>
                <MainHeaderComponent name={'Filmes e pro...'} />
            </Space>
            <Space top={2}>
                <Title bold>Filmes recomendados para você</Title>
            </Space>
            <Space top={2}>
                <ScrollView horizontal>
                    <View style={{ marginRight: 16 }}>
                        <ProductComponent photo={acredito} name='Eu Acredito' describe={'Drama - 2018'} />
                    </View>
                    <View style={{ marginRight: 16 }}>
                        <ProductComponent photo={infiltrado} name='Infiltrado' describe={'Ação - 2022'} />
                    </View>
                    <View style={{ marginRight: 16 }}>
                        <ProductComponent photo={mulan} name='Mulan' describe={'Infantil - 2021'} />
                    </View>
                </ScrollView>
            </Space>
            <Space top={2}>
                <Row style={{ alignItems: 'center', justifyContent: 'space-between' }}>
                    <Title bold>Mais vendidos</Title>
                    <Title style={{ color: 'rgba(98, 159, 229, 1)' }}>VER MAIS</Title>
                </Row>
            </Space>
            <Space top={2}>
                <ScrollView horizontal>
                    <View style={{ marginRight: 16 }}>
                        <ProductComponent photo={harry} name='Harry Potter' describe={'Drama - 2018'} />
                    </View>
                    <View style={{ marginRight: 16 }}>
                        <ProductComponent photo={narnia} name='Narnia' describe={'Ação - 2022'} />
                    </View>
                    <View style={{ marginRight: 16 }}>
                        <ProductComponent photo={senhor} name='Senhor' describe={'Infantil - 2021'} />
                    </View>
                </ScrollView>
            </Space>
        </ContainerComponent>
    )
}