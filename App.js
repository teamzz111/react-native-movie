import React from 'react';
import {Provider, connect} from 'react-redux';
import {store, persistor} from './src/store/store';
import {PersistGate} from 'redux-persist/integration/react';
import Loading from './src/screens/loading';
import AppNavigatorWithState from './src/navigation/app-navigator-with-state';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={<Loading />} persistor={persistor}>
        <AppNavigatorWithState />
      </PersistGate>
    </Provider>
  );
};

export default App;
