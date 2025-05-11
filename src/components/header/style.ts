import { ThemeType } from '@customHooks/useTheme';
import normalize from '@utils/utilities';
import { StyleSheet } from 'react-native';

export default (theme: ThemeType) =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      // justifyContent: 'space-between',
      height: 56,
      paddingHorizontal: normalize(10),
    },
    backButton: {
      padding: normalize(6),
    },
    title: {
      fontSize: 18,
      fontWeight: '700',
      color: theme.text,
    },
    rightComponent: {
      padding: 8,
    },
  });
