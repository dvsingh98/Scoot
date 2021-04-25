import React from 'react';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import {
  Platform,
  PermissionsAndroid,
  StyleSheet,
  View,
  Alert,
} from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import Firebase from '../../config/Firebase';

import jsonData from '../../scootData.json';
export const scootArray = Object.values(jsonData.scooters);

export default class Home extends React.Component {
  state = {
    latitude: 37.7749,
    longitude: 122.4194,
    coordinates: [],
    user: '',
    scooterList: scootArray
  };


  mapMarkers = () => {
    return this.state.scooterList.map((scooter, index) => <Marker
      key={index}
      coordinate={{
        latitude: parseFloat(scooter.lat),
        longitude: parseFloat(scooter.long)
      }}
      title={scooter.company}
      description={scooter.ID}
    >
      </Marker>)
  }

  async componentDidMount() {
    Firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({
          user: user
        });
      } else {
        this.setState({
          user: null,
        });
      }
    });
    await this.requestPermissions();
    Geolocation.getCurrentPosition(
      (position) => {
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          coordinates: this.state.coordinates.concat({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          }),
        });
      },
      (error) => {
        Alert.alert(error.message.toString());
      },
      {
        showLocationDialog: true,
        enableHighAccuracy: true,
        timeout: 20000,
        maximumAge: 0,
      },
    );
  }
  async requestPermissions() {
    if (Platform.OS === 'ios') {
      const auth = await Geolocation.requestAuthorization('whenInUse');
      if (auth !== 'granted') {
        Alert.alert('Permission denied');
      }
    }
    if (Platform.OS === 'android') {
      await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      );
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <MapView
          style={styles.map}
          provider={PROVIDER_GOOGLE}
          showsUserLocation={true}
          region={{
            latitude: this.state.latitude,
            longitude: this.state.longitude,
            latitudeDelta: 0.005,
            longitudeDelta: 0.005,
          }}>
          {this.mapMarkers()}
        </MapView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
});
