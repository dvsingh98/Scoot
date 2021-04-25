/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import { stringify } from 'query-string';
import React, { Component } from 'react';
import AppContainer from './navigation';
class AppComponent extends Component {
  render() {
    return <AppContainer />;
  }
}

export default AppComponent;

//////////////////////////////////////////////////////////
//                                                      // 
// Generates XMLHttpRequest to JSON hosted online       //
// Runs function every n seconds to put data into array //
// (Commented out for now)                              //   
//                                                      //
//////////////////////////////////////////////////////////

// var getJSON = function (url, callback) {
//   var xhr = new XMLHttpRequest();
//   xhr.open('GET', url, true);
//   xhr.responseType = 'json';
//   xhr.onload = function () {
//     var status = xhr.status;
//     if (status === 200) {
//       callback(null, xhr.response);
//     } else {
//       callback(status, xhr.response);
//     }
//   };
//   xhr.send();
// };

// var dataObjArr = [];
// var jsonURL = 'http://mysafeinfo.com/api/data?list=englishmonarchs&format=json';

// Will execute getJSON every 3 seconds 
// var intervalID = window.setInterval(function () {
//   getJSON(jsonURL,
//     function (err, data) {
//       if (err) {
//         console.log('Something went wrong: ' + err);
//       } else {
//         console.log('Success!');
//         for (var i = 0; i < data.length; i++) {
//           var dataObj = {
//             Country: data[i].Country,
//             House: data[i].House,
//             ID: data[i].ID,
//             Name: data[i].Name,
//             Reign: data[i].Reign
//           };
//           dataObjArr.push(dataObj);
//           console.log(dataObjArr[i]);
//         }
//       }
//     })
// }, 3000);
