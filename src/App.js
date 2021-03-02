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

// 'use strict';

// const fs = require('react-native-fs');

// fs.readFile('scoot/src/scootData.json', (err, data) => {
//   if (err) throw err;
//   let scootData= JSON.parse(data);
//   console.log(scootData);
// });

// console.log('This is after the read call');

const fs = require("react-native-fs");

fs.readFile("src/scootData.json", "utf8", (err, jsonString) => {
  console.log(process.cwd());

  if (err) {
    console.log("File read failed:", err);
    return;
  }
  try {
    const scootData = JSON.parse(jsonFile);
    console.log(scootData);
  } catch (err) {
    console.log("Error parsing JSON string: ", err);
  }
});
