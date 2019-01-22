import React, {Component} from 'react';
import {Alert, Text, View, Button, Image} from 'react-native';
import Router from 'react-native-easy-router';

class SettingsButton extends React.Component {
    render() {
        return (
          <Button
            onPress={() => router.push.Second()}
            title="Settings"
            color="#841584"
            accessibilityLabel="Learn more about this purple button"
           />
        );
      }
    }



 export default SettingsButton
