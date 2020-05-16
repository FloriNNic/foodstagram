import React from 'react'
import { Text } from 'react-native'
import { Container, Header, Left, Body, Right, Button, Icon } from 'native-base'

// Styles
import styles from './Styles/HeaderMainStyles'

const headerFood = (props) => (

    <Container style={styles.container}>
        <Header style={styles.header}>
            <Left>
                <Button transparent onPress={() => props.navigation.goBack()}>
                    <Icon name="md-arrow-back" style={styles.icon} />
                </Button>
            </Left>
            <Body style={styles.body}>
                <Text style={styles.title}>Foodstagram</Text>
            </Body>
            <Right>
                <Button transparent onPress={() => props.navigation.navigate('CartScreen')}>
                    <Icon type="FontAwesome5" name="shopping-cart" style={styles.icon} />
                </Button>
            </Right>
        </Header>
    </Container>

)

export default headerFood;