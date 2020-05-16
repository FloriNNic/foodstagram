import React, { Component } from 'react'
import { ScrollView, View, Text } from 'react-native'
import { Drawer, Button } from 'native-base'

import HeaderLanding from '../Components/HeaderMain'
import FoodGroup from '../Components/FoodGroup'
import Sidebar from '../Components/Sidebar'

import { burgers, chicken, pizza, coldDrinks, hotBevarages } from '../Components/Menu'
import NetInfo from "@react-native-community/netinfo";

// Styles
import styles from './Styles/LaunchScreenStyles'

//Images
const burgerImage = require('../Images/food/burger.jpg')
const chickenImage = require('../Images/food/chicken.jpg')
const pizzaImage = require('../Images/food/pizza.jpg')

export default class LaunchScreen extends Component {


  closeDrawer = () => {
    this.drawer._root.close();
  }

  openDrawer = () => {
    this.drawer._root.open();
  }

  goToBurgers = () => {
    this.props.navigation.navigate('FoodScreen', {
      title: 'BURGERS',
      items: burgers
    });
    this.closeDrawer();
  }

  goToChicken = () => {
    this.props.navigation.navigate('FoodScreen', {
      title: 'CHICKEN',
      items: chicken
    });
    this.closeDrawer();
  }

  goToPizza = () => {
    this.props.navigation.navigate('FoodScreen', {
      title: 'PIZZA',
      items: pizza
    });
    this.closeDrawer();
  }

  goToColdDrinks = () => {
    this.props.navigation.navigate('FoodScreen', {
      title: 'COLD DRINKS',
      items: coldDrinks
    });
    this.closeDrawer();
  }

  goToHotBevarages = () => {
    this.props.navigation.navigate('FoodScreen', {
      title: 'HOT BEVARAGES',
      items: hotBevarages
    });
    this.closeDrawer();
  }

  goToMaps = () => {
    this.props.navigation.navigate('MapsScreen');
    this.closeDrawer();
  }

  wifi = () => {
    console.log("##############")
    NetInfo.fetch().then(state => {
      console.log("Connection type", state.type);
      console.log("Is connected?", state.isConnected);
    });
  }
  render() {

    return (
      <Drawer ref={(ref) => this.drawer = ref}
        content={<Sidebar
          goToBurgers={this.goToBurgers}
          goToChicken={this.goToChicken}
          goToPizza={this.goToPizza}
          goToColdDrinks={this.goToColdDrinks}
          goToHotBevarages={this.goToHotBevarages}
          goToMaps={this.goToMaps}
        />}
        onClose={() => this.closeDrawer()}
      >

        <View style={styles.mainContainer}>

          <HeaderLanding openDrawer={this.openDrawer} navigation={this.props.navigation} />
          <ScrollView style={styles.scroll}>
            <FoodGroup image={burgerImage} text="BURGERS" goTo={this.goToBurgers} />
            <FoodGroup image={chickenImage} text="CHICKEN" goTo={this.goToChicken} />
            <FoodGroup image={pizzaImage} text="PIZZA" goTo={this.goToPizza} />
            <Button style={{ backgroundColor: 'orange' }}
              onPress={() => {
                NetInfo.fetch().then(state => {
                  alert("Connection type " + state.type + "\nConnected: " + state.isConnected);
                });
              }} >
              <Text style={{
                color: 'white',
                fontSize: 20,
                fontWeight: '400',
                marginLeft: 140
              }}>Check connection</Text>
            </Button>

          </ScrollView>
        </View>
      </Drawer>
    )
  }
}
