import React from 'react'
import { View, Text } from 'react-native'
import styles from './styles'

export default ({ style }) => {

    return <View style={[styles.container, style]}>
        <Text>Message</Text>
    </View>
}