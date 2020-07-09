import {
  combineReducers
} from 'redux';

import navigation from './navigation';
import data from './data';

const Reducer = combineReducers({
  navigation,
  data
});

const reducer = (state, action) => {
  if (action.type === 'DESTROY_SESSION') {
    state = undefined;
  }
  return Reducer(state, action);
}

export default reducer;
