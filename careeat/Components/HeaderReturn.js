import {Header} from 'react-native-elements';
import React, {Component} from 'react';
import {Text, View, Button, Image} from 'react-native';

class HeaderReturn extends React.Component {
    render() {
        return (
          <Header
            placement="left"
            leftComponent={<Button  onPress={() => router.pop()}
                                   title="Back"
                                   color="#841584"
                                   accessibilityLabel="Learn more about this purple button"
                           />
                           }
            centerComponent={{ text: 'CareEat', style: { color: '#fff' } }}
            rightComponent={{ icon: 'home', color: '#fff' }}
           />
        );
      }
    }

 export default HeaderReturn