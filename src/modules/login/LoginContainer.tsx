// screens/LoginContainer.tsx
import React, {FC, useEffect, useState} from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {TRootStackParamList} from '../../navigation/ModuleStackTypes';
import LoginPresenter from './LoginPresenter';
import BaseScreen from '@modules/baseScreen/BaseScreen';
import AppConstants from '@constants/AppConstants';
import usePopularMoviesNavigation from '@navigation/usePopularMovieNavigation';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useDispatch} from 'react-redux';
import {onUserLoginSuccess} from '@popularMoviesMiddleware/redux/login/LoginActions';
import {IDropDown} from '@components/dropdownView/types';
import i18n from '../../localization/i18n';

type Props = NativeStackScreenProps<TRootStackParamList, 'LoginContainer'>;

const LoginContainer: FC<Props> = ({}) => {
  const navigation = usePopularMoviesNavigation();
  const dispatch = useDispatch();

  const {
    loginHeaderTitle,
    emailRegex,
    passwordRegex,
    languageOptionData,
    emailErrorMessage,
    passwordErrorMessage,
  } = AppConstants();

  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const [phoneNumberError, setPhoneNumberError] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [passwordError, setPasswordError] = useState<string>('');

  const [isTyping, setIsTyping] = useState<boolean>(true);
  const [typingTimeout, setTypingTimeout] = useState(null);

  const [dropDownData, setDropDownData] =
    useState<IDropDown[]>(languageOptionData);

  useEffect(() => {
    if (!isTyping) {
      if (phoneNumber && !emailRegex.test(phoneNumber)) {
        setPhoneNumberError(emailErrorMessage);
      } else {
        setPhoneNumberError('');
      }
      if (password && !passwordRegex.test(password)) {
        setPasswordError(passwordErrorMessage);
      } else {
        setPasswordError('');
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isTyping, phoneNumber, password]);

  const onLanguageOptionSelectionHandler = (value: string) => {
    const updatedDropDownData = dropDownData.map(item => ({
      ...item,
      isSelected: item.value === value,
    }));
    i18n.changeLanguage(updatedDropDownData.find(item => item.isSelected)?.key);
    AsyncStorage.setItem(
      'selectedLanguage',
      updatedDropDownData.find(item => item.isSelected)?.key!,
    );
    setDropDownData(updatedDropDownData);
  };

  const onPhoneNumberTextChangeHandler = (newText: string) => {
    setPhoneNumber(newText);

    if (typingTimeout) {
      clearTimeout(typingTimeout);
    }

    const timeout = setTimeout(() => {
      setIsTyping(false);
      console.log('User stopped typing:', newText);
    }, 2000); // 1 second after last input

    setTypingTimeout(timeout);
  };

  const onPasswordTextChangeHandler = (newText: string) => {
    setPassword(newText);

    if (typingTimeout) {
      clearTimeout(typingTimeout);
    }

    const timeout = setTimeout(() => {
      setIsTyping(false);
      console.log('User stopped typing:', newText);
    }, 2000); // 1 second after last input

    setTypingTimeout(timeout);
  };

  const onContinueClickHandler = () => {
    // navigation.replace('PopularMoviesContainer', {props: ''});
    // navigation.replace('PopularMoviesContainer',{props:''});
    AsyncStorage.setItem('isUserLoggedIn', 'true');
    dispatch(
      onUserLoginSuccess({
        isUserLoggedIn: true,
        selectedLanguage: dropDownData.find(item => item.isSelected)?.key,
      }),
    );
  };

  return (
    <BaseScreen showHeader={false} title={loginHeaderTitle}>
      <LoginPresenter
        dropDownData={dropDownData}
        phoneNumber={phoneNumber}
        password={password}
        phoneNumberError={phoneNumberError}
        passwordError={passwordError}
        onPhoneNumberTextChangeHandler={onPhoneNumberTextChangeHandler}
        onPasswordTextChangeHandler={onPasswordTextChangeHandler}
        onContinueClickHandler={onContinueClickHandler}
        onLanguageOptionSelectionHandler={onLanguageOptionSelectionHandler}
      />
    </BaseScreen>
  );
};

export default LoginContainer;
