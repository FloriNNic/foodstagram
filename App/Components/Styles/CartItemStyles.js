import { StyleSheet, Platform } from 'react-native'

export default StyleSheet.create({
    itemView: {
        width: '100%',
        height: 150
    },
    standalone: {
        marginTop: 30,
        marginBottom: 30,
    },
    standaloneRowFront: {
        alignItems: 'baseline',
        backgroundColor: 'white',
        justifyContent: 'center',
        height: '100%',
        width: '100%'
    },
    standaloneRowBack: {
        alignItems: 'center',
        backgroundColor: 'gray',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 20,
    },
    itemImage: {
        width: 100,
        height: 100,
        borderRadius: 20,
        marginLeft: 10

    },
    itemTextView: {
        marginLeft: '30%',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        position: 'absolute',
    },
    itemTitle: {
        color: 'black',
        fontSize: 15,
        fontWeight: 'bold'
    },
    itemPrice: {
        color: 'gray',
        fontSize: 14
    },
    counterView: {
        position: 'absolute',
        right: '5%',
        // width: 17,
        height: '100%',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    counterIconUp: {
        fontSize: Platform.OS === 'ios' ? 30 : 50,
        color: 'green'
    },
    counterIconDown: {
        fontSize: Platform.OS === 'ios' ? 30 : 50,
        color: 'red'
    },
    counterIconDownDisabled: {
        fontSize: Platform.OS === 'ios' ? 30 : 50,
        color: 'gray'
    },
    itemCount: {
        fontSize: 18,
        fontWeight: 'bold'
    }
})
