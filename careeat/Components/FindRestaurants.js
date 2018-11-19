import React from 'react';
import { Text, View } from 'react-native';

class FindRestaurants extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Find restaurants around you!</Text>
      </View>
    );
  }
}

export default FindRestaurants