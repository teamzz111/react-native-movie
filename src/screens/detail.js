import React, {useState, useEffect} from 'react';
import { backgroundColor, contrastColor, textColor } from '../utils/color';
import styled from 'styled-components/native';
import { fetchData } from '../utils/fetchData';
import { imageURL, movieDetail } from '../constants/url';
import {Rating, AirbnbRating} from 'react-native-ratings';
import { Linking } from 'react-native';
import ParallaxScrollView from 'react-native-parallax-scroll-view';

const Detail = ({route}) => {
  const [movies, setMovies] = useState([]);

    useEffect(() => {
      data();
    }, []);

  

  const data = async () => {
    const request = await fetchData.Get(movieDetail.detail + "696374?language=en-US");

    if (request.ok) {
      setMovies(request.data);
    } else {
      console.warn(request);
    }

  }
  return(
    <ParallaxScrollView
        contentBackgroundColor={contrastColor.toString()}
        parallaxHeaderHeight={250}
        renderForeground={() => (
          <Header
            source={{
              uri: imageURL + movieDetail.big + movies.backdrop_path,
            }}
          >
          </Header>
        )}
     >
      <View>
        <Text>{movies.title}</Text>
        <Rating2>
          <Button onPress = {() => Linking.openURL(movies.homepage)}>
            <Sub>WATCH</Sub>
          </Button>
          <AirbnbRating
            count={movies.vote_average / 2}
            defaultRating={7}
            size={20}
            isDisabled={true}
            showRating={false}
          />
        </Rating2>

        <Sub >{movies.overview} {'\n'}</Sub>
        <Sub >Status: {movies.status}</Sub>
        <Sub >Release date: {movies.release_date}</Sub>
        <Sub >Popularity: {movies.popularity}</Sub>
      </View>
    </ParallaxScrollView>
  );

}

const Rating2 = styled.View`
  justifyContent: space-between;
  flexDirection: row;
  width: 100%;
  marginTop: 10px;
  marginBottom: 15px;
`
const Button = styled.TouchableOpacity`
  backgroundColor: ${backgroundColor};
  padding: 10px;
  borderRadius: 10px;
  paddingHorizontal: 20px

`

const Sub = styled.Text`
  fontSize: 15px;
  color: ${textColor}
`

const Dark = styled.View `
  marginTop: 30px;
  marginBottom: 10px;
  marginLeft: 220px;
  flex: 1;
`
const Header = styled.ImageBackground `
  flex: 1;
  justifyContent: center;
  alignItems: center;
`;

const View = styled.View`
  backgroundColor: ${contrastColor}
  width: 100%;
  height: 900px;
  padding: 15px;
  flex: 1;
  flexDirection: column;
`

const Text = styled.Text `
  color: ${textColor};
  fontSize: 30px;
  marginTop: 10px
`;

export default Detail;