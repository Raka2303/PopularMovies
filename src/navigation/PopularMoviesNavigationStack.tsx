// In App.js in a new project

import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginContainer from '../modules/login/LoginContainer';
import {TRootStackParamList} from './ModuleStackTypes';
import PopularMoviesContainer from '../modules/movies/PopularMoviesContainer';
import SplashScreenContainer from '../modules/splash/SplashScreenContainer';
import {useSelector} from 'react-redux';
import {ActionTypes} from '@popularMoviesMiddleware/redux/ActionTypes';

const Stack = createNativeStackNavigator<TRootStackParamList>();

function LoginStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      {/* <Stack.Screen name="SplashFlow" component={SplashStack} /> */}
      <Stack.Screen name="LoginContainer" component={LoginContainer} />
    </Stack.Navigator>
  );
}

function DashboardStack() {
  return (
    <Stack.Navigator
      // initialRouteName={initialRouteName}
      screenOptions={{
        headerShown: false,
      }}>
      {/* <Stack.Screen name="SplashFlow" component={SplashStack} /> */}
      <Stack.Screen
        name="PopularMoviesContainer"
        component={PopularMoviesContainer}
      />
    </Stack.Navigator>
  );
}

export default function PopularMoviesNavigationStack() {
  const [isUserLoggedInn, setIsUserLoggedIn] = React.useState(false);
  const [isLoginChecked, setIsLoginChecked] = React.useState<boolean>(false);

  const userState = useSelector((state: any) => state.LoginReducer);

  async function setLoginChecked() {
    setIsLoginChecked(true);
  }

  useEffect(() => {
    if (userState?.action === ActionTypes.ON_USER_LOGIN_SUCCESS) {
      setIsUserLoggedIn(userState?.onUserLoginResponse?.isUserLoggedIn);
    }
  }, [userState?.action, userState?.onUserLoginResponse?.isUserLoggedIn]);

  useEffect(() => {
    if (userState?.onUserLoginResponse?.isSplashScreenCompleted === 'true') {
      setLoginChecked();
    }
  }, [userState?.onUserLoginResponse?.isSplashScreenCompleted]);

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {!isLoginChecked ? (
          <Stack.Screen
          name="SplashScreenContainer"
          component={SplashScreenContainer}
        />
        ) : isUserLoggedInn === false ? (
          <Stack.Screen name="LoginFlow" component={LoginStack} />
        ) : (
          <Stack.Screen name="DashboardFlow" component={DashboardStack} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
