/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect, useState} from 'react';
import PopularMoviesNavigationStack from './src/navigation/PopularMoviesNavigationStack';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import './src/localization/i18n';
import {Provider} from 'react-redux';
import store from '@popularMoviesMiddleware/Store';
import AsyncStorage from '@react-native-async-storage/async-storage';

function App(): React.JSX.Element {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState<boolean | null>(null);
  checkUserLoggedIn();

  async function checkUserLoggedIn (){
    const tempIsUserLoggedIn = await AsyncStorage.getItem('isUserLoggedIn');
    setIsUserLoggedIn(!!tempIsUserLoggedIn);
  };

  return (
    <Provider store={store}>
      {isUserLoggedIn !== null && <PopularMoviesNavigationStack isUserLoggedIn={isUserLoggedIn} />}
    </Provider>
  );
}

export default App;
