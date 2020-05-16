import { StyleSheet, Dimensions } from 'react-native'
import { ApplicationStyles } from '../../Themes'

export default StyleSheet.create({
    ...ApplicationStyles.screen,
    parentView: {
        height: '100%',
        width: '100%'
    },
    footerView: {
        height: 300,
        width: '100%',
        backgroundColor: 'orange',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20
    },
    footerText: {
        width: '100%',
        textAlign: 'center',
        color: 'white',
        fontSize: 30,
        marginTop: 5,
        marginBottom: 5,
        paddingBottom: 10
    },
    emptyText: {
        textAlign: 'center',
        marginTop: '50%',
        fontStyle: 'italic'
    },
    checkoutButton: {
        width: '50%',
        marginLeft: '25%',
        marginTop: 5,
        height: 50,
        borderRadius: 25,
        backgroundColor: 'green'
    }
})
