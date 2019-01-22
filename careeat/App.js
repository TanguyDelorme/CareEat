import React from 'react';
import Router from 'react-native-easy-router';
import {Button, Text, View } from 'react-native';
import HeaderReturn from './Components/HeaderReturn';
import HeaderApp from './Components/HeaderApp';
import SettingsButtons from './Components/SettingsButtons';


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
      onPress={() => router.push.HomeTrader()}
      title="Trader"
      color="#841584"
      accessibilityLabel="Learn more about this purple button"
    />
  </View>
)


//Vue : client home
const HomeClient = ({ router }) => (
  <View style={{ backgroundColor: 'white', flex: 1 }}>
    <HeaderApp/>
    <Button
          onPress={() => router.push.ListTraders()}
          title="Traders List"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
  </View>
)


//Vue : settings
const Settings = ({ router }) => (
  <View style={{ backgroundColor: 'white', flex: 1 }}>
    <HeaderReturn/>
    <SettingsButtons/>
  </View>
)


//Vue : profil
const Profile = ({ router }) => (
  <View style={{flex: 1 }}>
    <HeaderReturn/>
    <Text>Profile vue</Text>
  </View>
)


//Vue : scan
const Scan = ({ router }) => (
  <View style={{flex: 1 }}>
    <HeaderReturn/>
    <Text>Scan vue</Text>
  </View>
)


//Vue : trader lists
const ListTraders = ({ router }) => (
  <View style={{flex: 1 }}>
    <HeaderReturn/>
    <Text>Traders list vue</Text>
  </View>
)


//Vue : trader home
const HomeTrader = ({ router }) => (
  <View style={{flex: 1 }}>
    <Text onPress={() => router.pop()}>Go back</Text>
  </View>
)

const routes = { SelectMode, HomeClient, HomeTrader, Settings, Profile, Scan, ListTraders}
const App = () => <Router routes={routes} initialRoute="SelectMode" router={router => (this.router = router)}/>

export default App