import { StyleSheet } from 'react-native'
import { SCENE_HEADER_HEIGHT } from 'components/SceneHeader/constants/styles'
import { STATUSBAR_HEIGHT } from 'constants/device'


export default StyleSheet.create({
    container: {
        flex: 1,

        backgroundColor: '#fff'
    },
    sceneHeader: {
        position: 'absolute',
        zIndex: 1,
        left: 0,
        top: STATUSBAR_HEIGHT,
        right: 0
    },
    page: {
        flex: 1
    },
    userImageBox: {
        paddingTop: STATUSBAR_HEIGHT + SCENE_HEADER_HEIGHT,
        paddingHorizontal: 20,
        paddingBottom: 30,
        width: '100%',
        flexDirection: 'column',
        alignItems: 'center'
    },
    chatWithUserButton: {
        marginTop: 30
    },
    userName: {
        marginTop: 10,
        fontSize: 24,
        fontWeight: '700',
        color: '#fff',
        textAlign: 'center'
    },
    fieldRow: {
        borderTopWidth: 1,
        borderTopColor: '#f6f6f8',
        paddingTop: 10,
        marginTop: 15
    },
    fieldRow_first: {
        borderTopWidth: 0,
        marginTop: 0,
        paddingTop: 0
    },
    fieldRow__title: {
        fontSize: 18,
        color: '#d4d6de'
    },
    fieldRow__value: {
        marginTop: 5,
        fontSize: 20,
        color: '#333'
    },
    fieldRow__value_type_url: {
        color: '#34cdc3'
    },
    fieldsList: {
        marginTop: 20,
        marginHorizontal: 20
    }
})
