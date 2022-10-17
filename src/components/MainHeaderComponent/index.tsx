import React from "react";
import { View, Image, TouchableOpacity } from 'react-native'
import { Row } from "../funcionais/RowComponent";
//@ts-ignore
import logo from '../../assets/logo.png'
import { Feather, EvilIcons, AntDesign } from "@expo/vector-icons";
import { Ionicons } from '@expo/vector-icons';
import { AvatarComponent } from "../AvatarComponent";
import { useNavigation } from "@react-navigation/native";
import { Title } from "../funcionais/TitleComponent";


export const MainHeaderComponent = ({name}) => {
    const navigation = useNavigation<any>()
    return (
        <View>
            <Row style={{ alignItems: 'center', justifyContent: 'space-between' }}>
                <Row style={{ alignItems: 'center' }}>
                    <TouchableOpacity onPress={() => {navigation.goBack()}}>
                        <AntDesign name="left" size={24} color={'black'} />
                    </TouchableOpacity>
                    <Title style={{ marginLeft: 16 }}>{name}</Title>
                </Row>
                <Row style={{ alignItems: 'center', justifyContent: 'space-around', width: 160 }}>
                    <Feather name='cast' color='black' size={24} />
                    <TouchableOpacity onPress={() => { navigation.navigate('NotificationListScreen') }}>
                        <Ionicons name='notifications-outline' color='black' size={24} />
                    </TouchableOpacity>
                    <EvilIcons name='search' color='black' size={24} />
                    <TouchableOpacity onPress={() => { navigation.navigate('ProfileScreen') }}>
                        <AvatarComponent />
                    </TouchableOpacity>
                </Row>
            </Row>
        </View>
    )
}