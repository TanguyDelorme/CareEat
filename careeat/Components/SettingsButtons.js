import React, {Component} from 'react';
import {Card, Text, View, Button, Image} from 'react-native';

class SettingsButtons extends React.Component {
    render() {
        return (
        <View>
            <Button  onPress={() => router.pop()}
                                 title="Accueil"
                                 color="#841584"
                                 accessibilityLabel="Learn more about this purple button"
                        />
            <Button  onPress={() => router.push.Profile()}
                                 title="Profil"
                                 color="#158768"
                                 accessibilityLabel="Learn more about this purple button"
                        />
            <Button onPress={() => router.push.Profile()}
                                 title="Notifications"
                                 color="#841584"
                                 accessibilityLabel="Learn more about this purple button"
                        />
            <Button  onPress={() => router.push.Scan()}
                                 title="Scan"
                                 color="#158768"
                                 accessibilityLabel="Learn more about this purple button"
                        />
            <Button  onPress={() => router.pop()}
                                 title="Deconnexion"
                                 color="#841584"
                                 accessibilityLabel="Learn more about this purple button"
                        />
        </View>
        );
      }
    }

 export default SettingsButtons