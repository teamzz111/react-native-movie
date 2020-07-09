import * as React from 'react';
import { View, Text } from 'react-native';
import {createSwitchNavigator} from 'react-navigation';
import Loading from '../screens/loading';

function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
    </View>
  );
}


const AppNavigator = createSwitchNavigator({
  App: HomeScreen,
  Auth: HomeScreen,
  Loading,
}, {
  initialRouteName: 'Loading', // default - Loading
}, );

export default AppNavigator;