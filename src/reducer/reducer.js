import {
  combineReducers
} from 'redux';

import navigation from './navigation';
import data from './data';
import preferences from './config'

const Reducer = combineReducers({
  navigation,
  data,
  preferences
});

const reducer = (state, action) => {
  
  return Reducer(state, action);
}

export default reducer;
