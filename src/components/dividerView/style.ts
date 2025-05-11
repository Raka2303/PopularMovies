import { ThemeType } from '@customHooks/useTheme';
import { StyleSheet } from 'react-native';


export default (theme: ThemeType) =>
  StyleSheet.create({
    dividerView: {
      backgroundColor: theme.border,
    },
  });
