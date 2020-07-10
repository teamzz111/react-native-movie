// /redux/reducers/config.js

const preferences = (state = { }, action) => {
  console.warn(state.darkThemeEnabled)
  switch (action.type) {
    case 'TOGGLE_DARKTHEME':
      return { ...state, darkThemeEnabled: !state.darkThemeEnabled };

    default:
      return state;
  }
};

export default preferences;