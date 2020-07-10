import { createStackNavigator } from 'react-navigation-stack';

import HomeScreen from '../screens/home';

const AppNavigator = createStackNavigator(
  {
    App: HomeScreen,
  },
  {
    initialRouteName: 'App',
    defaultNavigationOptions: {
      headerShown: false
    }
  },
);

export default AppNavigator;