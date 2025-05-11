import { ThemeType } from '@customHooks/useTheme';
import normalize from '@utils/utilities';
import { StyleSheet } from 'react-native';

export default (theme: ThemeType) => {
  return StyleSheet.create({
    footer: {
      alignItems:'center',
      padding: normalize(16),
      paddingBottom: normalize(30),
      borderTopLeftRadius: normalize(16),
      borderTopRightRadius: normalize(16),
      position: 'absolute',
      bottom: 20,
      right: 0,
      left: 0,
      backgroundColor: theme.background,
      elevation: 10,
      shadowColor: theme.elevation2,
      shadowOpacity: 0.1,
      shadowRadius: 4,
      // borderWidth: 0.5,
      borderColor: theme.border,
      shadowOffset: { width: 0, height: 2 },
    },
  });
};
