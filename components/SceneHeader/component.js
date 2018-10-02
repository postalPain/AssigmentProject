import React from 'react'
import { View, Text, TouchableWithoutFeedback, Image } from 'react-native'
import NavigationService from 'services/NavigationService'
import styles from './styles'


const backArrow = require('/assets/icons/backArrow.png')


export default ({ style }) => {
    const onBackButtonPress = () => {
        NavigationService.goBack()
    }

    return <View style={[styles.container, style]}>
        <TouchableWithoutFeedback
            hitSlop={{
                left: 10,
                right: 10,
                top: 10,
                bottom: 10
            }}
            onPress={onBackButtonPress}>
            <View
                style={styles.backButtonWrapper}>
                <Image
                    source={backArrow}
                    style={styles.backButton} />
            </View>
        </TouchableWithoutFeedback>
    </View>
}
