import React from 'react';
import { connect } from 'react-redux';
import { ActionCreators } from '../actions';
import { bindActionCreators } from 'redux';
import MapView from 'react-native-maps';

import { View } from 'react-native';
import { Button, Text } from 'native-base';

// Utilise seulement si l'action getMyLocation ne retourne pas une coordonee valide
const defaultCoords = {
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.02,
    longitudeDelta: 0.02,
}

class Map extends React.Component {

    // Fonction propre a react qui est execute par elle meme lorsque le component est charge
    // https://reactjs.org/docs/react-component.html#componentdidmount
    componentDidMount() {
        this.getMyLocation();
    }
    
    updateMap = () => {
        this.map.animateToRegion(this.props.currentCoords);
    }

    getMyLocation = () => {
        this.props.getMyLocation(); 
    }

    myCoords() {
        return (this.props.myCoords.latitude) ? this.props.myCoords : defaultCoords;
    }

    render() {

    return (
    <View>
        <View style={{height:350}}>
            <MapView
            style={{flex:1}}
            ref={ref => { this.map = ref; }}
            initialRegion={defaultCoords}
            region={this.myCoords()}
            >

            {this.props.myCoords.latitude ? <MapView.Marker.Animated coordinate={this.props.myCoords} /> : null}

            </MapView>

        </View>
        <View style={{flex: 1,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center'
            }}>
            <Button onPress={this.getMyLocation} style={{marginTop:20}}>
                <Text>
                    Trouver ma location
                </Text>
            </Button>
        </View>
    </View>
    
    )}
  }

function mapDispatchToProps(dispatch) {
    return bindActionCreators(ActionCreators, dispatch);
}

function mapStateToProps(state) {
    return {
        myCoords: state.myCoords,
    };
};

export default connect(() => mapStateToProps, mapDispatchToProps)(Map);