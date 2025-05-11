import { ThemeType } from '@customHooks/useTheme';
import normalize from '@utils/utilities';
import { Dimensions, Platform, StyleSheet } from 'react-native';


const { height: windowHeight, width: windowWidth } = Dimensions.get('window');

export default (theme: ThemeType) =>
  StyleSheet.create({
    container: {
      flex: 1,
      marginTop: Platform.OS === 'ios' ? normalize(10) : 0,
      backgroundColor:theme.background,
    },
    activityIndicator: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },

    backgroundContainer: {
      ...StyleSheet.absoluteFillObject,
    },
    backgroundImage: {
      position: 'absolute',
      width: windowWidth,
      height: windowHeight,
    },
    flatListContent: {
      paddingTop: windowHeight * 0.1,
      paddingBottom: 60,
    },
    itemContainer: {
      height: 100,
      marginVertical: 10,
      backgroundColor: 'transparent',
      borderRadius: 12,
      justifyContent: 'center',
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 3,
    },
    itemText: {
      fontSize: 18,
      fontWeight: '600',
    },
    loaderContainer: {
      paddingVertical: 20,
      alignItems: 'center',
    },
    headerStyle: {
      height: 86,
      paddingTop: 15,
      justifyContent: 'center',
    },
    simpleScreenContainer: { backgroundColor: theme.background, flex: 1 },
  });
