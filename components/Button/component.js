import React from 'react'
import { View, Text } from 'react-native'
import styles from './styles'


export default ({ children, style }) => {

    return <View style={[styles.container, style]}>
        <Text
            style={styles.buttonText}
            numberOfLines={1}>{children}</Text>
    </View>
}