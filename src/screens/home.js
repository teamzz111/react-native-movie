import React from 'react';
import { useDispatch } from "react-redux";
import theme from 'styled-theming';
import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Text } from 'react-native';

export const backgroundColor = theme('theme', {
  light: '#fff',
  dark: '#2d2d2d',
});

export const textColor = theme('theme', {
  light: '#000',
  dark: '#fff',
});

const HomeScreen = () => {
  const dispatch = useDispatch();


  return (
    <Container>
        <TouchableOpacity onPress = {() => dispatch({ type: 'TOGGLE_DARKTHEME' })}>
          <Text>asd</Text>
        </TouchableOpacity>
    </Container>
  );
}

const Container = styled.View `
  flex: 1;
  justifyContent: center;
  alignContent: center;
  alignItems: center;
  backgroundColor: ${backgroundColor};
  color: ${textColor};
`;


export default HomeScreen;