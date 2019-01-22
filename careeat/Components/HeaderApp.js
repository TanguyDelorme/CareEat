import {Header} from 'react-native-elements';
import React, {Component} from 'react';
import {Text, View, Button, Image} from 'react-native';
import SettingsButton from '../Components/SettingsButton';

class HeaderApp extends React.Component {
    render() {
        return (
          <Header
            placement="left"
            leftComponent={<SettingsButton/>}
            centerComponent={{ text: 'CareEat', style: { color: '#fff' } }}
            rightComponent={{ icon: 'home', color: '#fff' }}
           />
        );
      }
    }

 export default HeaderApp
