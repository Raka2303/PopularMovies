// In App.js in a new project

import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginContainer from '../modules/login/LoginContainer';
import {TRootStackParamList} from './ModuleStackTypes';
import PopularMoviesContainer from '../modules/movies/PopularMoviesContainer';
import SplashScreenContainer from '../modules/splash/SplashScreenContainer';
import {useDispatch} from 'react-redux';
import {onUserLoginSuccess} from '@popularMoviesMiddleware/redux/login/LoginActions';

const Stack = createNativeStackNavigator<TRootStackParamList>();

function LoginStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen
        name="SplashScreenContainer"
        component={SplashScreenContainer}
      />
      <Stack.Screen name="LoginContainer" component={LoginContainer} />
      <Stack.Screen
        name="PopularMoviesContainer"
        component={PopularMoviesContainer}
      />
    </Stack.Navigator>
  );
}

function DashboardStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen
        name="SplashScreenContainer"
        component={SplashScreenContainer}
      />
      <Stack.Screen
        name="PopularMoviesContainer"
        component={PopularMoviesContainer}
      />
    </Stack.Navigator>
  );
}

export default function PopularMoviesNavigationStack({isUserLoggedIn}: {isUserLoggedIn:boolean}) {
  const dispatch = useDispatch();
  dispatch(onUserLoginSuccess({isUserLoggedIn:isUserLoggedIn}));
  return (
    <NavigationContainer>
      {!isUserLoggedIn ? <LoginStack /> : <DashboardStack />}
    </NavigationContainer>
  );
}
