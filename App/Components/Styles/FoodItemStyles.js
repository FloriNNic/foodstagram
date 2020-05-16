import { StyleSheet, Dimensions } from 'react-native'
import { Fonts, Colors } from '../../Themes'

let height = Dimensions.get('window').height;

export default StyleSheet.create({
    foodItemView: {
        width: '100%',
        height: height / 4,
        paddingLeft: '5%',
        paddingRight: '5%'
    },
    priceView: {
        backgroundColor: '#8DBA25',
        height: '20%',
        width: '30%',
        borderRadius: 10,
        justifyContent: 'center',
        zIndex: 5
    },
    priceText: {
        color: 'white',
        fontSize: 24,
        textAlign: 'center',
        fontWeight: '400'
    },
    foodImageView: {
        width: '65%',
        height: '70%',
        position: 'absolute',
        paddingTop: '15%',
        paddingLeft: '10%'
    },
    foodImage: {
        width: '100%',
        height: '100%',
        borderRadius: 40
    },
    foodDescriptionView: {
        height: '60%',
        width: '60%',
        position: 'absolute',
        zIndex: -1,
        marginLeft: '50%',
        marginTop: '5%',
        borderRadius: 40,
        backgroundColor: '#F4F4F4'
    },
    foodTextView: {
        position: 'absolute',
        width: '50%',
        height: '100%',
        zIndex: 1,
        marginLeft: '40%'
    },
    foodTitle: {
        textAlign: 'center',
        fontWeight: 'bold',
        paddingTop: 5,
        fontSize: 14
    },
    foodDescription: {
        textAlign: 'center',
        fontWeight: '400',
        paddingTop: 9,
        fontSize: 13
    }
})