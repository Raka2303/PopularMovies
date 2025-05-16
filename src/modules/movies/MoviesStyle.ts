import normalize from '@utils/utilities';
import {StyleSheet} from 'react-native';

export default () => {
  return StyleSheet.create({
    moviesContainer: {
      marginTop: normalize(8),
      alignSelf:'center',
      flex: 1,
    },
  });
};
