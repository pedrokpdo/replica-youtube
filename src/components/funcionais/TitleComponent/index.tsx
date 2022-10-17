import React from "react";
import { Text } from "react-native";

interface Props {
    bold?: boolean;
    children?: any;
    style?: any;
    bottom?: any;
    top?: any;
}

export const Title = ({ bold=false, children, style = {}, top=0, bottom=0 }: Props) => {
    return (
        <Text style={{ marginTop: 8 * top, marginBottom: 8 * bottom, fontWeight: bold ? 'bold' : '400', fontSize: 20, ...style }}>{children}</Text>
    )
}