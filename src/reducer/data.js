const data = (state = {}, action) => {
  switch (action.type) {
    case 'SET_DATA_INFO': {
      return {...action.payload}
    }
    default:
      return state;
  }
};

export default data;
