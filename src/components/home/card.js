import React from 'react';
import styled from 'styled-components/native';
import { backgroundColor, contrastColor, textColor } from '../../utils/color';
import {Rating, AirbnbRating} from 'react-native-ratings';

const Card = () => {
  return (
    <Container>
      <Child>
        <Image
          source={{
            uri:
              'https://image.tmdb.org/t/p/w200/bTL9PlNlcX8kZZNLym80zpWucU4.jpg',
          }}
        />
        <Text>Avengers: End Game  </Text>
        <AirbnbRating
          count={4}
          defaultRating={5}
          size={20}
          isDisabled={true}
          showRating={false}
        />
      </Child>
    </Container>
  );
}
const Child = styled.View`
  flex: 1;
  flexDirection: column;
  maxWidth: 130px;
  alignItems: flex-start;

`

const Container = styled.TouchableHighlight`
  flex: 1;
  marginTop: 20px;
`
const Image = styled.Image`
  width: 120px;
  height: 160px;
  resizeMode: stretch;
  borderRadius: 10px;
`;

const Text = styled.Text`
  fontSize: 13px;
  fontWeight: 400;
  marginTop: 10px;
  color: ${textColor}
  marginBottom: 10px;
`;

export default Card;