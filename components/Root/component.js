import React from 'react';
import { View } from 'react-native'
import { createStackNavigator } from 'react-navigation';
import Routes from 'components/Routes'
import styles from './styles'


export default () => (
    <View style={styles.root}>
        <Routes />
    </View>
)
