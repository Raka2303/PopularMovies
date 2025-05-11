// screens/LoginContainer.tsx
import React, {FC} from 'react';
import {View} from 'react-native';
import CText from '@components/cText/CText';
import AppConstants from '@constants/AppConstants';
import {useStyles} from '@customHooks/useStyles';
import LoginStyles from './LoginStyles';
import DividerView from '@components/dividerView/DividerView';
import normalize from '@utils/utilities';
import {InputField} from '@components/index';
import ButtonView from '@components/buttonView/ButtonView';
import StickyFooter from '@components/stickyFooter/StickyFooter';

interface ILoginPresenterProps {
  phoneNumber: string;
  password: string;
  onPhoneNumberTextChangeHandler: (newText: string) => void;
  onPasswordTextChangeHandler: (newText: string) => void;
  onContinueClickHandler: () => void;
}

const LoginPresenter: FC<ILoginPresenterProps> = ({
  phoneNumber,
  password,
  onPhoneNumberTextChangeHandler,
  onPasswordTextChangeHandler,
  onContinueClickHandler,
}) => {
  const styles = useStyles(LoginStyles);
  const emailRegex = /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/;
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;

  const {
    introTitle,
    welcome,
    emailAddress,
    passwordPlaceHolder,
    forgotPassword,
    continueText,
    signUp,
    dontHaveAnAccount,
  } = AppConstants();

  return (
    <View style={styles.container}>
      <DividerView marginTop={normalize(100)} />
      <View style={styles.Logo}>
        <CText.HeaderText>{introTitle.split('')[0]}</CText.HeaderText>
      </View>
      <DividerView marginTop={normalize(40)} />
      <CText.HeaderText>{welcome}</CText.HeaderText>
      <DividerView marginTop={normalize(40)} />
      <View style={styles.phoneNumberInput}>
        <InputField
          maxLength={30}
          keyboardType="email-address"
          inputMode="email"
          placeholder={emailAddress}
          value={phoneNumber}
          onChangeText={onPhoneNumberTextChangeHandler}
        />
      </View>
      <DividerView marginTop={normalize(20)} />
      <View style={styles.phoneNumberInput}>
        <InputField
          maxLength={30}
          keyboardType="default"
          inputMode="text"
          placeholder={passwordPlaceHolder}
          value={password}
          onChangeText={onPasswordTextChangeHandler}
        />
      </View>
      <DividerView marginTop={normalize(20)} />
      <View style={styles.forgotPasswordContainer}>
        <CText.ParaText>{forgotPassword}</CText.ParaText>
      </View>
      <DividerView marginTop={normalize(40)} />
      <StickyFooter>
        <View style={styles.loginButtonContainer}>
          <ButtonView
            isDisabled={
              !phoneNumber ||
              !password ||
              !emailRegex.test(phoneNumber) ||
              !passwordRegex.test(password) ||
              !(password.length > 7)
            }
            caption={continueText}
            onPress={onContinueClickHandler}
          />
        </View>
        <DividerView marginTop={normalize(40)} />
        <View style={styles.orStyle}>
          <DividerView height={1} cStyle={styles.or} />
          <CText.SubHeaderText>{'OR'}</CText.SubHeaderText>
          <DividerView height={1} cStyle={styles.or} />
        </View>
        <DividerView marginTop={normalize(20)} />
        <View style={styles.signUpContainer}>
          <CText.SubHeaderText style={styles.dontHaveAcount}>
            {dontHaveAnAccount}
          </CText.SubHeaderText>
          <CText.SubHeaderText>{signUp}</CText.SubHeaderText>
        </View>
      </StickyFooter>
    </View>
  );
};

export default LoginPresenter;
