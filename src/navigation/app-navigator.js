import * as React from 'react';
import { View, Text } from 'react-native';
import Loading from '../screens/loading';
import { createStackNavigator } from 'react-navigation-stack';
import { useSelector, useDispatch } from "react-redux";
import theme from 'styled-theming';
import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export const backgroundColor = theme('theme', {
  light: '#fff',
  dark: '#2d2d2d',
});

export const textColor = theme('theme', {
  light: '#000',
  dark: '#fff',
});

const Container = styled.View`
  flex: 1;
  justifyContent: center;
  alignContent: center;
  alignItems: center;
  backgroundColor: ${backgroundColor};
  color: ${textColor};
`;

function HomeScreen() {
  const dispatch = useDispatch();

  return (
    <Container>
        <TouchableOpacity onPress = {() => dispatch({ type: 'TOGGLE_DARKTHEME' })}>
          <Text>asd</Text>
        </TouchableOpacity>
    </Container>
  );
}

const AppNavigator = createStackNavigator(
  {
    App: HomeScreen,
    Auth: HomeScreen,
    Loading,
  },
  {
    initialRouteName: 'App', // default - Loading
  },
);

export default AppNavigator;