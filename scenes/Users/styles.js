import { StyleSheet } from 'react-native'
import { STATUSBAR_HEIGHT } from 'constants/device'


export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ecf0f1',
        paddingTop: STATUSBAR_HEIGHT
    }
})
