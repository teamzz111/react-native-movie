import React from 'react';
import { useDispatch } from "react-redux";
import theme from 'styled-theming';
import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import ToggleSwitch from 'toggle-switch-react-native'
import ParallaxScrollView from 'react-native-parallax-scroll-view';
import { useSelector } from "react-redux";

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
  const darkThemeEnabled = useSelector((state) => state.preferences.darkThemeEnabled, []);


  return (
    <Container>
      <ParallaxScrollView
        backgroundColor={contrastColor.toString()}
        contentBackgroundColor={contrastColor.toString()}
        parallaxHeaderHeight={150}
        renderForeground={() => (
          <Header>
            <Dark>
              <ToggleSwitch
                isOn={darkThemeEnabled}
                onColor="black"
                offColor="#4d46bf"
                label="Modo oscuro"
                labelStyle={{ color: darkThemeEnabled ? "white" : "black", fontWeight: "900" }}
                size="medium"
                onToggle={isOn => dispatch({type: 'TOGGLE_DARKTHEME'})}
              />
            </Dark>
            <Text>¡Bienvenido!</Text>
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

const Dark = styled.View`
  marginTop: 30px;
  marginBottom: 10px;
  marginLeft: 220px;
`


const Header = styled.View`
  backgroundColor: ${contrastColor};
  flex: 1;
  justifyContent: center;
  alignItems: center;
`;

const Content = styled.View`
  height: 500px;
`;

const Child = styled.View`
  borderTopLeftRadius: 30px;
  borderTopRightRadius: 30px;
  height: 200%;
  padding: 20px;
  backgroundColor: ${backgroundColor};
  color: ${textColor};
`;

const Text = styled.Text`
  color: ${textColor};
  fontSize: 30px;
  marginTop: 10px
`;



const Container = styled.View `
  flex: 1;
  backgroundColor: ${contrastColor};
  color: ${textColor};
`;


export default HomeScreen;