import {ThemeType} from '@customHooks/useTheme';
import normalize from '@utils/utilities';
import {StyleSheet} from 'react-native';

export default (theme: ThemeType) => {
  return StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:theme.primaryVariant,
        borderRadius:normalize(50),
        justifyContent:'center',
        alignItems:'center'
    },
  });
};
