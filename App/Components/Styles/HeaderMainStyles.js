import { StyleSheet, Platform } from 'react-native'

export default StyleSheet.create({
    container: {
        height: Platform.OS === 'ios' ? '9%' : '8%',
        flex: 0,
        zIndex: 5
    },
    header: {
        backgroundColor: 'orange'
    },
    icon: {
        color: 'white',
        fontSize: 30
    },
    title: {
        marginLeft: -20,
        marginRight: -20,
        color: 'white',
        fontSize: 27,
        fontWeight: '800',
        textAlign: 'center'
    }
})
