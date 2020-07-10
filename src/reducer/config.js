// /redux/reducers/config.js

const preferences = (state = { }, action) => {
  switch (action.type) {
    case 'TOGGLE_DARKTHEME':
      return { ...state, darkThemeEnabled: !state.darkThemeEnabled };

    default:
      return state;
  }
};

export default preferences;