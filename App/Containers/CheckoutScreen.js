import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { Container, Content } from 'native-base'

import HeaderFood from '../Components/HeaderFood'
import CheckoutForm from '../Components/CheckoutForm'

import styles from './Styles/CheckoutScreenStyles'

export default class CheckoutScreen extends Component {
    render() {
        return (
            <Container>
                <HeaderFood navigation={this.props.navigation} />
                <Content style={styles.checkoutContent}>
                    <Text style={styles.title}>Please enter your info</Text>
                    <CheckoutForm
                        navigation={this.props.navigation}
                        price={this.props.navigation.getParam('price', null)}
                    />
                </Content>
            </Container>
        )
    }
}
