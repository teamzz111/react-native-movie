import React from 'react';
import { useDispatch } from "react-redux";
import theme from 'styled-theming';
import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { View } from 'react-native';
import ParallaxScrollView from 'react-native-parallax-scroll-view';

export const backgroundColor = theme('theme', {
  light: '#fff',
  dark: '#202124',
});

export const contrastColor = theme('theme', {
  light: '#5ca1d4',
  dark: '#313235'
});

export const textColor = theme('theme', {
  light: '#000',
  dark: '#fff',
});

const HomeScreen = () => {
  const dispatch = useDispatch();

  return (
    <Container>
      <ParallaxScrollView
        backgroundColor={contrastColor.toString()}
        contentBackgroundColor={contrastColor.toString()}
        parallaxHeaderHeight={150}
        renderForeground={() => (
          <Header>
            <TouchableOpacity onPress={() => dispatch({type: 'TOGGLE_DARKTHEME'})}>
              <Text>asd</Text>
            </TouchableOpacity>
          </Header>
        )}>
        <Content>
          <Child>
            <Text>Scroll me</Text>
          </Child>
        </Content>
      </ParallaxScrollView>
    </Container>
  );
}


const Header = styled.View`
  backgroundColor: ${contrastColor};
  flex: 1;
  justifyContent: center;
  alignItems: center;
`;

const Content = styled.View`
  height: 500px
`;

const Child = styled.View`
  borderTopLeftRadius: 30px;
  borderTopRightRadius: 30px;
  height: 100%;
  padding: 30px;
  backgroundColor: ${backgroundColor};
  color: ${textColor};
`;

const Text = styled.Text`
  color: ${textColor};
`;



const Container = styled.View `
  flex: 1;
  backgroundColor: ${contrastColor};
  color: ${textColor};
`;


export default HomeScreen;