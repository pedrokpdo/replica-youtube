import { AntDesign, Ionicons } from "@expo/vector-icons";
import React from "react";
import { TouchableOpacity } from "react-native";
import { Title } from "../funcionais/TitleComponent";

export const NotificationButtonComponent = () => {
    return (
        <TouchableOpacity style={{ flexDirection: 'row', borderColor: '#59a3e9', borderWidth: 1, alignItems: 'center', justifyContent: 'center', padding: 8 }}>
            <Ionicons name="notifications-outline" color={'blue'} size={24} />
            <Title style={{ color: '#59a3e9', marginLeft: 16 }}>RECEBER NOTIFICAÇÕES</Title>
        </TouchableOpacity>
    )
}