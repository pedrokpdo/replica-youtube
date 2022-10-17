import React from "react";
import { Title } from "../funcionais/TitleComponent";
import { View, Image } from 'react-native'
import { Row } from "../funcionais/RowComponent";
//@ts-ignore
import logo from '../../assets/logo.webp'
import { Feather } from "@expo/vector-icons";
import { Ionicons } from '@expo/vector-icons';


export const HeaderComponent = () => {
    return (
        <View>
            <Row>
                <Image source={logo}/>
                <View>
                    <Feather name='cast' color='black' size={24}/>
                    <Ionicons name='notifications-outline' color='black' size={24}/>
                    lupa
                    avatar
                </View>
            </Row>
        </View>
    )
}