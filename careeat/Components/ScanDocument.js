import React from 'react';
import { Text, View } from 'react-native';

class ScanDocument extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Scan your documents!</Text>
      </View>
    );
  }
}

export default ScanDocument