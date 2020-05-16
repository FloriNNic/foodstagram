import React from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';

import MapView, { Marker, ProviderPropType } from 'react-native-maps';
import { Container } from 'native-base'
import HeaderFood from '../Components/HeaderFood'

const { width, height } = Dimensions.get('window');

const ASPECT_RATIO = width / height;
const LATITUDE = 44.318641;
const LONGITUDE = 23.799238;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
const SPACE = 0.01;

class MapsScreen extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            a: {
                latitude: LATITUDE + SPACE,
                longitude: LONGITUDE + SPACE,
            },
            b: {
                latitude: LATITUDE - SPACE,
                longitude: LONGITUDE - SPACE,
            },
        };
    }

    render() {
        return (
            <Container>
                <HeaderFood navigation={this.props.navigation} />
                <View style={styles.container}>
                    <MapView
                        provider={this.props.provider}
                        style={styles.map}
                        initialRegion={{
                            latitude: LATITUDE,
                            longitude: LONGITUDE,
                            latitudeDelta: LATITUDE_DELTA,
                            longitudeDelta: LONGITUDE_DELTA,
                        }}
                    >
                        <Marker
                            coordinate={this.state.a}
                            draggable
                        >
                        </Marker>
                        <Marker
                            coordinate={this.state.b}
                            draggable
                        />
                    </MapView>
                </View>

            </Container>
        );
    }
}

MapsScreen.propTypes = {
    provider: ProviderPropType,
};

const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
});

export default MapsScreen;