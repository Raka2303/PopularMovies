import {ThemeType} from '@customHooks/useTheme';
import normalize from '@utils/utilities';
import {StyleSheet} from 'react-native';

export default (theme: ThemeType) => {
  return StyleSheet.create({
    container: {
      paddingHorizontal: 20,
    },
    pickerWrapper: {
      borderWidth: 1,
      borderColor: theme.border,
      borderRadius: normalize(20),
      overflow: 'hidden',
    },
    label: {
      fontSize: 16,
      marginBottom: 10,
    },
    picker: {
      height: 60,
      borderColor: theme.border,
      borderWidth: 1,
      color:theme.text,
    },
    selected: {
      marginTop: 20,
      fontSize: 16,
    },
  });
};
