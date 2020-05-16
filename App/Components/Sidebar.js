import React from 'react'
import { Text } from 'react-native'
import { Container, List, ListItem, Left, Icon, Body } from 'native-base';

const sidebar = (props) => (
    <Container style={{
        backgroundColor: 'white',
        paddingTop: 40
    }}>
        <List>
            <ListItem itemDivider>
                <Text>Food</Text>
            </ListItem>
            <ListItem button onPress={props.goToBurgers}>
                <Left>
                    <Icon type="MaterialCommunityIcons" name="hamburger" style={{ fontSize: 22 }} />
                </Left>
                <Body>
                    <Text>Burgers</Text>
                </Body>
            </ListItem>
            <ListItem button onPress={props.goToChicken}>
                <Left>
                    <Icon type="FontAwesome5" name="drumstick-bite" style={{ fontSize: 22 }} />
                </Left>
                <Body>
                    <Text>Chicken</Text>
                </Body>
            </ListItem>
            <ListItem button onPress={props.goToPizza}>
                <Left>
                    <Icon type="MaterialCommunityIcons" name="pizza" style={{ fontSize: 22 }} />
                </Left>
                <Body>
                    <Text>Pizza</Text>
                </Body>
            </ListItem>
            <ListItem itemDivider>
                <Text>Drinks</Text>
            </ListItem>
            <ListItem button onPress={props.goToColdDrinks}>
                <Left>
                    <Icon type="MaterialCommunityIcons" name="cup-water" style={{ fontSize: 22 }} />
                </Left>
                <Body>
                    <Text>Cold drinks</Text>
                </Body>
            </ListItem>
            <ListItem button onPress={props.goToHotBevarages}>
                <Left>
                    <Icon type="MaterialCommunityIcons" name="coffee" style={{ fontSize: 22 }} />
                </Left>
                <Body>
                    <Text>Hot bewarages</Text>
                </Body>
            </ListItem>
            <ListItem itemDivider style={{ marginTop: 300 }}>
                <Text>Find a restaurant</Text>
            </ListItem>
            <ListItem button onPress={props.goToMaps}>
                <Left>
                    <Icon type="MaterialCommunityIcons" name="crosshairs" style={{ fontSize: 22 }} />
                </Left>
                <Body>
                    <Text>Open Google Maps</Text>
                </Body>
            </ListItem>
        </List>
    </Container>
)

export default sidebar;
