import { ThemeType } from '@customHooks/useTheme';
import normalize from '@utils/utilities';
import {StyleSheet} from 'react-native';

export default (theme:ThemeType) => {
  return StyleSheet.create({
    movieTileContainer: {
      width: normalize(190),
      height: normalize(150),
      backgroundColor:theme.textSecondary,
      marginBottom:normalize(16),
      alignItems:'center',
      borderWidth:0.5,
      borderRadius: 12,
      overflow: 'hidden',
      elevation: 5,

    },
    movieTile: {
      width: normalize(190),
      height: normalize(100),
    },
    movieTitle: {
      width: normalize(190),
      height: normalize(50),
      alignItems:'center',
      justifyContent:'center',
    },
  });
};
