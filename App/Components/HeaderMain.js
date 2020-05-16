import React from 'react'
import { Text } from 'react-native'
import { Container, Header, Left, Body, Right, Button, Icon } from 'native-base'

// Styles
import styles from './Styles/HeaderMainStyles'

const headerLanding = (props) => (

  <Container style={styles.container}>
    <Header style={styles.header}>
      <Left>
        <Button transparent onPress={props.openDrawer}>
          <Icon name="menu" style={styles.icon} />
        </Button>
      </Left>
      <Body>
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

export default headerLanding;