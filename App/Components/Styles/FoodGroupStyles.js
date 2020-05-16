import { StyleSheet, Dimensions } from 'react-native'
import { Fonts, Colors } from '../../Themes'

const HEIGHT = Dimensions.get('window').height

export default StyleSheet.create({
    foodCard: {
        height: HEIGHT / 2,
        alignItems: 'center'
    },
    foodImage:{
        height: '100%'
    },
    textView: {
        justifyContent: 'center',
        width: '100%',
        height: '100%',
        position: 'absolute'
    },
    text: {
        fontSize: 36,
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
        borderWidth: 1,
        borderColor: 'white',
        margin: '20%',
        padding: '5%',
        borderRadius: 10    
    }
})
