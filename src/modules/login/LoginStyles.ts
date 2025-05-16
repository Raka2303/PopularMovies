import {ThemeType} from '@customHooks/useTheme';
import normalize from '@utils/utilities';
import {StyleSheet} from 'react-native';

export default (theme: ThemeType) => {
  return StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
    },
    Logo: {
      backgroundColor: theme.info,
      width: normalize(50),
      height: normalize(50),
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: normalize(10),
    },
    phoneNumberInput: {
      width: '100%',
      // minHeight: 100,
      paddingHorizontal: normalize(16),
      overflow: 'hidden',
    },
    forgotPasswordContainer: {
      alignItems: 'flex-end',
      width: '100%',
      paddingHorizontal: normalize(16),
    },
    loginButtonContainer: {
      width: '100%',
      height: normalize(60),
      paddingHorizontal: normalize(16),
    },
    orStyle: {
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: normalize(16),
    },
    or: {
      flex: 0.45,
    },
    signUpContainer: {
      flexDirection: 'row',
    },
    dontHaveAcount: {
      color: theme.placeholder,
      marginRight: normalize(10),
    },
    stickyFooter: {
      width: '100%',
      position: 'absolute',
      bottom: 50,
      alignItems: 'center',
    },
  });
};
