import React from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FindRestaurants from './Components/FindRestaurants';
import ScanDocument from './Components/ScanDocument';
import MyCart from './Components/MyCart';

const Menu = createBottomTabNavigator (
  {
    Restaurants:
    {
        screen: FindRestaurants,
        navigationOptions: () => ({
           tabBarIcon: ({tintColor}) => (
              <Ionicons  name='ios-compass' color={tintColor} size={24}/>
           ),
         }),
     },
    Scan:
    {
        screen: ScanDocument,
        navigationOptions: () => ({
           tabBarIcon: ({tintColor}) => (
               <Ionicons  name='ios-qr-scanner' color={tintColor} size={24}/>
           ),
        }),
         },
    Cart:
    {
        screen: MyCart ,
        navigationOptions: () => ({
           tabBarIcon: ({tintColor}) => (
              <Ionicons  name='ios-cart  ' color={tintColor} size={24}/>
            ),
         }),
    },
  },

);

export default createAppContainer(Menu)