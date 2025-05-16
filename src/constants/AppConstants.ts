import {useTranslation} from 'react-i18next';

export default () => {
  const {t} = useTranslation();
  return {
    emailRegex: /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/,
    passwordRegex:
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/,
    introTitle: t('screens.intro.title'),
    loginHeaderTitle: t('screens.login.text.login'),
    welcome: t('screens.login.text.welcome'),
    phoneNumberPlaceHolder: t('screens.login.text.phoneNumber'),
    emailAddress: t('screens.login.text.emailAddress'),
    passwordPlaceHolder: t('screens.login.text.password'),
    forgotPassword: t('screens.login.text.forgotPassword'),
    continueText: t('screens.login.text.continue'),
    dontHaveAnAccount: t('screens.login.text.dontHaveAnAccount'),
    signUp: t('screens.login.text.signUp'),
    popularMovieTitle: t('screens.movies.title'),
    changeLanguage: t('screens.login.text.changeLanguage'),
    emailErrorMessage:t('screens.login.text.emailErrorMessage'),
    passwordErrorMessage:t('screens.login.text.passwordErrorMessage'),
    languageOptionData: [
      {
        label: 'English',
        value: 'english',
        key: 'en',
        languageCode: 'en-US',
        isSelected: true,
      },
      {
        label: 'العربية',
        value: 'arabic',
        key: 'ar',
        languageCode: 'ar-AE ',
        isSelected: false,
      },
    ],
  };
};
