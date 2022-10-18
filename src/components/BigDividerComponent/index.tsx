import React from 'react'
import { View } from 'react-native'

interface Props {
    bottom?: number;
    top?: number;
}

export const BigDivider = ({ top=0, bottom=0 }: Props) => {
    return (
        <View style={{ height: 4, backgroundColor: '#dddddd', width: '100%', marginTop: 8 * top, marginBottom: 8 * bottom }}/>
    )
}