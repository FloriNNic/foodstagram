import React, { Component } from 'react'
import { Text, Image, View, TouchableOpacity } from 'react-native'


// Styles
import styles from './Styles/PromoFoodItemStyles'

export default class PromoFoodItem extends Component {
    render() {
        return (
            <TouchableOpacity onPress={() => this.props.navigation('FoodScreen', { title: this.props.text })}>
                <View style={styles.foodCard}>
                    <View>
                        <Image style={styles.promoImage} source={this.props.image} resizeMode='contain' blurRadius={3} />
                    </View>
                    <View style={styles.textView}>
                        <Text style={styles.foodTitle}>{this.props.text}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }
}
