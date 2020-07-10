import {API, IMAGE, TOKEN} from 'react-native-dotenv';

export const baseURL = API;
export const imageURL = IMAGE;
export const token = TOKEN;

export const moviesList = {
  list: 'movie/popular',
  image: 't/p/w200',
  rated: 'movie/top_rated'
};

export const movieDetail = {
  detail: 'movie/',
  big: 't/p/w500'
};
