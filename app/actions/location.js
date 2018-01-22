import * as types from './types';

const defaultCoords = {
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.02,
    longitudeDelta: 0.02,
}

export function getMyLocation() {
    return (dispatch, getState) => {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                dispatch(setMyLocation(position));
            },
            (error)=> console.log(error.message),
            {enableHighAccuracy: true, timeout: 20000, maximumAge:1000}
        );      
    }
}

export function setMyLocation({ coords }) {     // {coords} est equivalent a args.coords en ES6

    newCoords = trimCoords(coords);
    return {
      type: types.GET_MY_LOCATION,
      newCoords,
    }
  }

function trimCoords({latitude, longitude}) {
    return {
        latitude: latitude,
        longitude: longitude,
        latitudeDelta: defaultCoords.latitudeDelta,
        longitudeDelta: defaultCoords.longitudeDelta,
    }
}