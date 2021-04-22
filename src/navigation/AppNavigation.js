import {createStackNavigator, HeaderBackButton} from 'react-navigation-stack';
import Home from '../screens/Home';
import React from 'react';

export const navigationOptions = ({navigation}) => ({
  headerLeft: () => (
    <HeaderBackButton onPress={() => navigation.navigate('Login')} />
  ),
});
const AppNavigation = createStackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions,
    },
  },
  {
    // initialRouteName: 'Home',
    headerMode: 'float',
  },
);

export default AppNavigation;
