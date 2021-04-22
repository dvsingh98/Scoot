/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';

import AppleMaps from './screens/MapView.js';

class AppComponent extends Component {
  render() {
    return <AppleMaps />;
  }
}

export default AppComponent;

import jsonData from './scootData.json';

var scootArray = []
for (var i = 0; i < jsonData.scooters.length; i++) {
  var scooter = {
    lat: parseFloat(jsonData.scooters[i].lat),
    long: parseFloat(jsonData.scooters[i].long),
    title: jsonData.scooters[i].ID,
    description: jsonData.scooters[i].company
  };
  scootArray.push(scooter);
}

console.log(scootArray[0]);
console.log(scootArray[1]);