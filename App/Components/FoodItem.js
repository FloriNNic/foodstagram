import React from 'react'
import { View, Image, Text, TouchableOpacity } from 'react-native'

// Styles
import styles from './Styles/FoodItemStyles'

const foodItem = (props) => (

    <TouchableOpacity onPress={() =>
        props.navigation.navigate('FoodDetailScreen', {
            image: props.image,
            title: props.title,
            price: props.price
        })}>

        <View style={styles.foodItemView}>
            <View style={styles.priceView}>
                <Text style={styles.priceText}>${props.price}</Text>
            </View>

            <View style={styles.foodImageView}>
                <Image style={styles.foodImage} source={props.image} resizeMode="cover" />
            </View>

            <View style={styles.foodDescriptionView}>
                <View style={styles.foodTextView}>
                    <Text style={styles.foodTitle}>{props.title}</Text>
                    <Text style={styles.foodDescription}>{props.description}</Text>
                </View>
            </View>
        </View>
    </TouchableOpacity>

)

export default foodItem;