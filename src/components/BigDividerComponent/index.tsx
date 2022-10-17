import React from 'react'
import { View } from 'react-native'

interface Props {
    bottom?: number;
    top?: number;
}

export const BigDivider = ({ top=0, bottom=0 }: Props) => {
    return (
        <View style={{ height: 8, backgroundColor: '#d8d8d8', width: '100%', marginTop: 8 * top, marginBottom: 8 * bottom }}/>
    )
}