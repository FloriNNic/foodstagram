import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import LaunchScreen from '../Containers/LaunchScreen'
import FoodScreen from '../Containers/FoodScreen'
import CartScreen from '../Containers/CartScreen'
import FoodDetailScreen from '../Containers/FoodDetailScreen'
import MapsScreen from '../Containers/MapsScreen'
import CheckoutScreen from '../Containers/CheckoutScreen'

import styles from './Styles/NavigationStyles'

// Manifest of possible screens
const PrimaryNav = createStackNavigator({
  LaunchScreen: { screen: LaunchScreen },
  FoodScreen: { screen: FoodScreen },
  CartScreen: { screen: CartScreen },
  FoodDetailScreen: { screen: FoodDetailScreen },
  MapsScreen: { screen: MapsScreen },
  CheckoutScreen: { screen: CheckoutScreen }
}, {
  // Default config for all screens
  headerMode: 'none',
  initialRouteName: 'LaunchScreen',
  navigationOptions: {
    headerStyle: styles.header
  }
})

export default createAppContainer(PrimaryNav)
