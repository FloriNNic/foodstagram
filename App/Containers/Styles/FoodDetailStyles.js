import { StyleSheet, Dimensions } from 'react-native'

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default StyleSheet.create({
    bgImage: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        zIndex: -1
    },
    foodContent: {
        position: 'absolute',
        flex: 0,
        marginTop: '20%',
        width: '100%',
        height: '100%'
    },
    detail: {
        flexDirection: 'row'
    },
    name: {
        height: height / 3,
        width: width / 2,
        marginLeft: '5%'
    },
    nameText: {
        position: 'absolute',
        color: 'white',
        fontSize: 35,
        fontWeight: 'bold',
        marginTop: '30%'
    },
    price: {
        marginLeft: '5%',
        height: height / 3,
        width: '30%',
        alignItems: 'center'
    },
    priceText: {
        position: 'absolute',
        color: 'white',
        fontSize: 35,
        fontWeight: 'bold',
        marginTop: '50%'
    },
    addButton: {
        backgroundColor: 'green',
        marginLeft: '5%',
        marginTop: 100,
        height: 50,
        width: '35%',
        borderRadius: 20
    },
    addText: {
        fontSize: 22,
        paddingLeft: 25,
        color: 'white',
        fontWeight: '500'
    },
    addIcon: {
        color: 'white',
        fontSize: 30,
        paddingRight: 10
    }
})
