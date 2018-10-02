import React from 'react'
import { View, Image } from 'react-native'
import styles from './styles'


export default (props) => {

    return <View style={styles.container}>
        <Image {...props} style={styles.image} />
    </View>
}
