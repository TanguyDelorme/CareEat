import React from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';

class FindRestaurants extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Find restaurants around you!</Text>
      </View>
    );
  }
}

class ScanDocument extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Scan your documents!</Text>
      </View>
    );
  }
}

class MyCart extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Check your cart!</Text>
      </View>
    );
  }
}

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