import { StyleSheet, Dimensions } from 'react-native'
import { ApplicationStyles } from '../../Themes'
import { withOrientation } from 'react-navigation'

export default StyleSheet.create({
    checkoutView: {
        marginTop: 30,
        marginLeft: 50,
        marginRight: 50
    },
    formIcon: {
        color: 'green',
        fontSize: 20
    },
    formText: {
        fontSize: 16,
        fontWeight: '500'
    },
    noteForm: {
        marginTop: 20
    },
    noteText: {
        borderRadius: 20,
        fontSize: 16,
        fontWeight: '500'
    },
    submit: {
        marginTop: 20,
        backgroundColor: 'green',
        borderRadius: 20
    },
    submitText: {
        color: 'white',
        fontSize: 22,
        fontWeight: '500'
    }
})
