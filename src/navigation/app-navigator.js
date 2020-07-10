import * as React from 'react';
import Loading from '../screens/loading';
import { createStackNavigator } from 'react-navigation-stack';

import HomeScreen from '../screens/home';

const AppNavigator = createStackNavigator(
  {
    App: HomeScreen,
  },
  {
    initialRouteName: 'App', // default - Loading
    defaultNavigationOptions: {
    }
  },
);

export default AppNavigator;