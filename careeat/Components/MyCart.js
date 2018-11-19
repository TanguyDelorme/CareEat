import React from 'react';
import { Text, View } from 'react-native';

class MyCart extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Check your cart!</Text>
      </View>
    );
  }
}

export default MyCart