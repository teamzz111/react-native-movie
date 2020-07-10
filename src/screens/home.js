import React, { useEffect, useState } from 'react';
import { useDispatch } from "react-redux";
import styled from 'styled-components/native';
import ToggleSwitch from 'toggle-switch-react-native'
import ParallaxScrollView from 'react-native-parallax-scroll-view';
import { useSelector } from "react-redux";
import { backgroundColor, contrastColor, textColor } from '../utils/color';
import Card from '../components/home/card';
import { fetchData } from '../utils/fetchData';
import { moviesList } from '../constants/url';
import { FlatList } from 'react-native';

const HomeScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const darkThemeEnabled = useSelector((state) => state.preferences.darkThemeEnabled, []);
  const [page, setPage] = useState(1);
  const [movies, setMovies] = useState([]);
  const [rated, setRated] = useState([]);

  useEffect(() => {
    data();
  }, []);

  const navigate = (id) => {
    navigation.navigate("Detail", {id});
  }

  const data = async() => {
    const request = await fetchData.Get(moviesList.list + "?language=en-US&page=" + page);

    if(request.ok){
      setMovies(request.results.data);
    } else {
      console.warn(request);
    }

  }

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
            <Text>Welcome!</Text>
          </Header>
        )}>


        <Content>
          <Child>
            <Title>MOST POPULAR</Title>
            <FlatList
              data={movies}
              renderItem={item => <Card {...item} handler = {navigate}/>}
              keyExtractor={item => item.id.toString()}
              horizontal = {true}
            />

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

const Title = styled.Text`
  fontSize: 13px;
  color: ${textColor};
  fontWeight: 300;
  opacity: .7;
  margin: 10px;
`;

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
  height: 140%;
  padding: 30px;
  width: 100%;
  marginTop: 10px;
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