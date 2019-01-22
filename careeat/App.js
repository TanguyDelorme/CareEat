import React from 'react';
import Router from 'react-native-easy-router';
import {Button, Text, View } from 'react-native';
import HeaderApp from './Components/HeaderApp';

//Vue to select client or trader mode
const SelectMode = ({ router }) => (
  <View style={{ backgroundColor: 'white', flex: 1 }}>
    <Button
      onPress={() => router.push.HomeClient()}
      title="Client"
      color="#841584"
      accessibilityLabel="Learn more about this purple button"
    />
    <Button
      onPress={() => router.push.Second()}
      title="Trader"
      color="#841584"
      accessibilityLabel="Learn more about this purple button"
    />
  </View>
)

//Home client page
const HomeClient = ({ router }) => (
  <View style={{ backgroundColor: 'white', flex: 1 }}>
    <HeaderApp/>
    <Text onPress={() => router.push.Second()}>Go forward</Text>
  </View>
)

const Second = ({ router, name }) => (
  <View style={{flex: 1 }}>
    <Text onPress={() => router.pop()}>Go back</Text>
  </View>
)

const routes = { SelectMode, HomeClient, Second }
const App = () => <Router routes={routes} initialRoute="SelectMode" router={router => (this.router = router)}/>

export default App