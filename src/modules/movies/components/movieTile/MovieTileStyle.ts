import normalize from '@utils/utilities';
import {StyleSheet} from 'react-native';

export default () => {
  return StyleSheet.create({
    movieTileContainer: {
      width: normalize(190),
      height: normalize(300),
    },
    movieTile: {
      width: normalize(190),
      height: normalize(190),
    },
    movieTitle: {
      // backgroundColor:theme.card,
      width: normalize(190),
      height: normalize(110),
      alignItems:'center',
      justifyContent:'center',
    },
  });
};
