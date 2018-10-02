import { StyleSheet } from 'react-native'


export default StyleSheet.create({
    container: {
        flex: 1
    },
    card: {
        flexDirection: 'row',
        height: 120,
        paddingHorizontal: 10,
        paddingVertical: 10,
        marginHorizontal: 10,
        marginVertical: 5,
        borderWidth: 1,
        borderColor: '#d8e0e2',
        borderRadius: 5,
        backgroundColor: '#fff'
    },
    card__leftCol: {
        paddingRight: 10
    },
    card__rightCol: {
        flex: 1
    },
    avatar: {

    },
    messageButton: {
        position: 'absolute',
        right: 0,
        top: 0
    },
    name: {
        marginBottom: 2,
        fontSize: 16
    },
    company: {
        marginBottom: 5,
        fontSize: 14,
        color: '#97a2a2'
    },
    description: {
        marginBottom: 5,
        fontSize: 14
    },
    date: {
        fontSize: 12,
        color: '#97a2a2'
    }
})
