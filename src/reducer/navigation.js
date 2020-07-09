import { createNavigationReducer } from 'react-navigation-redux-helpers'

import AppNavigator from '../navigation/app-navigator'

const navigationReducer = createNavigationReducer(AppNavigator)

export default navigationReducer;