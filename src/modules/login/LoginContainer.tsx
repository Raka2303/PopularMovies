// screens/LoginContainer.tsx
import React, {FC, useState} from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {TRootStackParamList} from '../../navigation/ModuleStackTypes';
import LoginPresenter from './LoginPresenter';
import BaseScreen from '@modules/baseScreen/BaseScreen';
import AppConstants from '@constants/AppConstants';
import usePopularMoviesNavigation from '@navigation/usePopularMovieNavigation';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch } from 'react-redux';
import { onUserLoginSuccess } from '@popularMoviesMiddleware/redux/login/LoginActions';

type Props = NativeStackScreenProps<TRootStackParamList, 'LoginContainer'>;

const LoginContainer: FC<Props> = ({}) => {
  const navigation = usePopularMoviesNavigation();
  const dispatch = useDispatch();

  const {loginHeaderTitle} = AppConstants();

  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const onPhoneNumberTextChangeHandler = (newText: string) => {
    setPhoneNumber(newText);
  };

  const onPasswordTextChangeHandler = (newText: string) => {
    setPassword(newText);
  };

  const onContinueClickHandler = () => {
    navigation.replace('PopularMoviesContainer', {props: ''});
    AsyncStorage.setItem('isUserLoggedIn','true');
    dispatch(onUserLoginSuccess({isUserLoggedIn:true}));
  };

  return (
    <BaseScreen showHeader={true} title={loginHeaderTitle}>
      <LoginPresenter
        phoneNumber={phoneNumber}
        password={password}
        onPhoneNumberTextChangeHandler={onPhoneNumberTextChangeHandler}
        onPasswordTextChangeHandler={onPasswordTextChangeHandler}
        onContinueClickHandler={onContinueClickHandler}
      />
    </BaseScreen>
  );
};

export default LoginContainer;
