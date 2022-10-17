import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { ImageBackground, View } from "react-native";
import { Row } from "../../components/funcionais/RowComponent";
//@ts-ignore
import video from '../../assets/video.jpg'
import { Text } from "../../components/funcionais/TextComponent";
import { FocusVideoComponent } from "../../components/FocusVideoComponent";

export const VideoScreen = () => {
    return (
        <FocusVideoComponent description={'1.194 vizualizações'} videoName='Como editar seu video'/>
    )
}