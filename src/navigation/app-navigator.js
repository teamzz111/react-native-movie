import { createStackNavigator } from 'react-navigation-stack';

import HomeScreen from '../screens/home';
import Detail from '../screens/detail';

const AppNavigator = createStackNavigator(
  {
    App: HomeScreen,
    Detail
  },
  {
    initialRouteName: 'App',
    defaultNavigationOptions: {
      headerShown: false
    }
  },
);

export default AppNavigator;