import React from 'react';
import styled from 'styled-components/native';
import { backgroundColor, contrastColor, textColor } from '../../utils/color';
import {Rating, AirbnbRating} from 'react-native-ratings';
import { imageURL, moviesList } from '../../constants/url';

const Card = ({item, handler}) => {
  return (
    <Container
      onPress = {() => handler(item.id)}
    >
      <Child>
        <Image
          source={{
            uri:
              imageURL + moviesList.image + item.poster_path,
          }}
        />
        <Text>{item.title}</Text>
        <AirbnbRating
          count={item.vote_average / 2}
          defaultRating={7}
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
  marginRight: 10px;
  marginLeft: 10px;
  marginTop: 20px;
  minWidth: 130px;
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