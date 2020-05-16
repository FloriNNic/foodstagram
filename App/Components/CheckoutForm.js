import React, { Component } from 'react'
import { Text, View, TextInput } from 'react-native'
import { Icon, Item, Form, Textarea, Button } from 'native-base'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import CartActions from '../Redux/CartRedux'
import NotifService from '../Components/NotifService'

import styles from './Styles/CheckoutFormStyles'

class CheckoutForm extends Component {

    static propTypes = {
        setClearcart: PropTypes.func
    }

    state = {
        name: '',
        address: '',
        phone: '',
        note: '',
        price: this.props.price,
        cart: this.props.cart
    }

    submit = () => {
        if (this.state.name && this.state.address && this.state.phone) {

            alert('Ordered');
            this.props.setClearcart();
            this.props.navigation.navigate('LaunchScreen');
        } else {
            alert('Please fill in all required info!');
        }
    }

    render() {
        return (
            <View style={styles.checkoutView}>
                <Item>
                    <Icon style={styles.formIcon} active name="person" />
                    <TextInput
                        style={styles.formText}
                        placeholder="Name *"
                        value={this.state.name}
                        onChange={(e) => {
                            this.setState({ name: e.nativeEvent.text })
                        }}
                    />
                </Item>
                <Item>
                    <Icon style={styles.formIcon} active name="home" />
                    <TextInput
                        style={styles.formText}
                        placeholder="Adress *"
                        value={this.state.address}
                        onChange={(e) => {
                            this.setState({ address: e.nativeEvent.text })
                        }}
                    />
                </Item>
                <Item>
                    <Icon style={styles.formIcon} active name="call" />
                    <TextInput
                        style={styles.formText}
                        placeholder="Phone *"
                        value={this.state.phone}
                        onChange={(e) => {
                            this.setState({ phone: e.nativeEvent.text })
                        }}
                    />
                </Item>
                <Form style={styles.noteForm}>
                    <Textarea style={styles.noteText}
                        rowSpan={4}
                        bordered
                        placeholder="Note (ex. I hate tomatoes)"
                        value={this.state.note}
                        onChange={(e) => {
                            this.setState({ note: e.nativeEvent.text })
                        }}
                    />
                </Form>

                <Button style={styles.submit}
                    block
                    onPress={() => this.submit()}>
                    <Text style={styles.submitText} uppercase={false}>Place order</Text>
                </Button>
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        cart: state.cart.cart
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setClearcart: (cart) => dispatch(CartActions.changeClearcart(cart))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutForm);