import {ThemeType} from '@customHooks/useTheme';
import normalize from '@utils/utilities';
import {StyleSheet} from 'react-native';

export default (theme: ThemeType) => {
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.elevation2,
      overflow: 'hidden',
      borderRadius: normalize(20),
      paddingHorizontal: 16,
      color: theme.text,
      fontSize: normalize(14),
      fontWeight: '400',
      minHeight:normalize(60),
      // direction: 'rtl',
    },
  });
};
