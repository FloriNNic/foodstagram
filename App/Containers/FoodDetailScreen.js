import React, { Component } from 'react'
import { Text, ImageBackground } from 'react-native'
import { Container, View, Content, Button, Icon } from 'native-base'
import { RNCamera } from 'react-native-camera'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import CartActions from '../Redux/CartRedux'

import HeaderFood from '../Components/HeaderFood';

import styles from './Styles/FoodDetailStyles';

class FoodDetailScreen extends Component {

  static propTypes = {
    setCart: PropTypes.func
  }

  render() {

    const image = this.props.navigation.getParam('image', 'ERR');
    const title = this.props.navigation.getParam('title', 'ERR');
    const price = this.props.navigation.getParam('price', 'ERR');

    return (
      <Container>
        <HeaderFood navigation={this.props.navigation} />
        <ImageBackground source={image} style={styles.bgImage} />

        <Content style={styles.foodContent}>
          <View style={styles.detail}>
            <View style={styles.name}>
              <Text style={styles.nameText}>{title}</Text>
            </View>
            <View style={styles.price}>
              <Text style={styles.priceText}>${price}</Text>
            </View>
          </View>

          <Button iconLeft dark style={styles.addButton}
            onPress={() => {
              alert('Added to cart');
              this.props.setCart({
                title: title,
                price: price,
                count: 1,
                image: image,
                extras: null
              });
            }}>
            <Text style={styles.addText}>ADD</Text>
            <Icon type="MaterialCommunityIcons" name="plus" style={styles.addIcon} />
          </Button>
          <View>
            <RNCamera ref={ref => { this.camera = ref }} captureAudio={false} />
          </View>
        </Content >
      </Container >

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
    setCart: (cart) => dispatch(CartActions.changeCart(cart))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FoodDetailScreen);