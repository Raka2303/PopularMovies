/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import PopularMoviesNavigationStack from './src/navigation/PopularMoviesNavigationStack';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import './src/localization/i18n';
import {Provider} from 'react-redux';
import store from '@popularMoviesMiddleware/Store';

function App(): React.JSX.Element {
  return (
    <Provider store={store}>
      <PopularMoviesNavigationStack />
    </Provider>
  );
}

export default App;
