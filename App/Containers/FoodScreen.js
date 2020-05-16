import React from 'react'
import { View } from 'react-native'
import { Container, Content } from 'native-base'
import { Text } from 'native-base'

import HeaderFood from '../Components/HeaderFood'
import FoodItem from '../Components/FoodItem'
import styles from './Styles/FoodScreenStyles'

const foodScreen = (props) => (

    <Container>
        <HeaderFood navigation={props.navigation} />
        <Content style={styles.titleTextContent}>
            <Text style={styles.titleText}>{props.navigation.getParam('title', '')}</Text>
            {props.navigation.getParam('items', []).map(item => (
                <FoodItem
                    key={item.title}
                    price={item.price}
                    title={item.title}
                    description={item.description}
                    image={item.image}
                    navigation={props.navigation}
                />
            ))}
        </Content>
    </Container>

)

export default foodScreen;