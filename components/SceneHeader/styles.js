import { StyleSheet } from 'react-native'
import { SCENE_HEADER_HEIGHT } from './constants/styles'


export default StyleSheet.create({
    container: {
        paddingHorizontal: 10,
        height: SCENE_HEADER_HEIGHT
    },
    backButtonWrapper: {
        width: SCENE_HEADER_HEIGHT,
        height: SCENE_HEADER_HEIGHT
    },
    backButton: {
        flex: 1,
        resizeMode: 'cover'
    }
})
