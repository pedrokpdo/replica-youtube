import React from "react";
import { Title } from "../funcionais/TitleComponent";
import { View, Image, TouchableOpacity } from 'react-native'
import { Row } from "../funcionais/RowComponent";
//@ts-ignore
import logo from '../../assets/logo.png'
import { Feather, EvilIcons } from "@expo/vector-icons";
import { Ionicons } from '@expo/vector-icons';
import { AvatarComponent } from "../AvatarComponent";
import { useNavigation } from "@react-navigation/native";


export const HeaderComponent = () => {
    const navigation = useNavigation<any>()
    return (
        <View>
            <Row style={{ alignItems: 'center', justifyContent: 'space-between' }}>
                <Image source={logo} style={{ width: 90, height: 100, resizeMode: 'center' }} />
                <Row style={{ alignItems: 'center', justifyContent: 'space-around', width: 160 }}>
                    <Feather name='cast' color='black' size={24} />
                    <TouchableOpacity onPress={() => {navigation.navigate('NotificationListScreen')}}>
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