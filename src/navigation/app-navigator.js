import { createStackNavigator } from 'react-navigation-stack';

import HomeScreen from '../screens/home';
import Detail from '../screens/detail';

const AppNavigator = createStackNavigator(
  {
    App: HomeScreen,
    Detail
  },
  {
    initialRouteName: 'Detail',
    defaultNavigationOptions: {
      headerShown: false
    }
  },
);

export default AppNavigator;