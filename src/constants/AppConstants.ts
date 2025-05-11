import {useTranslation} from 'react-i18next';

export default () => {
  const {t} = useTranslation();
  return {
    introTitle: t('screens.intro.title'),
    loginHeaderTitle:t('screens.login.text.login'),
    welcome:t('screens.login.text.welcome'),
    phoneNumberPlaceHolder:t('screens.login.text.phoneNumber'),
    emailAddress:t('screens.login.text.emailAddress'),
    passwordPlaceHolder:t('screens.login.text.password'),
    forgotPassword:t('screens.login.text.forgotPassword'),
    continueText:t('screens.login.text.continue'),
    dontHaveAnAccount:t('screens.login.text.dontHaveAnAccount'),
    signUp:t('screens.login.text.signUp'),
    popularMovieTitle:t('screens.movies.title'),
  };
};
