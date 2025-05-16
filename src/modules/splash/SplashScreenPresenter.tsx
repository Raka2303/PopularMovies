/* eslint-disable react-native/no-inline-styles */
import {useStyles} from '@customHooks/useStyles';
import React, {useEffect, useRef} from 'react';
import {Animated, Easing, View} from 'react-native';
import splashScreenStyles from './SplashScreenStyles';
import AppConstants from '@constants/AppConstants';
import {useTranslation} from 'react-i18next';
import {useDispatch} from 'react-redux';
import { useTheme } from '@customHooks/useTheme';
import { onUserLoginSuccess } from '@popularMoviesMiddleware/redux/login/LoginActions';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SplashScreenPresenter = () => {
  const splashStyles = useStyles(splashScreenStyles);
  const theme = useTheme();
  const {i18n} = useTranslation();
  const introText = AppConstants().introTitle;
  const characters = introText.split('');
  const dispatch = useDispatch();

  const animations = useRef(
    characters.map(() => new Animated.Value(0)),
  ).current;

  useEffect(() => {
    const animatedSequence = characters.map((_, index) =>
      Animated.timing(animations[index], {
        toValue: 1,
        duration: 300,
        easing: Easing.out(Easing.ease),
        useNativeDriver: true,
        delay: index * 100, // Stagger each character
      }),
    );

    Animated.stagger(100, animatedSequence).start(() => {
      setTimeout(async() => {
        (async () =>{
          const isUserLoggedIn = await AsyncStorage.getItem('isUserLoggedIn');
          dispatch(onUserLoginSuccess({isUserLoggedIn:Boolean(isUserLoggedIn),isSplashScreenCompleted:'true'}));
        })();
      }, 1000);
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setTimeout(() => {
      i18n?.changeLanguage('en');
    }, 3000);
  }, [i18n]);

  return (
    <View style={splashStyles.container}>
      <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
        {characters.map((char, index) => (
          <Animated.Text
            key={index}
            style={{
              opacity: animations[index],
              transform: [
                {
                  translateY: animations[index].interpolate({
                    inputRange: [0, 1],
                    outputRange: [20, 0], // animate upward
                  }),
                },
              ],
              fontSize: 50,
              color: theme.text,
            }}>
            {char}
          </Animated.Text>
        ))}
      </View>
    </View>
  );
};

export default SplashScreenPresenter;
