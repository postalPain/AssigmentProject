import React from 'react'
import { View, Text } from 'react-native'


export default () => {
console.log('posts rendered')
    return <View style={{ flex: 1, backgroundColor: 'green'}}>
        <Text>This is list</Text>
    </View>
}
